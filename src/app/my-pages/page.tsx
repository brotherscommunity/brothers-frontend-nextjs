import Ad from "@/Components/Ad";
import Pagination from "@/Components/Main/Pagination";
import Filters from "@/Components/Small Pieces/Filters";
import { QUERY_STRING_VALUES } from "@/constants";
import Link from "next/link";

interface MyPagesProps {
    searchParams: {
        filterBy: string,
        order: string,
        page: string
    }
}
export default async function page({searchParams}: MyPagesProps) {
    const filterQuery = searchParams.filterBy || QUERY_STRING_VALUES.date
    const orderQuery = searchParams.order || QUERY_STRING_VALUES.descending
    const pageQuery = searchParams.page || 1
    //TODO: Fetch all the pages of the current user by paasing the query strings to filter and sort pages
    // FAKE DATA
    const Pages = [
        {
            title: "My new cooking catalog",
            date: "20 June 2021"
        },
        {
            title: "My new cooking catalog",
            date: "20 June 2021"
        },
        {
            title: "My new cooking catalog",
            date: "20 June 2021"
        }
    ]
    return (
        <main className='max-md:px-5 md:px-7 xl:px-20 mt-20 mb-28'>
            <Ad title="Ad Spot" buttonLabel="View" />
            <div className="mt-14">
                <h2 className="text-2xl text-black font-medium"> My Pages </h2>
                <p className="text-base text-navy font-semibold mt-6"> List Pages in the order of </p>
            </div>
            <Filters />
            <div className="mt-10 flex flex-1 flex-col gap-4">
                {Pages.map((page) => {
                    return (
                        <div key={page.title} className="bg-button px-10 py-5">
                            {/* TODO: This page route has not been implemented in the design */}
                            <Link href={`/page/${page.title}`} className="text-base text-navy font-medium hover:font-semibold"> {page.title} </Link>
                            <p className="text-sm mt-3"> {page.date} </p>
                        </div>
                    )
                })}
            </div>
            <Pagination TotalNumberOfResults={Pages.length} pageSize={5} />
        </main>
    )
}
