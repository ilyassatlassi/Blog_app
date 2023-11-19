import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Tag } from "@prisma/client"
import { FC } from "react"

type propsCard = {
    post: {
        id: string
        title: string
        content: string
        tag: Tag
    }
}

const PostCard: FC<propsCard> = ({ post }) => {
    const { id, title, content, tag } = post

    return (
        <Card className="w-full" >
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                {content}
            </CardContent>
            {tag.name}
            <CardFooter className="flex justify-">
                <Link href={`/blog/${id}`}><Button variant="link">Read more...</Button></Link>
            </CardFooter>

        </Card>
    )
}

export default PostCard