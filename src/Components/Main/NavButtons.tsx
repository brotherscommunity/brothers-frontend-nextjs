'use client'


import Link from "next/link"
import { IoMdNotifications } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { GiLinkedRings } from "react-icons/gi";
import { FiAnchor } from "react-icons/fi";
import { MdOutlineContentCopy } from "react-icons/md";
import { useState } from "react";
import { SlLogout } from "react-icons/sl";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover"
import Avatar from "../Small Pieces/Avatar";
import Spinner from "../Small Pieces/Spinner";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";


export default function NavButtons(){

    const [openPopUp, setOpenPopUp] = useState<boolean>(false)
    const {isAuthenticated, data} = useSelector((state: RootState) => state.user)
    const [isLoading, setIsLoading] = useState<boolean>(false)

     // Logout function
    function handleLogout(){
        if(isLoading) return
        setIsLoading(true)
        // TODO: Make an http request to hit the logout endpoint
    }

    return (
        <section className={`flex items-center ${isAuthenticated && data ? "gap-7" : "gap-10"} max-sm:ml-5 sm:ml-10 md:ml-16 lg:ml-20 xl:ml-36 text-sm`}>
            <Link href={`${isAuthenticated ? "/create-post" : "/register"} `} className="max-lg:hidden border border-navy max-sm:px-3 sm:px-4 py-2 text-sm text-navy rounded-md focus-visible:outline-none font-semibold"> {`${isAuthenticated ? "Create Post" : "Get Started"}`} </Link>
            {isAuthenticated && data ? (
                <div className="flex items-center gap-4">
                    {/* TODO: Create a route for Notifications */}
                    <Link href={"/notifications"} className="relative">
                        <IoMdNotifications className="w-7 h-7 text-navy" />
                        <div className="absolute right-1.5 top-0 rounded-full w-2 h-2 bg-orangeRed" />
                    </Link>
                    <Avatar />
                    <div className="flex gap-2">
                        <h3 className="text-base text-black font-medium"> {data.firstName} </h3>
                        <Popover>
                            <PopoverTrigger>
                                <div onClick={() => setOpenPopUp(true)}>
                                    <IoIosArrowDown className="mt-2" />
                                </div>
                            </PopoverTrigger>
                            {openPopUp && <PopoverContent className="max-sm:w-[200px]  sm:w-[250px] h-auto py-5 mt-5 focus-visible:outline-none">
                                    <div className="flex flex-col justify-start px-6">
                                        <Avatar closePopUp={true} setOpenPopUp={setOpenPopUp} />
                                        <div className="flex items-start gap-10 mt-4">
                                            <h3 className="text-base text-black font-medium"> {data?.firstName} </h3>
                                            <MdKeyboardArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                    <hr className="border-t border-gray-400 w-full my-4" />
                                    {/* LINKS TO OTHER PAGES */}
                                    <div className="flex flex-col justify-start gap-3 mt-3">
                                        <span className="flex items-center gap-2">
                                            <FiAnchor className="w-4 h-4" />
                                            <p className="text-[15px] text-black font-palanquin"> Functions </p>
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <GiLinkedRings className="w-4 h-4" />
                                            <p className="text-[15px] text-black"> My Referals </p>
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <MdOutlineContentCopy className="w-4 h-4" />
                                            <p className="text-[15px] text-black"> My Pages </p>
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <IoSettingsOutline className="w-4 h-4" />
                                            <p className="text-[15px] text-black"> Privacy Setting </p>
                                        </span>
                                    </div>
                                    <button className="max-sm:w-[100px] sm:w-[150px] flex justify-center items-center py-2.5 mx-6 mt-6 bg-navy text-sm text-white rounded-md">
                                        {isLoading ?
                                        <Spinner loading={isLoading} size={18} />
                                        : 
                                        <div onClick={handleLogout} className="flex items-center gap-3">
                                            <p> Log out </p>
                                            <SlLogout className="" />
                                        </div>
                                        }
                                    </button>
                                </PopoverContent>
                            }
                        </Popover>
                    </div>
                </div>
            ) :
            <Link href='/sign-in' className="bg-navy text-white px-6 max-sm:py-2 sm:py-3  text-sm focus-visible:outline-none rounded-md font-semibold"> Sign In </Link> 
            }
        </section>
    )
}
