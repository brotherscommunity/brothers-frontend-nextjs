import PostCard from "./PostCard";


export default function PostList() {

    const Posts = Array.from({length: 6}, (post, i) => {
        return (
            <PostCard key={i} />
        )
    })
    return (
        <main className="mt-10">
            {/*  Simulating an array of Posts fetched from the Database */}
            { Posts }
        </main>
    )
}
