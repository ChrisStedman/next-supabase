'use client';

import { Button, Callout, TextArea, TextField } from '@radix-ui/themes'
import React, { useActionState } from 'react'
import { submitCreateIssue } from './actions';
import { ErrorMessage, Spinner } from '@/app/components';


export default function NewIssue() {
  const [state, action, isPending] = useActionState(submitCreateIssue, undefined)

  return (
    <div className='max-w-xl'>
      {state?.serverError &&      
          <Callout.Root color='red' className='mb-5'>
            <Callout.Text>{state.serverError}</Callout.Text>
          </Callout.Root>
      }

      <form action={action} className='space-y-3'>
          <TextField.Root name='title' placeholder="Title" />
          <ErrorMessage>{state?.errors?.title}</ErrorMessage>
          <TextArea name='description' placeholder='Description' />
          <ErrorMessage>{state?.errors?.description}</ErrorMessage>
          <Button type='submit' disabled={isPending}>
            Submit New Issue {<Spinner displaySpinner={isPending} />}
          </Button>
      </form>
    </div>
  )
}
