import EditProfile from "@/Components/Main/forms/Edit Profile/EditProfile";


export default function page() {
    //TODO: Fetch All the User's Data -> getAllUserData
    const userData = {
        firstName: "Abebe",
        lastName: "Balcha",
        city: "Dire Dawa",
        country: "Ethiopia"
    }
    return (
        <main className="mx-24 mt-20 mb-28">
            <EditProfile userData={userData} />
        </main>
    )
}
