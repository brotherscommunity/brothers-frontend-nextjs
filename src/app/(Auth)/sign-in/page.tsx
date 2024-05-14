import Ad from "@/Components/Ad";
import Signinform from "@/Components/Main/forms/Signinform";


export default function page() {
    return (
        <main className="max-md:px-5 md:px-7 xl:px-20 mb-28">
            <div className="ml-4">
                <Ad title="Ad Spot" buttonLabel="View" />
            </div>
            <div className="flex justify-center mt-8">
                <Signinform />
            </div>
        </main>
    )
}
