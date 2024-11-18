'use client';

import { Button, Callout, TextArea, TextField } from '@radix-ui/themes'
import React, { useActionState } from 'react'
import { ErrorMessage, Spinner } from '@/app/components';
import { IssueFormState } from '../issuesFormState';
import { Issue } from '@/types/issues';
import { ValidationError } from '@/types/validationError';

interface Props {
  issue? : Issue,
  actionParam : (state: IssueFormState, formData: FormData) => Promise<ValidationError>
}

export default function IssueForm({ issue, actionParam } : Props) {
  const [state, action, isPending] = useActionState(actionParam, undefined)

  return (
    <div className='max-w-xl'>
      {state?.serverError &&      
          <Callout.Root color='red' className='mb-5'>
            <Callout.Text>{state.serverError}</Callout.Text>
          </Callout.Root>
      }

      <form action={action} className='space-y-3'>
          <TextField.Root name='id' defaultValue={issue?.id} className='hidden'/>
          <TextField.Root name='title' placeholder="Title" defaultValue={issue?.title}/>
          <ErrorMessage>{state?.errors?.title}</ErrorMessage>
          <TextArea name='description' placeholder='Description' defaultValue={issue?.description} />
          <ErrorMessage>{state?.errors?.description}</ErrorMessage>
          <Button type='submit' disabled={isPending}>
            {issue ? 'Update' : 'Submit New'} Issue {<Spinner displaySpinner={isPending} />}
          </Button>
      </form>
    </div>
  )
}
