// https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding

import { categorySeed, catType, resourceTypeSeed, userSeed } from "./consts";
import { prisma } from "./db";

function randomDecimalNumber (min: number, max: number) {
    return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

function generateResourceDataItem(categoriesArray: catType[]) {
    const startPointer = Math.round(randomDecimalNumber(0, categoriesArray.length*0.5))
    const endPointer = Math.round(randomDecimalNumber(categoriesArray.length*0.5, categoriesArray.length))
    
    return {
        name: `Resource ${Math.random()*100}`,
        description: `Resource description`,
        price: randomDecimalNumber(100, 1000),
        salePercent: randomDecimalNumber(1, 10) <= 5 ? null : randomDecimalNumber(1, 50),
        resourceTypeId: Math.round(randomDecimalNumber(1, resourceTypeSeed.length)),
        categories: {
            connect: categoriesArray.slice(startPointer, endPointer)
        }
    }
}

async function createData() {
    await prisma.user.createMany({
        data: userSeed
    });

    await prisma.category.createMany({
        data: categorySeed
    });

    await prisma.resourceType.createMany({
        data: resourceTypeSeed
    });

    const categories = await prisma.category.findMany()
    for (let i=0; i < 100; i++) {
        await prisma.resource.create({
            data: generateResourceDataItem(categories),
        })
    };

    await prisma.cart.createMany({
        data: [
            {
                userId: 1,
                totalAmount: 0,
                token: '11111',
            },
            {
                userId: 2,
                totalAmount: 0,
                token: '222222',
            },
        ],
    });

    await prisma.cartItem.create({
        data: {
            resourceId: 1,
            cartId: 1,
            quantity: 2,
        },
    });
}

async function deleteData() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "ResourceType" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Resource" RESTART IDENTITY CASCADE`;
}

async function main() {
    try {
        await deleteData();
        await createData();
    } catch (error) {
        console.log(error);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (error) => {
        console.log('Seeding error', error);
        await prisma.$disconnect();
        process.exit(1);
    })
