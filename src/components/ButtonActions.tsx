"use client"
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { TrashIcon, Pencil1Icon } from '@radix-ui/react-icons'
import { useMutation } from "@tanstack/react-query"
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

type ButtonActionsProps = {
    id: string
}

const ButtonActions = ({ id }: ButtonActionsProps) => {
    // console.log(postId)
    const router = useRouter()

    const { mutate: deletePost,  isPending: deletePending } = useMutation({
        mutationFn: async () => {
            // await new Promise((resolve) => setTimeout(resolve, 2000))
            return axios.delete(`/api/posts/${id}`)
        }, onError: (error) => {
            toast.error(error.message)
            return
        }, onSuccess: () => {
            router.push('/')
            router.refresh()
            toast.success("Deleted successfully")
        }
    })

    return (

        <div className='space-x-4'>

            <Link href={`/edit/${id}`}>
                <Button className='bg-neutral-200' variant="outline">
                    <Pencil1Icon />
                    Edit
                </Button>
            </Link>
            
            <Button disabled={deletePending} onClick={() => deletePost()} variant="destructive">
                {deletePending ? 'loading...': (<><TrashIcon /> Delete </>) }
                
            </Button>
        </div>
    )
}

export default ButtonActions