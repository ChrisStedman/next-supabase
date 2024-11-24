import { redirect } from "next/navigation";


export const deleteIssue = async (id: number) => {
  const data = await fetch(`/api/issues/${id}`, {
    method: 'DELETE',
  })

  if(data.ok) {
    redirect('/issues')
  }

  return {
    serverError: "An unexpected error has occured - Please try again"
  }
}