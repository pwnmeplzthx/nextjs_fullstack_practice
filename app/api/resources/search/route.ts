import { prisma } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const query = req.nextUrl.searchParams.get('query') || '';
    const resources = await prisma.resource.findMany({
        where: {
            name: {
                contains: query,
                // case (upper/lower) sensitivity
                mode: 'insensitive',
            }
        },
        take: 5
    });

    return NextResponse.json(resources)
}