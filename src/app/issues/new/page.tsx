'use client';

import { submitCreateIssue } from './actions';
import IssueForm from '../_components/IssueForm';


export default function NewIssuePage() {
  return (
    <IssueForm actionParam={submitCreateIssue} />
  )
}
