import Ad from "@/Components/Ad";
import ArticlesBlog from "@/Components/Main/forms/ArticlesBlog";


export default function page() {
    return (
        <main className='mx-24 mb-28'>
            <Ad title="Ad Spot" buttonLabel="View" />
            <div className="mt-16">
                <h3 className="text-black text-xl font-semibold"> Create a Post </h3>
                <ArticlesBlog />
            </div>
        </main>
    )
}
