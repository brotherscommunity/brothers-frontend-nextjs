import Ad from "@/Components/Ad";
import Signinform from "@/Components/Main/forms/Signinform";


export default function page() {
    return (
        <main className='"max-md:px-10 md:px-7 xl:px-24 mb-20'>
            <div className="ml-4">
                <Ad title="Ad Spot" buttonLabel="View" />
            </div>
            <div className="flex justify-center mt-8">
                <Signinform />
            </div>
        </main>
    )
}
