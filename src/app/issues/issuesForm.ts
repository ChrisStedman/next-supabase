export type FormState =
  | {
      errors?: {
        title?: string[]
        description?: string[]
        serverError?: string
      }
      message?: string
    }
  | undefined