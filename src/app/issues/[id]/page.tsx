import { getIssue } from '@/app/lib/supabase/issues/Issues'
import { notFound } from 'next/navigation'
import React from 'react'

type Params = Promise<{ id: string }>

export default async  function IssueDetailPage(props: {params: Params}) {
    const params = await props.params
    const issue = await getIssue(Number(params.id))

    if(!issue) {
        notFound()
    }

    return (
        <div>IssueDetailPage
            <p>{issue.title}</p>
            <p>{issue.description}</p>
            <p>{issue.status}</p>
            <p>{new Date(issue.created_at).toLocaleString('en-AU')}</p>
            {issue.updated_at && <p>{new Date(issue.updated_at).toLocaleString('en-AU')}</p>}
        </div>
    )
}
