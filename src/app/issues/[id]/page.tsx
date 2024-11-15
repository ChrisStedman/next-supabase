import { IssueStatusBadge } from '@/app/components'
import { IconEdit } from '@/app/components/icons/Edit'
import { getIssue } from '@/app/lib/supabase/issues/Issues'
import { Box, Button, Card, Grid, Heading, Text } from '@radix-ui/themes'
import Link from 'next/link'
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
        <Grid columns='2' gap='5'>
            <Box>
            <div className='flex gap-3 my-2 items-center'>
                <Heading>{issue.title}</Heading>
                <IssueStatusBadge status={issue.status} />
            </div>
            <div className='flex gap-3 my-2 mt-4'>
                <Text size="2">Created: {new Date(issue.created_at).toLocaleString('en-AU')}</Text>
                <Text size="2">Updated: { issue.updated_at ?  new Date(issue.updated_at).toLocaleString('en-AU') : '-' }</Text>
            </div>
            <Card className='max-w-xl'>
                <p>{issue.description}</p>
            </Card>
            </Box>
            <Box>
                <Button>
                    <IconEdit />
                    <Link href={`/issues/${issue.id}/edit`}>Edit Issue</Link>
                </Button>
            </Box>
        </Grid>
    )
}
