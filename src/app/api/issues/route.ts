import { Issue } from "@/types/issues";
import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';

const createIssueSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1)
})

export async function POST(request: NextRequest) {
    const body = await request.json()

    const validation = createIssueSchema.safeParse(body)

    if(!validation.success) {
        return NextResponse.json(validation.error.errors, {status: 400})
    }

    const client = await createClient();

    const { data, error } = await client
    .from("issues")
    .insert({
        title: body.title,
        description: body.description
    })
    .select()
    .returns<Issue[]>()

    if(error) {
        return NextResponse.json({error}, { status: 400 })
    }

    return NextResponse.json(data?.[0], { status: 201 })
}