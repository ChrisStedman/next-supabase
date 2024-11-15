import React from 'react'
import { getIssue } from '@/app/lib/supabase/issues/Issues';
import EditIssueClientPage from './clientPage';
import { notFound } from 'next/navigation';

type Params = Promise<{ id: string }>

export default async function EditIssuePage(props: {params: Params}) {
    const params = await props.params
    const issue = await getIssue(Number(params.id))

    if(!issue) {
        notFound()
    }

  return (
    <EditIssueClientPage issue={issue} />
  )
}
