import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod"
import { formSchema } from "@/lib/FormValidatiopn"
import { Post } from "@prisma/client";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type actions = { 
  action: "Create" | "Edit" | "Update",
  isEditing?: boolean,
  initValues?: z.infer<typeof formSchema>
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  error: boolean
  success: boolean
  pending: boolean
  // values:z.infer<typeof formSchema>
};

export type PostIdProps = {
  params: {
      postId: string
  }
}
