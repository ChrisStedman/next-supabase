import { Box, Card, Skeleton } from '@radix-ui/themes'
import React from 'react'


export default function LoadingIssueDetails() {
  return (
    <Box className='max-w-xl'>
      <div className='flex gap-3 my-2 items-center'>
          <Skeleton width='5rem'/>
          <Skeleton width='8rem'/>
      </div>
      <div className='flex gap-3 my-2 mt-4'>
        <Skeleton width='5rem'/>
        <Skeleton width='5rem'/>
      </div>
      <Card className='flex flex-col gap-2'>
        <Skeleton width='auto' height='1rem'></Skeleton>
        <Skeleton width='auto' height='1rem'></Skeleton>
        <Skeleton width='auto' height='1rem'></Skeleton>
        <Skeleton width='auto' height='1rem'></Skeleton>
        <Skeleton width='auto' height='1rem'></Skeleton>
    </Card>
  </Box>
  )
}
