'use client'

import Image from "next/image";
import Logo from "/public/logo.png"
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { Languages, QUERY_PARAMS } from "@/constants";
import { TfiWorld } from "react-icons/tfi";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import NavButtons from "./NavButtons";
import Link from "next/link";
import { RiMenuLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SidebarNav from "./SidebarNav";


export default function Navbar() {

    const [selectedLanguage, setSelectedLanguage] = useState('')
    const [openSidebarNav, setOpenSidebarNav] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const {isAuthenticated, isLoading, data} = useSelector((state: RootState) => state.user)
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
        <nav className='relative inset-x-0 top-0 w-full mt-5 max-md:px-5 md:px-7 xl:px-20'>
            <div className="flex items-center">
                <button onClick={() => setOpenSidebarNav(true)}>
                    <RiMenuLine className="md:hidden w-8 h-8 text-navy" />
                </button>
                <span className="max-md:hidden flex gap-2 ml-2">
                    <Link href="/" className="w-[50px] h-[10px] mb-5">
                        <Image src={Logo} alt="logo" width={30} height={30} />
                    </Link>
                    <button>
                        <RiArrowDropDownLine />
                    </button>
                </span>
                <div className="max-md:hidden px-3 py-2 ml-3 bg-button flex items-center gap-3">
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
                }} className={`flex items-center justify-between bg-button ${isAuthenticated && data ? "max-md:w-[350px] md:w-[420px]" : "max-md:w-[250px] md:w-[490px]"} h-[48px] max-lg:ml-10 ml-24 max-md:px-2 max-sm:py-2 md:px-5 rounded-md`}>
                    <input type="text" placeholder="Type to Search..." onChange={(e) => setSearchValue(e.target.value)} className="bg-button max-sm:w-[100px] md:w-[180px] lg:w-[w-300px] xl:w-[400px] p-2 text-sm focus-visible:outline-none" />
                    <button type="submit" onClick={handleSearch} className="mr-5">
                        <CiSearch className="w-5 h-5" />
                    </button>
                </form>
                {!isLoading && <NavButtons />}
                {openSidebarNav && <SidebarNav setOpenSidebarNav={setOpenSidebarNav} isAuthenticated={isAuthenticated} />}
            </div>
        </nav>
    )
}
