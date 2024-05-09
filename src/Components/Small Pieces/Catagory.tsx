'use client'

import { useState } from "react";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa";
import Spinner from "./Spinner";
import Link from "next/link";

interface CatagoryProps {
    name: string,
    followers: number,
    members: number,
    posts: number,
    catagoryPath: string[],
    code?: string
}

export default function Catagory({name, followers, members, posts, catagoryPath, code} : CatagoryProps) {

    //TODO: Ask What the minus button does. Does it expand and collapse the tree structure of catagory ?
    const [showSubCatgories, setShowSubCatagories] = useState<boolean>(true)
    const [isFollowing, setIsFollowing] = useState<boolean>(false)
    const [isJoining, setIsJoining] = useState<boolean>(false)

    function handleCatagoryClick(){

    }

    function handleFollow(){

    }

    function handleJoin(){

    }

    return (
        <section className='bg-button mt-5 rounded-md px-5 pt-4 pb-6 border-none focus:outline-none'>
            <div className="flex items-center justify-between">
                <Link href={`/blogCatagory/${name.replace(" ", "_")}`} className="text-lg text-navy font-semibold"> {name} </Link>
                <button onClick={handleFollow} className="bg-navy text-white text-sm px-6 py-2 rounded-md focus-visible:outline-none"> 
                    {isFollowing ? <Spinner loading={isFollowing} /> : "Follow"}
                </button>
            </div>
            <div className="flex items-center gap-3 mt-3 text-sm text-blue-600 font-semibold">
                <p> {followers} followers </p>
                <p> {members} members </p>
                <p> {posts} posts </p>
            </div>
            <div className="flex items-start justify-between mt-5">
                <div className="flex flex-wrap items-center gap-3 max-sm:w-[300px] sm:w-[500px] pt-4">
                    <button onClick={() => setShowSubCatagories(false)}>
                        <CiSquareMinus className="w-5 h-5 text-orangeRed rounded-md" />
                    </button>
                    {catagoryPath.map((catagory, index) => {
                        return (
                            <button onClick={handleCatagoryClick} className="text-navy text-sm font-semibold flex items-center">
                                <p> {catagory} </p>
                                {index !== catagoryPath.length - 1 && <span> 
                                    <FaAngleRight className="w-4 h-4 text-navy" />
                                </span>}
                            </button>
                        )
                    })}
                </div>
                <button onClick={handleJoin} className="bg-navy text-white text-sm px-6 py-2 rounded-md focus-visible:outline-none">
                    {isJoining ? <Spinner loading={isJoining} /> : "Join"}
                </button>
            </div>
            { code && <p className="flex items-start justify-end mt-8 text-sm text-stone-400 font-semibold">
                Code {code}
            </p>}
        </section>
    )
}
