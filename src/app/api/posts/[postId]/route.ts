import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/db";
import { formSchema } from "@/lib/FormValidatiopn";
import { z } from "zod";


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

 type PostIdProps = {
    params: {
        postId: string
    }
  }


export async function DELETE(req: Request, context: PostIdProps) {
  try {
    const{ params } = context
    await prisma.post.delete({
      where: {
        id: params.postId,
      },
    });
    return new Response(null, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      {
        message: getErrorMessage(error),
      },
      { status: 500 }
    );
  }
}

export async function PATH(req: Request, context: PostIdProps) {
  try {
    const result: z.infer<typeof formSchema> = await req.json();

     await prisma.post.update({
      where: {
        id: context.params.postId,
      },
      data: {
        title: result.postTitle,
        content: result.postContent,
        tagId: result.tagId,
      },
    });
    return NextResponse.json( {message: 'Update Succes'}, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: getErrorMessage(error),
      },
      { status: 500 }
    );
  }
}

export async function GET(req: Request, context:PostIdProps) {
  try {
    const post = await prisma.post.findFirst({
      where:{
        id: context.params.postId
      }
    });
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        error: getErrorMessage(error),
      },
      { status: 500 }
    );
  }
}
