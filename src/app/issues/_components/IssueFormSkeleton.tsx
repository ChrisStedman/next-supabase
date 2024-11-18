
import { Button, Skeleton, TextArea, TextField } from '@radix-ui/themes'


export default function IssueFormSkeleton() {
  return (
    <div className='max-w-xl space-y-3 mt-4'>
        <Skeleton>
            <TextField.Root name='title' placeholder="Title" />
        </Skeleton>
        <Skeleton>
          <TextArea name='description' placeholder='Description'  />
        </Skeleton>
        <Skeleton>
          <Button type='submit' >
            Submit New Issue
          </Button>
        </Skeleton>
    </div>
  )
}