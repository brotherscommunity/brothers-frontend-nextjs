import Ad from "@/Components/Ad";
import Footer from "@/Components/Main/Footer";
import Header from "@/Components/Main/Header";
import Pagination from "@/Components/Main/Pagination";
import PostList from "@/Components/Main/Post/PostList";


export default function Home() {
  return (
    <main className="mb-10">
        <div className="mx-20">
          <Header />
          <div className="mx-7 mt-20 mb-28">
            <div className="w-full -ml-2 px-10 py-10 bg-button rounded-xl">
                <div className="border-none bg-secondary rounded-md py-7">
                    <span className="flex items-center justify-center text-black text-2xl font-semibold"> Blog Posts </span>
                </div>
            </div>
            <PostList />
            {/* FAKE VALUE TO SIMULATE TOTAL NUMBER OF POSTS */}
            <div className="mr-10">
              <Pagination TotalNumberOfResults={15}/>
            </div>
            <Ad title="Google Ad Spot" buttonLabel="View" />
          </div>
        </div>
        <Footer />
    </main>
  );
}
