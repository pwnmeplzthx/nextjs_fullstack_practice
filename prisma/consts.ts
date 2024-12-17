import { Prisma } from "@prisma/client";
import { hashSync } from "bcrypt";

export const userSeed: Prisma.UserCreateManyInput[] = [
    {
        fullName: 'Test User 1',
        email: 'testuser1@test.ru',
        password: hashSync('111111', 10),
        role: 'USER',
        verified: new Date()
    }, {
        fullName: 'Test Admin 2',
        email: 'testadmin2@test.ru',
        password: hashSync('222222', 10),
        role: 'USER',
        verified: new Date()
    }
]

export const categorySeed = [
    {
        name: 'Category 1'
    }, {
        name: 'Category 2'
    }, {
        name: 'Category 3'
    }, {
        name: 'Category 4'
    }, {
        name: 'Category 5'
    },
]

export const resourceTypeSeed = [
    {
        name: 'Resource type 1'
    }, {
        name: 'Resource type 2'
    }, {
        name: 'Resource type 3'
    }, {
        name: 'Resource type 4'
    }, {
        name: 'Resource type 5'
    },
]

export const resourceSeed = [
    
]