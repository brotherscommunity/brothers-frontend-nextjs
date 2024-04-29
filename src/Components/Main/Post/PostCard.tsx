import Image from "next/image";
import postImage from "/public/postImage.png"

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

// Data about the post is fetched deom the database later

export default function PostCard() {
    return (
        <section className='border border-grey-200 flex items-start gap-14 rounded-xl p-10'>
            <Image src={postImage} alt="post-image" width={200} height={200} className="rounded-sm" />
            <div className="flex flex-1 flex-col justify-start border-l border-red-500">
                <span className="flex items-center gap-3 text-sm">
                    <h5> By Marcus Ray </h5>
                    <p className="text-stone-600"> 8 Jan 2024
                    </p>

                </span>

            </div>
        </section>
    )
}
