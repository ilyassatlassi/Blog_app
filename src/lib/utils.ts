import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type actions = { 
  action: "Create" | "Edit" | "Update",
  isEditing?: boolean
};
