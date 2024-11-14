'use client';

import { Button, Callout, TextArea, TextField } from '@radix-ui/themes'
import React, { useActionState } from 'react'
import { submit } from './actions';

export default function page() {
  const [state, action, isPending] = useActionState(submit, undefined)

  return (
    <div className='max-w-xl'>
    {state?.serverError &&      
        <Callout.Root color='red' className='mb-5'>
          <Callout.Text>{state.serverError}</Callout.Text>
        </Callout.Root>}

      <form action={action} className='space-y-3'>
          <TextField.Root name='title' placeholder="Title" />
          {state?.errors?.title && <p className="text-red-500 mt-2">{state.errors.title}</p>}
          <TextArea name='description' placeholder='Description' />
          {state?.errors?.description && <p className="text-red-500 mt-2">{state.errors.description}</p>}
          <Button type='submit' disabled={isPending}>Submit New Issue</Button>
      </form>
    </div>
  )
}
