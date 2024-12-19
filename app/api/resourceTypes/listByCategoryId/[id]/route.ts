import { prisma } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: number } }) {
    const resources = await prisma.resource.findMany({
        where: {
            categories: {
                some: {
                    id: Number(params.id)
                }
            },
        },
        select: {
            resourceTypeId: true,
        }
    })
    
    const resourceTypes = await prisma.resourceType.findMany({
        where: {
            id: { in: resources.map((item) => (item.resourceTypeId)) }
        }
    })

    return NextResponse.json(resourceTypes)
}