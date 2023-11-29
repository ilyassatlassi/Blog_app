import BackButton from "@/components/backButton"
import FormPost from "@/components/formPost"
import { Post } from "@prisma/client"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { PostIdProps } from "@/lib/utils"

const EditPost = ({params}:PostIdProps) => {
     const { data: dataPost} = useQuery<Post[]>({
            queryKey: ['tags'], queryFn: async () => {
    
                const response = await axios(`/api/posts/${params.postId}`)
                return response.data
            }
        })
    return (
       

        <div className="mt-10 mx-auto w-full max-w-7xl relative px-4 sm:px-6 lg:px-8  ">
                <BackButton className="hidden sm:flex" />
                <FormPost action="Update" isEditing={true} initValues={dataPost} />
        </div>

    )
}

export default EditPost