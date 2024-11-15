import { getIssue, updateIssue } from "@/app/lib/supabase/issues/Issues";
import { createIssueSchema } from "@/schemas/IssueSchemas";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }) {
    const id = Number((await params).id)

    if(!id) {
        return NextResponse.json({description: "No valid parameter"}, { status: 400 })
    }

    const issue = await getIssue(id)

    if(!issue) {
        notFound()
    }

    return NextResponse.json(issue)
}

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }) {
    const id = Number((await params).id)

    if(!id) {
        return NextResponse.json({description: "No valid parameter"}, { status: 400 })
    }

    const body = await request.json()
    const validation = createIssueSchema.safeParse(body)

    if(!validation.success) {
        return NextResponse.json(validation.error.errors, {status: 400})
    }

    const issue = await updateIssue({
        id: id,
        title: body.title,
        description: body.description
    })

    if(!issue) {
        notFound()
    }

    return NextResponse.json(issue)
}