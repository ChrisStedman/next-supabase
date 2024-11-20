import { getIssue } from '@/app/lib/supabase/issues/Issues'
import { Box, Grid } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import { EditIssueButton } from './EditIssueButton'
import IssueDetails from './IssueDetails'
import { DeleteIssueButton } from './DeleteIssueButton'

type Params = Promise<{ id: string }>

export default async function IssueDetailPage(props: {params: Params}) {
    const params = await props.params
    const issue = await getIssue(Number(params.id))

    if(!issue) {
        notFound()
    }

    return (
        <Grid columns='5' gap='5'>
            <Box className='col-span-4'>
            <IssueDetails issue={issue} />
            </Box>
            <Box className='flex gap-3'>
                <EditIssueButton issueId={issue.id} />
                <DeleteIssueButton issueId={issue.id} />
            </Box>
        </Grid>
    )
}
