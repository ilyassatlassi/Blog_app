"use client"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { ChevronLeftIcon } from "@radix-ui/react-icons"
import { twMerge } from 'tailwind-merge'


type buttonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const BackButton = ({className}: buttonProps) => {
    const route = useRouter()
  return (
    <Button className={twMerge("bg-neutral-200 w-auto",className)} variant="outline" onClick={()=> route.back()}>
    <ChevronLeftIcon className="h-4 w-4"/> Back
   
  </Button>
  )
}

export default BackButton