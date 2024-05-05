import Ad from "@/Components/Ad";
import Registrationform from "@/Components/Main/forms/Registrationform";


export default function page() {
    return (
        <main className="max-md:px-5 md:px-7 xl:px-20 -mt-10">
            <Ad title="Ad Spot" buttonLabel="View" />
            <Registrationform />
        </main>
    )
}
