"use client"


import { ReloadIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { useForm } from "react-hook-form"
import { Input } from "./ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Textarea } from "./ui/textarea"
import { actions } from "@/lib/utils"
import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { Tag } from "@prisma/client"
import { formSchema } from "@/lib/FormValidatiopn"
import { z } from "zod";


const bgInput = "bg-white"

const FormPost = ({ action }: actions) => {


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            postTitle: "",
            postContent: "",
            tagId: ""
        }
    })



    const { mutate: createPost  } = useMutation({
        mutationFn: (values: z.infer<typeof formSchema>) => {
            return axios.post('api/posts/create', values)
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        createPost(values  )
        form.reset()
    }

    const { data: dataTags} = useQuery<Tag[]>({
        queryKey: ['tags'], queryFn: async () => {

            const response = await axios('api/tags')
            //  await new Promise((resolve) => setTimeout(resolve, 2000))
            return response.data
        }
    }
    )

    return (
        <Card className="max-w-2xl inset-x-4 absolute md:inset-x-0 sm:top-14 m-auto max-h-max shadow-2xl bg-neutral-200">
            <CardHeader>
                <CardTitle>
                    <h1 className="text-3xl text font-bold">Add {action} post</h1>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                        <FormField
                            control={form.control}
                            name="postTitle"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input className={bgInput} placeholder="Post Title..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="postContent"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Content</FormLabel>
                                    <FormControl>
                                        <Textarea className={bgInput} placeholder="Post content..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="tagId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tags</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} defaultValue={field.name} >

                                            <SelectTrigger {...field} className=" bg-white">
                                                <SelectValue placeholder="Tags" />
                                            </SelectTrigger>
                                            <SelectContent  >
                                                {dataTags?.map(tag => (<SelectItem key={tag.id} value={tag.id}>{tag.name}</SelectItem>)
                                                )
                                                }
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button disabled={form.formState.isSubmitting} className="w-full h-full" type="submit">
                            {form.formState.isSubmitting &&
                                (<ReloadIcon className="mr-2 h-4 w-4 animate-spin" />)
                            }
                            {action}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default FormPost