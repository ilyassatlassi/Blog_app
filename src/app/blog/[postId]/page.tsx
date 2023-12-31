import ButtonActions from "@/components/ButtonActions"
import BackButton from "@/components/backButton"
import { PrismaClient } from '@prisma/client';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PostIdProps } from "@/lib/utils"

const prisma = new PrismaClient();


const getPost = async (id: string) => {
    const res = await prisma.post.findFirst(
        {
            where: {
                id: id
            },
            select: {
                id: true,
                title: true,
                content: true,
                tag: true
            }
        }
    )
    return res
}


const BlogPostPage = async ({ params }: PostIdProps) => {
    const post = await getPost(params.postId)
    return (
        <div className="mx-auto w-full relative top-0 bottom-0 max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
            <BackButton className="hidden sm:flex"/>
            <Card className=" inset-x-4 max-w-2xl absolute md:inset-x-0 sm:top-14 m-auto max-h-max shadow-2xl">
                <CardHeader>
                    <CardTitle>{post?.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    {post?.content}
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4">
                    <Badge>{post?.tag.name}</Badge>
                    
                     <ButtonActions id={params.postId}  />
                </CardFooter>
            </Card>
        </div>
    )
}

export default BlogPostPage