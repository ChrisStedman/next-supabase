import { Issue } from '@/types/issues';
import { Table } from '@radix-ui/themes'
import React from 'react'
import { getIssues } from '../lib/supabase/issues/Issues';
import IssuesToolbar from './IssuesToolbar';
import { IssueStatusBadge, Link } from '../components';

export default async function IssuesPage() {
  const issues: Issue[] = await getIssues()

  return (
    <div>
      <IssuesToolbar />
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Created</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map(issue => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
              </Table.Cell>
              <Table.Cell><IssueStatusBadge status={issue.status} /></Table.Cell>
              <Table.Cell>{new Date(issue.created_at).toLocaleString('en-AU')}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}