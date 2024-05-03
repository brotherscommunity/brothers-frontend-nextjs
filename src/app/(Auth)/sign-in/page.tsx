import Ad from "@/Components/Ad";
import Signinform from "@/Components/Main/forms/Signinform";


export default function page() {
    return (
        <main className='mx-24'>
            <Ad title="Ad Spot" buttonLabel="View" />
            <div className="flex justify-center mt-8">
                <Signinform />
            </div>
        </main>
    )
}
