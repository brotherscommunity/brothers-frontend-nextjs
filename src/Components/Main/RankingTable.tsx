import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table"

interface RankingTableProps {
    rankData: {
        rank: number,
        founderName: string,
        country: string,
        date: string
    }[]
}

export default function RankingTable({rankData} : RankingTableProps) {
    return (
        <section className='mt-16'>
            <Table className="border border-gray-300">
                <TableHeader className="pb-3">
                    <TableRow className="text-base font-medium">
                        <TableHead className="w-[100px]"> Rank </TableHead>
                        <TableHead> Founder Name </TableHead>
                        <TableHead> Country </TableHead>
                        <TableHead className="text-right"> Date </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rankData.map((data) => {
                        return (
                            <TableRow key={data.rank} className="mt-6">
                                <TableCell className="font-medium"> {data.rank} </TableCell>
                                <TableCell> {data.founderName} </TableCell>
                                <TableCell> {data.country} </TableCell>
                                <TableCell className="text-right"> {data.date} </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </section>
    )
}
