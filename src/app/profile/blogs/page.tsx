import Pagination from "@/Components/Main/Pagination";
import PostList from "@/Components/Main/Post/PostList";
import ProfileHeader from "@/Components/Main/ProfileHeader";
import BlogCatagoryList from "@/Components/Small Pieces/BlogCatagoryList";
import { FAKE_BLOG_CATAGORIES } from "@/constants";


export default function page() {
    //TODO: Fetch the current users blog Posts
    // TODO: Calculate how many catagories does all blogs have
    return (
        <ProfileHeader>
            <BlogCatagoryList catagories={FAKE_BLOG_CATAGORIES} />
            <PostList />
            <div className="mr-12 mb-14">
                <Pagination TotalNumberOfResults={12} /> 
            </div>
        </ProfileHeader>
    )
}
