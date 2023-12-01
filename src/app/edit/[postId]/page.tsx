"use client"
import BackButton from "@/components/backButton"
import FormPost from "@/components/formPost"
import { Post } from "@prisma/client"
import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { PostIdProps } from "@/lib/utils"
import { formSchema } from "@/lib/FormValidatiopn"
import { z } from "zod"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

const EditPost = ({params}:PostIdProps) => {
    const{postId} = params
     const { data: dataPost, isLoading: editLoading} = useQuery({
            queryKey: ['posts', params.postId],
             queryFn: async () => {
                const response = await axios(`/api/posts/${postId}`)
                return response.data
            }
        })
        const router = useRouter()
        const { mutate: createPost, isError: createError, isPending:creatPending, isSuccess: createSucccess } = useMutation({
            
            mutationFn: async (values: z.infer<typeof formSchema>)  => {
                // await new Promise((resolve) => setTimeout(resolve, 2000))
                return await axios.patch(`/api/posts/${postId}`, values)
            },onError: (error) => {
                toast.error(error.message)
                return 
            },onSuccess: () => {
                router.back()
                router.refresh()
                toast.success("Successfully Updated!")
            }
        })
        const handlleOnSubmit = async (data: z.infer<typeof formSchema>) => {
            createPost(data)
        }
    return (
       

        <div className="mt-10 mx-auto w-full max-w-7xl relative px-4 sm:px-6 lg:px-8  ">
            
                <BackButton className="hidden sm:flex" />
                {editLoading? ('loading....'): (<FormPost action="Update" isEditing={true} initValues={dataPost}  onSubmit={handlleOnSubmit} error={createError} pending={creatPending} success={createSucccess} />)}
                
        </div>

    )
}

export default EditPost