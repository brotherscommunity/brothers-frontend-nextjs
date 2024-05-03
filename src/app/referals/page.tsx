import Ad from "@/Components/Ad";
import Table from "@/Components/Main/Tabel"

export default function page() {
    return (
        <main className="mx-24 mb-28">
            <Ad title="Ad Spot" buttonLabel="View" />
            <div className="mt-20">
                <h2 className="text-2xl text-black font-semibold"> My Referals Page </h2>
                <p className="mt-6"> Those who register under your referral is recorded here. </p>
            </div>
            <Table />
        </main>
    )
}
