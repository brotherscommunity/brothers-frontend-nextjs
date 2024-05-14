import TopPageHeader from "@/Components/Small Pieces/TopPageHeader";


export default async function page() {
    //TODO: Fecths all the departments and their contents too
    return (
        <main className="max-md:px-10 md:px-7 xl:px-24 mb-20">
            <TopPageHeader pageCode="PG32" pageName="Functions Page" pageDescription="In this page different managers of the website can assess their functions" />
            <div className="mt-6">

            </div>
        </main>
    )
}
