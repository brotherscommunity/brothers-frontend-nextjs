'use client'

import { BLOG_CATAGORY_APPROVAL_LIST } from "@/constants"
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import Pagination from "./Pagination";
import { useState } from "react";
import toast from "react-hot-toast";

export default function BlogCatagoryGeneralManagement() {

    const [managerUsername, setManagerUsername] = useState<string>("")
    const [catagoryCode, setCatagoryCode] = useState<string>("")
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

    async function handleAssignManager(){
        // check if data is provided
        if(!managerUsername && !catagoryCode){
            toast.error("No data provided")
            return 
        }
        //TODO: Make an HTTP request to assign a manager to this blog catagory
        setIsLoading(true)
        try{

        }
        catch(error: any){

        }
        finally{
            setIsLoading(false)
        }
    }

    async function handleRemoveManager(){
        // check if data is provided
        if(!managerUsername && !catagoryCode){
            toast.error("No data provided")
            return 
        }
        //TODO: Make an HTTP request to remove the manager of this blog catagory
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
        <section>
            {/* F5: APPROVE AND DELETE BLOG CATAGORY */}
            <div>
                <h3 className="text-base text-black font-semibold"> F5: Approve and Delete Blog Catagory </h3>
                <p className="text-base text-black font-palanquin mt-10"> Approve Waitlist</p>
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
            {/* F6: ASSIGN AND REMOVE BLOG CATAGORY MANGER */}
            <div className="max-sm:mt-14 sm:mt-7">
                <h3 className="text-base text-black font-semibold"> F6: Assign and Remove Blog Catagory Manager</h3>
                <p className="mt-7 text-base text-black font-palanquin"> Assign Manager </p>
                <div className="flex flex-wrap items-center justify-start gap-6 mt-6">
                    <input type="text" disabled={isLoading} onChange={(e) => setManagerUsername(e.target.value)} placeholder="Enter username" className="functionsInput" />
                    <input type="text" disabled={isLoading} onChange={(e) => setCatagoryCode(e.target.value)} placeholder="Enter catagory code" className="functionsInput" />
                </div>
                <button disabled={isLoading} onClick={handleAssignManager} className="bg-navy mt-8 w-[100px] h-auto px-4 py-2 rounded-md focus-visible:outline-emerald-50 text-sm text-white">
                    Assign
                </button>
                <p className="mt-7 text-base text-black font-palanquin"> Remove Manager </p>
                <div className="flex flex-wrap items-center justify-start gap-6 mt-6">
                    <input type="text" disabled={isLoading} placeholder="Enter username" className="functionsInput" />
                    <input type="text" disabled={isLoading} placeholder="Enter catagory code" className="functionsInput" />
                </div>
                <button disabled={isLoading} onClick={handleRemoveManager} className="bg-navy mt-8 w-[100px] h-auto px-4 py-2 rounded-md focus-visible:outline-emerald-50 text-sm text-white">
                    Remove
                </button>
            </div>
        </section>
    )
}
