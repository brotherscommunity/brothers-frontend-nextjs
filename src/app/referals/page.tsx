import Ad from "@/Components/Ad";
import Table from "@/Components/Main/Tabel"
import { Referals } from "@/constants";

// TODO: Fetch users referals
export default async function page() {
    return (
        <main className="max-md:px-5 md:px-7 xl:px-20 mb-28">
            <Ad title="Ad Spot" buttonLabel="View" />
            <div className="mt-20">
                <h2 className="max-sm:text-xl sm:text-2xl text-black font-semibold"> My Referals Page </h2>
                <p className="max-sm:text-sm sm:text-base mt-6"> Those who register under your referral is recorded here. </p>
            </div>
            <Table referals={Referals} />
        </main>
    )
}
