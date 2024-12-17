// https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding

import { categorySeed, resourceTypeSeed, userSeed } from "./consts";
import { prisma } from "./db";

async function createData() {
    await prisma.user.createMany({
        data: userSeed
    })

    await prisma.category.createMany({
        data: categorySeed
    })

    await prisma.resourceType.createMany({
        data: resourceTypeSeed
    })

    await prisma.resource.createMany({
        data: []
    })
}

async function deleteData() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
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