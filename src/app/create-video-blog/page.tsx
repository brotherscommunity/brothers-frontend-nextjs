import Ad from "@/Components/Ad";
import VideoBlog from "@/Components/Main/forms/VideoBlog";


export default function page() {
    return (
        <main className='max-md:px-5 md:px-7 xl:px-20 mt-14 mb-28'>
            <Ad title="Ad Spot" buttonLabel="View" />
            <div className="mt-14">
                <h3 className="text-xl text-black font-semibold"> Create Video Blog </h3>
            </div>
            <VideoBlog />
        </main>
    )
}
