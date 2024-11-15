import { Status } from '@/types/status'
import { Badge } from '@radix-ui/themes'
import React from 'react'

interface Props {
    status: Status
}

const statusMap: Record<Status, {label: string, colour: 'red' | 'orange' | 'green'}> = {
    OPEN : {label: 'Open', colour: 'red'},
    IN_PROGRESS : {label: 'In Progress', colour: 'orange'},
    CLOSED : {label: 'Closed', colour: 'green'},
}

const IssueStatusBadge = ({ status }: Props) => {
  return (
    <Badge color={statusMap[status].colour}>{statusMap[status].label}</Badge>
  )
}

export default IssueStatusBadge
