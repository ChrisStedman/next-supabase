'use client';

import React from 'react'
import IssueForm from '../../_components/IssueForm'
import { submitEditIssue } from './actions'
import { Issue } from '@/types/issues';


export default function EditIssueClientPage({ issue } : { issue : Issue}) {
  return (
    <IssueForm actionParam={submitEditIssue} issue={issue} />
  )
}
