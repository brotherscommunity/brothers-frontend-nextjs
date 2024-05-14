'use client'

import Pagination from "./Pagination"
import { useState } from "react"
import ApproveReject from "../Small Pieces/ApproveReject"

interface Props {
    accountsLits: string[]
}

export default function AccountApprovalManagement({accountsLits} : Props) {

    const [isLoading, setIsLoading] = useState<boolean>(false)


    async function handleApproveAccount(name: string){
        //TODO: Make an HTTP request to approve the user's account
        setIsLoading(true)
        try{

        }
        catch(error: any){

        }
        finally{
            setIsLoading(false)
        }
        
    }

    async function handleRejectAccount(name: string) {
        setIsLoading(true)
        //TODO: Make an HTTP request to Reject the account
        try{

        }
        catch(error: any){

        }
        finally{
            setIsLoading(false)
        }
    }

    function handleDetails(name: string){
        //TODO: handle the details
    }

    return (
        <section>
            <div className="mt-7">
                <h3 className="text-base text-black font-semibold"> F15: Approve and Reject Profile </h3>
                <div className="mt-6">
                    <ApproveReject list={accountsLits} handleApprove={handleApproveAccount} handleReject={handleRejectAccount} isLoading={isLoading} details={true} handleDetails={handleDetails} />
                </div>
            </div>
        </section>
    )
}
