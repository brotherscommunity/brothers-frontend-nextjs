import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table"

export default function Tabel() {
    // TODO: Fetch Users who registered under The current user's referal
    const referals = [
        // FAKE DATA
        {
            id: 1,
            name: "Toshiro",
            JoinedDate: "28/3/24",
            Country: "India"
        }
    ]      

    return (
        <section className="mt-10">
            <Table>
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
                                <TableCell> {referal.JoinedDate} </TableCell>
                                <TableCell className="text-right"> {referal.Country} </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </section>
    )
}
