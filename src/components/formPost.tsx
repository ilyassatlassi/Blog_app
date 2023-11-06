"use client"
import { unknown } from "zod"
import { ReloadIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { useForm} from "react-hook-form"
import { Input } from "./ui/input"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Textarea } from "./ui/textarea"

const formSchema = z.object({
    postTitle: z.string().min(2, {
        message: "Title must be at least 2 characters.",
    }).max(50, {
        message: "Title must contain at most 50 character(s)"
    }),
    postContent: z.string().min(2, {
        message: "Content must be at least 2 characters.",
    }).max(1500, {
        message: "Content must contain at most 1500 character(s)"
    }),
    tag: z.string().optional()
})

const FormPost = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            postTitle: "",
            postContent: "",
            tag: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        await new Promise((resolve) => setTimeout(resolve, 2000) )
        console.log(values)
        form.reset()
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <h1 className="text-3xl font-bold">Add new post</h1>
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
                                        <Input placeholder="Post Title..." {...field} />
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
                                        <Textarea placeholder="Post content..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="tag"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tags</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} defaultValue={field.value} >
                                            <SelectTrigger  {...field} className="w-[180px]">
                                                <SelectValue placeholder="Tags" />
                                            </SelectTrigger>
                                            <SelectContent  >
                                                <SelectItem value="Light">Light</SelectItem>
                                                <SelectItem value="Dark">Dark</SelectItem>
                                                <SelectItem value="System">System</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button disabled={form.formState.isSubmitting} className="w-full" type="submit">
                            {form.formState.isSubmitting &&
                            (<ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> )
                            }
                            Create
                            </Button>
                    </form>
                </Form>
            </CardContent>

        </Card>
    )


}

export default FormPost