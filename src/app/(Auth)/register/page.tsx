import Ad from "@/Components/Ad";
import Registrationform from "@/Components/Main/forms/Registrationform";


export default function page() {
    return (
        <main className="mx-24 -mt-10">
            <Ad title="Ad Spot" buttonLabel="View" />
            <Registrationform />
        </main>
    )
}
