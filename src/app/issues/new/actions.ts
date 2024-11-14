import { redirect } from "next/navigation";
import { FormState } from "../issuesForm";
import { createIssueSchema } from "@/schemas/IssueSchemas";


export const submitCreateIssue = async (state: FormState, formData: FormData) => {
  const validatedFields = createIssueSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
  })

  if (!validatedFields.success) {
      return {
          errors: validatedFields.error.flatten().fieldErrors,
      }
  }

  const data = await fetch('/api/issues', {
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