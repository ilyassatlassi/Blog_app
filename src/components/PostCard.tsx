import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Tag } from "@prisma/client"
import { FC } from "react"
import { Badge } from "./ui/badge"

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
        <Card className="w-full flex flex-col shadow-2xl" >
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="line-clamp-1">
                {content}
            </CardContent>
            <Link className="flex justify-end" href={`/blog/${id}`}><Button variant="link">Read more</Button></Link>
            <CardFooter>
                <Badge>{tag.name}</Badge>
            </CardFooter>
        </Card>
    )
}

export default PostCard