"use client"
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { TrashIcon, Pencil1Icon } from '@radix-ui/react-icons'
import { useMutation, useQuery } from "@tanstack/react-query"
import axios from 'axios'
import toast from 'react-hot-toast'
import { PostIdProps } from '@/lib/utils'
import { useRouter } from 'next/navigation'

const ButtonActions = ({ params }: PostIdProps) => {
    const router = useRouter()

    const { mutate: deletePost } = useMutation({
        mutationFn: async () => {
            // await new Promise((resolve) => setTimeout(resolve, 2000))
            return axios.delete(`api/posts/${params.postId}`)
        }, onError: (error) => {
            toast.error(error.message)
            return
        }, onSuccess: (data) => {
            router.push('/')
            router.refresh()
            // toast.success(data.status)
        }
    })

    return (
        <div className='space-x-4'>
            <Link href={'/edit/id'}>
                <Button className='bg-neutral-200' variant="outline">
                    <Pencil1Icon />
                    Edit
                </Button>
            </Link>
            <Button onClick={()=> deletePost()} variant="destructive">
                <TrashIcon />
                Delete
            </Button>
        </div>
    )
}

export default ButtonActions