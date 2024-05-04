'use client'

import TextEditor from "./TextEditor"
import References from "../Small Pieces/References"
import ThumbnailUploader from "../Small Pieces/ThumbnailUploader"
import { BlogPostSchema } from "@/lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form"
import { z } from "zod"
import Tags from "../Small Pieces/Tags"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"
import { BUTTON_ATTRIBUTE_NAME, PREVIEW_BUTTON_DATA } from "@/constants"
import Spinner from "../Small Pieces/Spinner"


export default function ArticlesBlog() {

    const [isPreviewLoading, setIsPreviewLoading] = useState<boolean>(false)
    const [isSaveLoading, setIsSaveLoading] = useState<boolean>(false)
    const {push, refresh} = useRouter()
    const buttonRef = useRef<HTMLButtonElement | null>(null)
    const form = useForm<z.infer<typeof BlogPostSchema>>({
        resolver: zodResolver(BlogPostSchema),
        defaultValues: {
            content: "",
            references: [],
            image: [],
            tags: [],
        },
    })


    async function handlePreview(){
        const postData = form.getValues()
        setIsPreviewLoading(true)
        //TODO: Upadte this post id after creating the post. It's used for the url
        let postId = "1rssggetegb" // FAKE POST ID
        // TODO: MAke an HTTP request to upload the Post but with a status of "pending"
        try{

        }
        catch(error: any){

        }
        finally{
            setIsPreviewLoading(false)
        }
        // Redirect the User to the Preview-post Page
        push(`/preview-post/${postId}`)
    }
    function handleClearForm(){
        // refresh the page to clear the form. form.reset() doesn't work
        refresh()
    }

    async function onSubmit(values: z.infer<typeof BlogPostSchema>){
        const postData = {
            content: values.content,
            references: values.references,
            image: values.image[0],
            tags: values.tags
        }
        setIsSaveLoading(false)
        try{
            // TODO: Make an HTTP request to create the post permanently

        }
        catch(error: any){

        }
        finally{
            setIsSaveLoading(false)
        }
        //TODO: Redirect the user after creating the post
    }

    return (
        <section>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    {/* WYSIWYG editor */}
                    <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <TextEditor fieldchange={field.onChange} />
                        </FormControl>
                        <FormMessage className='text-sm text-red-500' />
                        </FormItem>
                    )}
                    />
                    {/* Adding Citations for the Post */}
                    <FormField
                    control={form.control}
                    name="references"
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <References fieldchange={field.onChange} />
                        </FormControl>
                        <FormMessage className='text-sm text-red-500' />
                        </FormItem>
                    )}
                    />
                    {/* Uploading the Image */}
                    <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <ThumbnailUploader fieldchange={field.onChange} title="Featured Image" mediaUrl="./public/postImage.png" />
                        </FormControl>
                        <FormMessage className='text-sm text-red-500' />
                        </FormItem>
                    )}
                    />
                    {/* Tags */}
                    <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <Tags fieldchange={field.onChange} title="Add tags to your Post" />
                        </FormControl>
                        <FormMessage className='text-sm text-red-500' />
                        </FormItem>
                    )}
                    />
                    <div className="flex items-center gap-16 mt-14">
                        <button type="button" onClick={handlePreview} className="border border-orangeRed text-base text-orangeRed font-semibold px-4 py-2 rounded-md focus-visible:outline-none" >
                            {isPreviewLoading ? <Spinner loading={isPreviewLoading} color="#000000" size={15} /> : "Preview Page"}
                        </button>
                        <div className="flex items-center gap-6">
                            <button type="button" onClick={handleClearForm} className="border border-navy text-navy text-base font-semibold px-4 py-2 rounded-md focus-visible:outline-none">
                                Cancel
                            </button>
                            <button type="submit" className="bg-navy text-base text-white font-semibold px-4 py-2 rounded-md focus-visible:outline-none">
                                {isSaveLoading ? <Spinner loading={isSaveLoading} size={15} /> : "Save"}
                            </button>
                        </div>
                    </div>
                </form>
            </Form>
        </section>
    )
}
