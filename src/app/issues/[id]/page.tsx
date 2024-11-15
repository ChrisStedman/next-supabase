import { getIssue } from '@/app/lib/supabase/issues/Issues'
import { Box, Grid } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import { EditIssueButton } from './EditIssueButton'
import IssueDetails from './IssueDetails'

type Params = Promise<{ id: string }>

export default async function IssueDetailPage(props: {params: Params}) {
    const params = await props.params
    const issue = await getIssue(Number(params.id))

    if(!issue) {
        notFound()
    }

    return (
        <Grid columns='2' gap='5'>
            <Box>
            <IssueDetails issue={issue} />
            </Box>
            <Box>
                <EditIssueButton issueId={issue.id} />
            </Box>
        </Grid>
    )
}
