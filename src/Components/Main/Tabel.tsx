import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table"

interface TableProbs {
    referals: {
        id: number,
        name: string,
        joinedDate: string,
        country: string
    }[]
}

export default function Tabel({referals} : TableProbs) {
    return (
        <section className="mt-10">
            <Table className="border border-gray-300">
                <TableHeader>
                    <TableRow className="text-base font-medium">
                        <TableHead className="w-[100px]"> S/N </TableHead>
                        <TableHead> Name </TableHead>
                        <TableHead> Joined Date </TableHead>
                        <TableHead className="text-right"> Country </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {referals.map((referal) => {
                        return (
                            <TableRow key={referal.id}>
                                <TableCell className="font-medium"> {referal.id} </TableCell>
                                <TableCell> {referal.name} </TableCell>
                                <TableCell> {referal.joinedDate} </TableCell>
                                <TableCell className="text-right"> {referal.country} </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </section>
    )
}
