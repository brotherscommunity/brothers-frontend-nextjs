'use client'

import { BLOG_CATAGORY_APPROVAL_LIST } from "@/constants"
import { useState } from "react"
import { FaCheckCircle } from "react-icons/fa"
import { MdCancel } from "react-icons/md"
import Pagination from "./Pagination"

export default function BlogCatagoryManagement() {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function handleApproveBlogCatagory(blogCatagoryName: string) {
        // TODO: Make an HTTP request to the endpoint the approves this blog catagory
        setIsLoading(true)
        try{

        }
        catch(error: any){

        }
        finally{
            setIsLoading(false)
        }
    }

    async function handleRejectBlogCatagory(blogCatagoryName: string) {
        // TODO: Make an HTTP request to the endpoint the approves this blog catagory
        setIsLoading(true)
        try{

        }
        catch(error: any){

        }
        finally{
            setIsLoading(false)
        }
    }
    return (
        <section className="">
            <div>
                {/* TODO: FETCH THE BLOG CATAGORIES THAT NEED TO BE APPROVED */}
                {/* FAKE DATA */}
                {BLOG_CATAGORY_APPROVAL_LIST.map((catagory, index) => {
                    return (
                        <div key={index} className="mt-7">
                            <h4 className="tet-base text-black"> {index + 1}. {catagory} </h4>
                            <div className="flex items-center gap-7 mt-4">
                                <button onClick={() => handleApproveBlogCatagory(catagory)} className="bg-green-100 w-[150px] h-auto px-7 py-2.5 rounded-md focus-visible:outline border-none flex items-center gap-3">
                                    <FaCheckCircle className="w-4 h-4 text-green-500" />
                                    <p className="text-sm text-black font-semibold font-palanquin"> Aprrove </p>
                                </button>
                                <button onClick={() => handleRejectBlogCatagory(catagory)} className="bg-red-100  w-[150px] h-auto px-7 py-2.5 rounded-md focus-visible:outline border-none flex items-center gap-3">
                                    <MdCancel className="w-4 h-4 text-red-600" />
                                    <p className="text-sm text-black font-semibold font-palanquin"> Reject </p>
                                </button>
                            </div>
                        </div>
                    )
                })}
                <Pagination TotalNumberOfResults={10} pageSize={3} />
            </div>
        </section>
    )
}
