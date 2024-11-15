import { z } from "zod"

const createIssueSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1)
})

const editIssueSchema = z.object({
    id: z.number(),
    title: z.string().min(1).max(255),
    description: z.string().min(1)
})

export {
    createIssueSchema,
    editIssueSchema
}