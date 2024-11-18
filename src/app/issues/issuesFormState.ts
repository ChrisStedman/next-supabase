export type IssueFormState =
  | {
      errors?: {
        title?: string[]
        description?: string[]
        serverError?: string
      }
      message?: string
    }
  | undefined