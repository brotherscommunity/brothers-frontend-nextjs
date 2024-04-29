'use client'

import Image from "next/image";
import Logo from "/public/logo.png"
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { Languages, QUERY_PARAMS } from "@/constants";
import { TfiWorld } from "react-icons/tfi";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";


export default function Navbar() {

    const [selectedLanguage, setSelectedLanguage] = useState('')
    const [searchValue, setSearchValue] = useState("")
    const searchParams = useSearchParams()
    const {replace, push} = useRouter()
    const pathname = usePathname()
    const queryString = searchParams.get(QUERY_PARAMS.search)

    // If the user cleared what they searched, we need to remove the search query in the URI to refelct the current state
    useEffect(() => {
        if(queryString && !searchValue){
            replace(`${pathname}`)
        }
    }, [searchValue])

    // When the user selects a language, this function will update the current state to the selected language
    function handleChange(e: React.ChangeEvent<HTMLSelectElement>){
        setSelectedLanguage(e.target.value)
    }

    // When the user types something on the search input field, we first update the current state then we add a search query into the URI

    function handleSearch(){
        const param = new URLSearchParams(searchParams)
        if(searchValue){
            param.set(QUERY_PARAMS.search, searchValue)
        }
        else{
            param.delete(QUERY_PARAMS.search)
        }
        // Adding the query to the url
        replace(`${pathname}?${param.toString()}`)

        // TODO: Make an APi call to query the posts
    }       
    

    return (
        <nav className='relative inset-x-0 top-0 w-full mt-5 px-20'>
            <div className="flex items-center">
                <span className="flex gap-2 ml-2">
                    <Image src={Logo} alt="logo" width={40} height={40} style={{width: "auto", height: "auto"}} />
                    <button>
                        <RiArrowDropDownLine />
                    </button>
                </span>
                <div className="px-3 py-2 ml-5 bg-button flex items-center gap-3">
                    <TfiWorld className="w-4 h-3" />
                    <select value={selectedLanguage} onChange={handleChange} className="bg-button focus-visible:outline-none text-sm">
                        {Languages.map((language) => {
                            return (
                                <option key={language} value={language} className="text-sm p-2"> {language} </option>
                            )
                        })}
                    </select>
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    handleSearch()
                }} className="flex items-center justify-between bg-button w-[450px] h-[48px] ml-28 px-5 rounded-sm">
                    <input type="text" placeholder="Type to Search..." onChange={(e) => setSearchValue(e.target.value)} className="bg-button w-[400px] p-2 text-sm focus-visible:outline-none" />
                    <button type="submit" onClick={handleSearch} className="mr-5">
                        <CiSearch className="w-5 h-5" />
                    </button>
                </form>
                <div className="flex items-center gap-10 ml-24 text-sm">
                    <Link href='/register' className="border border-navy px-5 py-2 text-sm text-navy rounded-md focus-visible:outline-none font-semibold"> Create Post </Link>
                    <Link href='/sign-in' className="bg-navy text-white px-6 py-3 text-sm focus-visible:outline-none rounded-md font-semibold"> Sign In </Link>
                </div>
            </div>
        </nav>
    )
}
