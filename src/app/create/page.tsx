"use client"
import BackButton from "@/components/backButton"
import FormPost from "@/components/formPost"
import { z } from "zod"
import { formSchema } from "@/lib/FormValidatiopn"
import axios from "axios"
import { useMutation } from "@tanstack/react-query"

import toast from "react-hot-toast"
import { useRouter } from "next/navigation"


const CreatePage = () => {
    const router = useRouter()
    const { mutate: createPost, isError: createError, isPending:creatPending , isSuccess: createSucces } = useMutation({
        mutationFn: async (values: z.infer<typeof formSchema>)  => {
            // await new Promise((resolve) => setTimeout(resolve, 2000))
            return await axios.post('/api/posts/create', values)
        },onError: (error) => {
            toast.error(error.message)
            return 
        },onSuccess: () => {
            router.back()
            router.refresh()
            toast.success("Successfully Created!")
        }
    })
    const handlleOnSubmit = async (data: z.infer<typeof formSchema>) => {
        createPost(data)
    }
    return (
        <div className="mx-auto w-full max-w-7xl relative px-4 sm:px-6 lg:px-8 mt-10">
            <BackButton className="hidden sm:flex" />
            <FormPost isEditing= {false}  action = "Create" onSubmit={handlleOnSubmit}  error={createError} success={createSucces} pending={creatPending}/>
        </div>
    )
}

export default CreatePage 
