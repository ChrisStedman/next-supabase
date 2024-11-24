'use client';

import { IconBin } from '@/app/components/icons/Bin'
import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import { deleteIssue } from './actions';
import { useState } from 'react';
import { Spinner } from '@/app/components';


export const DeleteIssueButton = ({issueId}: {issueId: number}) => {
  const [error, setError] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDeleteIssue = async () => {
    setIsDeleting(true)
    const error = await deleteIssue(issueId);

    if(error) {
      setError(true)
    }
    setIsDeleting(false)
  }

  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color='red'  disabled={isDeleting}>
              Delete Issue
              {isDeleting ? <Spinner displaySpinner={isDeleting} /> : <IconBin /> }
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Confirm Delete</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure you want to delete this issue? This action cannot be undone.
          </AlertDialog.Description>
          <Flex mt='4' gap='3'>
            <AlertDialog.Cancel>
              <Button variant='soft' color='gray'>Cancel</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button color='red' onClick={handleDeleteIssue}>
                Delete Issue
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <AlertDialog.Root open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description className='mb-3'>This issue could not be deleted.</AlertDialog.Description>
          <Button color='gray' variant='soft' onClick={() => setError(false)}>OK</Button>          
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  )
}
