import Pagination from "@/Components/Main/Pagination";
import RankingTable from "@/Components/Main/RankingTable";

interface FounderRankingProps {
    searchParams: {
        page: string
    }
}

export default function page({searchParams} : FounderRankingProps) {
    const pageQuery = searchParams.page || 1
    // TODO: Make an Http request to fetch the founders ranking. is should recieve the page parameter
    // FAKE DATA
    const rankData = [
        {
            rank: 1,
            founderName: "Adrash",
            country: "India",
            date: "2/11/2022"
        },
        {
            rank: 2,
            founderName: "Nana",
            country: "Nigeria",
            date: "2/11/2022"
        },
        {
            rank: 1,
            founderName: "Adrash",
            country: "India",
            date: "2/11/2022"
        },
        {
            rank: 2,
            founderName: "Nana",
            country: "Nigeria",
            date: "2/11/2022"
        },
        {
            rank: 1,
            founderName: "Adrash",
            country: "India",
            date: "2/11/2022"
        },
        {
            rank: 1,
            founderName: "Adrash",
            country: "India",
            date: "2/11/2022"
        },
    ]
    return (
        <main className="max-md:px-5 md:px-7 xl:px-20 mt-16">
            <h2 className="text-2xl text-black font-semibold"> Founder Ranking Page </h2>
            <RankingTable rankData={rankData} />
            <Pagination TotalNumberOfResults={rankData.length} />
        </main>
    )
}
