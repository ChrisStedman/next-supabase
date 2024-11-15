import { getIssue } from "@/app/lib/supabase/issues/Issues";
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