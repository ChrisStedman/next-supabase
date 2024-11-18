import { IconEdit } from '@/app/components/icons/Edit'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'

export const EditIssueButton = ({issueId}: {issueId: number}) => {
  return (
    <Button>
        <Link href={`/issues/${issueId}/edit`}>Edit Issue</Link>
        <IconEdit />
    </Button>
  )
}
