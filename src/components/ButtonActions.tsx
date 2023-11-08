import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { TrashIcon ,Pencil1Icon } from '@radix-ui/react-icons'

const ButtonActions = () => {

    return (
        <div className='space-x-4'>
            <Link href={'/edit/id'}>
            <Button className='bg-neutral-200' variant="outline">
                <Pencil1Icon/>
                Edit
            </Button>
            </Link>
            <Button variant="destructive">
                <TrashIcon/>
                Delete
            </Button>
        </div>
    )
}

export default ButtonActions