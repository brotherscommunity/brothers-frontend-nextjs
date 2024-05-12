import Ad from "@/Components/Ad";
import Settings from "@/Components/Main/Settings";

export default function page() {
    return (
        <main className='max-md:px-10 md:px-7 xl:px-24 mb-28'>
            <div className="max-md:-ml-6">
                <Ad title="Ad Spot" buttonLabel="View" />
            </div>
            <h3 className="text-2xl text-black font-semibold font-palanquin mt-14"> Privacy Settings </h3>
            <Settings />
        </main>
    )
}
