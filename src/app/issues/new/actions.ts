import { redirect } from "next/navigation";
import { IssueFormState } from "../issuesFormState";
import { issueSchema } from "@/schemas/IssueSchemas";
import { ValidationError } from "@/types/validationError";


export const submitCreateIssue = async (state: IssueFormState, formData: FormData): Promise<ValidationError> => {
  const validatedFields = issueSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
  })

  if (!validatedFields.success) {
      return {
          errors: validatedFields.error.flatten().fieldErrors,
      }
  }

  const data = await fetch('/api/issues', {
    cache: 'no-store',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: formData.get('title'),
      description: formData.get('description')
    })
  })

  if(data.ok) {
    redirect('/issues')
  }

  return {
    serverError: "An unexpected error has occured - Please try again"
  }
}