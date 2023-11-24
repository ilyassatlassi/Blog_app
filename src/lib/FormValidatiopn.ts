import { z } from "zod";

export const formSchema = z.object({
    postTitle: z.string().min(2, {
        message: "Title must be at least 2 characters.",
    }).max(50, {
        message: "Title must contain at most 50 character(s)"
    }),
    postContent: z.string().min(2, {
        message: "Content must be at least 2 characters.",
    }).max(1500, {
        message: "Content must contain at most 1500 character(s)"
    }),
    tagId: z.string()
})