'use client';

import IssueFormSkeleton from '../_components/IssueFormSkeleton';
import { submitCreateIssue } from './actions';
import dynamic from 'next/dynamic';

// Not needed here, but demonstrates how to force dynamic loading of entire page to prevent component 'pop-in'
const IssueForm = dynamic(
  () => import('@/app/issues/_components/IssueForm'),
  { ssr: false,
    loading: () => <IssueFormSkeleton />
   }
)


export default function NewIssuePage() {
  return (
    <IssueForm actionParam={submitCreateIssue} />
  )
}
