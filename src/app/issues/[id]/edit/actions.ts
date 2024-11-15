import { redirect } from "next/navigation";
import { IssueFormState } from "../../issuesFormState";
import { editIssueSchema } from "@/schemas/IssueSchemas";


export const submitEditIssue = async (state: IssueFormState, formData: FormData) => {
  const validatedFields = editIssueSchema.safeParse({
    id: Number(formData.get('id')),
    title: formData.get('title'),
    description: formData.get('description'),
  })

  if (!validatedFields.success) {
      return {
          errors: validatedFields.error.flatten().fieldErrors,
      }
  }

  const data = await fetch(`/api/issues/${formData.get('id')}`, {
    method: 'PUT',
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