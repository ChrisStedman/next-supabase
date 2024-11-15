import { IssueStatusBadge } from '@/app/components'
import { Issue } from '@/types/issues'
import { Card, Heading, Text } from '@radix-ui/themes'

export default function IssueDetails({issue} : {issue: Issue}) {
  return (
    <>
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
    </>
  )
}
