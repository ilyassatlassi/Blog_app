import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { formSchema } from "@/lib/FormValidatiopn";
import { z } from "zod";

const prisma = new PrismaClient();
const getErrorMessage = (error: unknown): string => {
  let message: string;
  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (error === "string") {
    message = error;
  } else {
    message = "Somthing went wrong!";
  }
  return message;
};

export async function POST(req: Request) {
  try {
    const result: z.infer<typeof formSchema> = await req.json();
    
    const post = await prisma.post.create({
        data: {
            title: result.title,
            content: result.content,
            tagId: result.tagId
        }
    });
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: getErrorMessage(error),
      },
      { status: 500 }
    );
  }
}
