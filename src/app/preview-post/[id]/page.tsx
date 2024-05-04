import Ad from "@/Components/Ad"
import Avatar from "@/Components/Small Pieces/Avatar"
import Image from "next/image"
import PostHeader  from "/Public/blogPostHeader.jpg"
import DisplayContent from "@/Components/Main/Post/DisplayContent"
import PostFooter from "@/Components/Small Pieces/PostFooter"
import { formatNumber } from "@/utils"

interface Props {
    params: {
        id: string
    }
}

export default function page({params} : Props) {
    const postId = params.id
    // TODO: Fetch the post by id
    // FAKE DATA
    return (
        <main className="mx-24 mb-28">
            <Ad title="Ad Spot" buttonLabel="View" />
            <div className="mt-20 flex items-center gap-6">
                <Avatar width="w-[50px]" height="h-[50px]" iconWidth="w-[20px]" iconHeight="h-[20px]" />
                <div className="flex items-center gap-3">
                    <h3 className="text-lg text-black font-medium"> By Markus Ray </h3>
                    <p className="text-stone-500 text-sm"> 9 Jan 2024 </p>
                </div>
            </div>
            <h2 className="mt-10 pl-3 text-base text-black font-semibold"> Ciltivate Mental Wellness </h2>
            {/* To prevent content shifting */}
            <div className="max-w-[900px] max-h-[150px] pb-56">
                <Image src={PostHeader} alt="blog-post-header" width={700} height={100} className="mt-7 rounded-2xl"/>
            </div>
            <div className="mt-10">
                {/* DUMMY HTML STRING */}
                <DisplayContent content="<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis, nisi sed consequat cursus, lectus justo ullamcorper quam, id tincidunt nisl risus vel velit. Sed eu nulla sed leo convallis vestibulum. Quisque non quam euismod, sollicitudin ex id, mattis nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus vel nisi dictum, cursus elit ut, fermentum justo. Integer rutrum tortor vel sapien dapibus ullamcorper. Cras in nisi consequat, varius risus at, molestie enim. Nullam fermentum diam et dui vehicula, sit amet hendrerit justo suscipit. Nunc auctor mauris vitae sapien vehicula, in interdum lacus vestibulum. Curabitur ac nunc in felis feugiat tempor. </p>" />
            </div>
            <PostFooter tags={["tech", "freelance"]} likes={25} dislikes={0} comments={5} views={formatNumber(1200)}  />
        </main>
    )
}
