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
  initValues?: Post[]
  // onSubmit: (values: z.infer<typeof formSchema>) => void;
};

export type PostIdProps = {
  params: {
      postId: string
  }
}
