import { createIssueSchema } from "@/schemas/IssueSchemas";
import { Issue } from "@/types/issues";
import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json()

    const validation = createIssueSchema.safeParse(body)

    if(!validation.success) {
        return NextResponse.json(validation.error.errors, {status: 400})
    }

    const client = await createClient();

    const { data } = await client
    .from("issues")
    .insert({
        title: body.title,
        description: body.description
    })
    .select()
    .returns<Issue[]>()

    if(data) {
        return NextResponse.json(data?.[0], { status: 201 })
    }

    return NextResponse.json({description: "Insert failed"}, { status: 400 })
}