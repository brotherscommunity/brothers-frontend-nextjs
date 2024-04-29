"use client"

import Image from "next/image";
import postImage from "/public/postImage.png"
import { AiOutlineLike, AiOutlineDislike, AiOutlineComment } from "react-icons/ai";
import { IoStatsChartOutline } from "react-icons/io5";
import Link from "next/link";

interface PostCardProps {
    postedBy: string,
    date: string,
    title: string,
    description: string,
    tags: string[],
    likes: number,
    dislike: number,
    comments: number
    totalViews: number
}

// Data about the post is fetched deom the database later. for now it is static

export default function PostCard() {

    function handleLike(){

    }
    function handleDislike(){

    }

    return (
        <section className='border border-grey-200 mt-8 flex items-start gap-14 rounded-xl p-8'>
            <Image src={postImage} alt="post-image" width={200} height={200} className="rounded-sm" />
            <div className="flex flex-1 flex-col justify-start">
                <span className="flex items-center gap-3 text-sm">
                    <h5> By Marcus Ray </h5>
                    <p className="text-stone-600"> 8 Jan 2024 </p>
                </span> 
                <span className="mt-4">
                    <h2 className="text-2xl text-black font-bold"> Cultivate Mental Wellness </h2>
                    <p className="text-sm mt-2"> 
                    Health goes beyond the physical. Nurturing mental well-being is equally vital. Practice mindfulness, engage in activities...Health goes beyond the physical. Nurturing mental well-being is equally vital. Practice mindfulness, engage in activities...
                    Continue reading
                    </p>
                </span>
                {/* TODO: Add the route for the post details */}
                <Link href={'/'} className="text-sm text-orangeRed font-semibold mt-3"> Continue reading </Link>
                <span className="flex items-center gap-4 mt-4">
                    <button className="tags"> Personal Blog </button>
                    <button className="tags"> Health </button>
                </span>
                <span className="flex items-center gap-7 mt-5">
                    <div className="flex items-center gap-2">
                        {/* TODO: Add the route for the post to make a comment */}
                        <Link href={"/"}>
                            <AiOutlineComment className="w-6 h-6 text-stone-600" />
                        </Link>
                        <p className="text-sm text-stone-600 font-semibold pt-1"> 25 </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={handleLike}>
                            <AiOutlineLike className="w-6 h-6 text-stone-600" />
                        </button>
                        <p className="text-sm text-stone-600 font-semibold pt-1"> 186 </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button onClick={handleDislike}>
                            <AiOutlineDislike className="w-6 h-6 mt-1.5 text-stone-600" />
                        </button>
                        <p className="text-sm text-stone-600 font-semibold pt-1"> 0 </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <IoStatsChartOutline className="w-5 h-5 text-stone-600" />
                        <p className="text-sm text-stone-600 font-semibold pt-1"> 1.2k </p>
                    </div>

                </span>
            </div>
        </section>
    )
}
