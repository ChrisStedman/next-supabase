import { Box, Skeleton } from '@radix-ui/themes'
import React from 'react'


export default function LoadingNewIssue() {
  return (
    <Box className='max-width-xl'>
      Loading
      <Skeleton width='auto' />
      <Skeleton width='auto' />
    </Box>
  )
}