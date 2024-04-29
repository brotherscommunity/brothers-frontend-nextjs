import Header from "@/Components/Main/Header";
import PostCard from "@/Components/Main/Post/PostCard";


export default function Home() {
  return (
    <main>
        <Header />
        <section className="mx-7 mt-20 mb-28">
          <div className="w-full -ml-2 px-10 py-10 bg-button rounded-xl">
              <div className="border-none bg-secondary rounded-md py-7">
                  <span className="flex items-center justify-center text-black text-2xl font-semibold"> Blog Posts </span>
              </div>
          </div>
          <div className="mt-16">
            <PostCard />
          </div>
        </section>
    </main>
  );
}
