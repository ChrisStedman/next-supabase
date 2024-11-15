import { Skeleton, Table } from '@radix-ui/themes'
import React from 'react'
import IssuesToolbar from './IssuesToolbar'


export default function LoadingIssues() {
    const issues = [1, 2, 3, 4, 5]
    
  return (
    <>
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
              <Table.Row key={issue}>
                <Table.Cell><Skeleton /></Table.Cell>
                <Table.Cell><Skeleton /></Table.Cell>
                <Table.Cell><Skeleton /></Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
    </>
  )
}
