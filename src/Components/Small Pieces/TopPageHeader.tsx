'use client'

import { QUERY_PARAMS } from "@/constants"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { CiSearch } from "react-icons/ci"

interface TopPageHeaderProps {
    pageCode: string,
    pageName: string,
    pageDescription: string
}

export default function TopPageHeader({pageCode, pageName, pageDescription} : TopPageHeaderProps) {

    const [controlledValue, setControlledValue] = useState<string>("")
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const queryString = searchParams.get(QUERY_PARAMS.code)
    const {replace} = useRouter()

    useEffect(() => {
        if(queryString && !controlledValue){
            replace(`${pathname}`)
        }
    }, [controlledValue])

    function handleSearch(){
        const param = new URLSearchParams(searchParams)
        if(controlledValue){
            param.set(QUERY_PARAMS.code, controlledValue)
        }
        else{
            param.delete(QUERY_PARAMS.code)
        }
        // Adding the query to the url
        replace(`${pathname}?${param.toString()}`)
    }

    return (
        <section className="mt-10 w-full h-[180px] rounded-lg bg-header px-6 pt-4">
            <div className="flex items-center justify-between">
                <p className="max-sm:text-sm sm:text-base text-navy font-medium"> Page Code: {pageCode} </p>
                <div className="max-sm:w-[170px] sm:w-[200px] flex items-start border-none rounded-md bg-white px-3 py-2.5 text-sm">
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        handleSearch()
                    }}>
                        <input type="text" onChange={(e) => setControlledValue(e.target.value)} placeholder="Search by code" className="border-none focus-visible:outline-none text-sm w-full h-full" />
                    </form>
                    <button onClick={handleSearch}>
                        <CiSearch className="w-5 h-5 text-navy" />
                    </button>
                </div>
            </div>
            <h3 className="mt-3 max-sm:text-lg text-xl text-black font-semibold"> {pageName} </h3>
            <p className="mt-4 max-sm:text-xs text-base text-black"> {pageDescription} </p>
        </section>
    )
}
