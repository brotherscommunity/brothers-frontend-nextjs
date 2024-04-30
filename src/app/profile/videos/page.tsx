import PostList from "@/Components/Main/Post/PostList";
import ProfileHeader from "@/Components/Main/ProfileHeader";

//TODO: Fetch the user's Video blog Posts
export default function page() {
    return (
        <ProfileHeader>
            <PostList isVideoPost={true} />
        </ProfileHeader>
    )
}
