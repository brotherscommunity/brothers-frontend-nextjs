import Pagination from "@/Components/Main/Pagination";
import PostList from "@/Components/Main/Post/PostList";
import ProfileHeader from "@/Components/Main/ProfileHeader";


export default function page() {
    //TODO: Fetch the current users blog Posts
    return (
        <ProfileHeader>
            <PostList />
            <div className="mr-12 mb-14">
                <Pagination TotalNumberOfResults={12} /> 
            </div>
        </ProfileHeader>
    )
}
