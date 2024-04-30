import Bio from "@/Components/Main/Bio";
import ProfileHeader from "@/Components/Main/ProfileHeader";

//TODO: Fetch the users Bio
export default function page() {
    return (
        <main>
            <ProfileHeader>
                <div className="mr-12 mt-10">
                    <Bio />
                </div>
            </ProfileHeader>
        </main>
    )
}
