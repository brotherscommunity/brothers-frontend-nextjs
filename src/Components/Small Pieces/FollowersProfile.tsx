import Avatar from "./Avatar";

interface Props {
    firstName: string,
    lastName: string,
    numberOfPosts: number
}

export default function FollowersProfile({firstName, lastName, numberOfPosts} : Props) {
    return (
        <div className="flex items-start gap-4 mb-4 p-4 rounded-lg hover:bg-button">
            <Avatar width="w-[55px]" height="h-[55px]" iconWidth="w-[20px]" iconHeight="h-[24px]" />
            <span className="flex flex-col justify-center gap-1 hover:cursor-pointer">
                <h2 className="max-sm:text-base sm:text-lg text-black font-semibold"> {firstName} {lastName} </h2>
                <p className="text-sm text-stone-600"> {numberOfPosts} posts </p>
            </span>
        </div>
    )
}
