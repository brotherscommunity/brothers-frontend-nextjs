import Ad from "@/Components/Ad";
import Header from "@/Components/Main/Header";
import Pagination from "@/Components/Main/Pagination";
import PostList from "@/Components/Main/Post/PostList";


export default function Home() {
  return (
    <main className="mb-10">
        <div className="max-md:mx-5 md:mx-7 xl:mx-20">
          <Header />
          <div className="xl:mx-7 max-md:mt-6 md:mt-10 lg:mt-20 mb-28">
            <div className="w-full -ml-2 px-10 max-sm:py-5 sm:py-7 md:py-10 bg-button rounded-xl">
                <div className="border-none bg-navy rounded-md py-7">
                    <span className="flex items-center justify-center text-white max-lg:text-xl lg:text-3xl font-palanquin"> Blog Posts </span>
                </div>
            </div>
            <PostList />
            {/* FAKE VALUE TO SIMULATE TOTAL NUMBER OF POSTS */}
            <div className="mr-10">
              <Pagination TotalNumberOfResults={15} pageSize={5}/>
            </div>
            <Ad title="Google Ad Spot" buttonLabel="View" />
          </div>
        </div>
    </main>
  );
}
