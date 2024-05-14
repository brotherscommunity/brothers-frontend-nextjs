import Pagination from "@/Components/Main/Pagination"
import PostList from "@/Components/Main/Post/PostList"
import Catagory from "@/Components/Small Pieces/Catagory"
import Comment from "@/Components/Small Pieces/Comment"
import FollowersProfile from "@/Components/Small Pieces/FollowersProfile"
import List from "@/Components/Small Pieces/List"
import TopPageHeader from "@/Components/Small Pieces/TopPageHeader"

interface BlogCatagoryDetailsProps {
    params: {
        name: string
    }
}

export default async function page({params} : BlogCatagoryDetailsProps) {

    const blogCatagoryName = params.name.replace("_", " ")
    //TODO: Make an HTTP request to fetch details of the Blog Catagory. the endpoint that does this task should recieve the name of the catagory as a parameter and query the Catagory table.
    const catagoryPath = ["World", "Continets", "Africa", "Nigeria", "Nigerian Festivals"]

    return (
        <main className="max-md:px-5 md:px-7 xl:px-20 mb-28">
            <TopPageHeader pageCode="PG32" pageName={`Blog Category Description Page - ${blogCatagoryName}`} pageDescription="Blog Category Description and discussion for improvement in this page." />
             {/* FAKE DATA */}
            <Catagory name="Nigerian Festivals" followers={200} members={15} posts={156} catagoryPath={catagoryPath} code="Bc21" />
            <div className="bg-button w-full h-auto px-10 py-6 mt-10 border-none rounded-md focus-visible:outline-none">
                {/* RULES FOR THE BLOG CATAGORY ARE LISTED HERE. AND THIS IS JUST A DUMMY DATA */}
                <p className="text-sm text-stone-600 leading-6"> 
                    This blog category is for Nigerian festivals. Members who submit posts in this category should only post with Nigerian festival exclusive content. Rules for posting content here is  1
                </p>
            </div>
            <List title="Members" pagination= {
                <Pagination TotalNumberOfResults={20} pageSize={4} />
            }>
                {/* TODO: loop over the members array of this blog catagory */}
                {Array.from({length: 4}, (_, index) => index + 1).map((index) => {
                    return (
                        <FollowersProfile key={index} firstName="Marcus" lastName="Ray" numberOfPosts={120} isInList={true} />
                    )
                })}
            </List>
            <List title="Contributors" pagination= {
                <Pagination TotalNumberOfResults={20} pageSize={4} />
            }>
                {/* TODO: loop over contributors array of this blog catagory */}
                {Array.from({length: 4}, (_, index) => index + 1).map((index) => {
                    return (
                        <FollowersProfile key={index} firstName="Marcus" lastName="Ray" numberOfPosts={120} isInList={true} />
                    )
                })}
            </List>
            <List title="Followers" pagination= {
                <Pagination TotalNumberOfResults={20} pageSize={4} />
            }>
                {/* TODO: loop over the followers array of this blog catagory */}
                {Array.from({length: 4}, (_, index) => index + 1).map((index) => {
                    return (
                        <FollowersProfile key={index} firstName="Marcus" lastName="Ray" numberOfPosts={120} isInList={true} />
                    )
                })}
            </List>
            <div className="mt-5">
                <PostList />
                <div className="mr-7">
                    <Pagination TotalNumberOfResults={20} pageSize={5} />
                </div>
            </div>
            <div className="mt-5">
                <Comment blogCatagoryName={blogCatagoryName} />
            </div>
        </main>
    )
}
