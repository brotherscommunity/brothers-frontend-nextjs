import Pagination from "@/Components/Main/Pagination";
import Table from "@/Components/Main/Tabel"
import TopPageHeader from "@/Components/Small Pieces/TopPageHeader";
import { Referals } from "@/constants";

// TODO: Fetch users referals
export default async function page() {
    return (
        <main className="max-md:px-5 md:px-7 xl:px-20 mb-28">
            <TopPageHeader pageCode="PG32" pageName="My Referals Page" pageDescription="Those who register under your referal will be recoreded here" />
            <Table referals={Referals} />
            <Pagination TotalNumberOfResults={12} />
        </main>
    )
}
