import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"

const PostCard = () => {
    return (
        <Card className="w-full" >
            <CardHeader>
                <CardTitle>ilyass</CardTitle>
            </CardHeader>
            <CardContent>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, ea expedita veniam molestias alias sed totam architecto.
                
            </CardContent>
            <CardFooter className="flex justify-">
                <Link href={'/blog/1'}><Button variant="link">Read more...</Button></Link>
            </CardFooter>
            
        </Card>
        //     <div className="card w-full bg-base-100 shadow-xl border">
        //     <div className="card-body">
        //       <h2 className="card-title">Card title!</h2>
        //       <p>If a dog chews shoes whose shoes does he choose?</p>
        //       <div className="card-actions justify-end">
        //         <button className="btn btn-primary">Buy Now</button>
        //       </div>
        //     </div>
        //   </div>
    )
}

export default PostCard