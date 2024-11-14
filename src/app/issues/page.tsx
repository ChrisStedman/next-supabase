import { Issue } from '@/types/issues';
import { Button, Table } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import { getIssues } from '../lib/supabase/issues/Issues';

export default async function Issues() {
  const issues: Issue[] = await getIssues()

  return (
    <div>
      <div className='mb-5'>
        <Button>
            <Link href='issues/new' >New Issue</Link>
        </Button>
      </div>
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
                <Table.Cell>{issue.title}</Table.Cell>
                <Table.Cell>{issue.status}</Table.Cell>
                <Table.Cell>{new Date(issue.created_at).toLocaleString('en-AU')}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
    </div>
  )
}