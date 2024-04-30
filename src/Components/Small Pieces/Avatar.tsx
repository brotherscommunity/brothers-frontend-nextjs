import Link from "next/link";
import { FaRegUser } from "react-icons/fa6";


export default function Avatar() {
    return (
        <Link href="/profile" className="w-[40px] h-[40px] relative rounded-full bg-navy border-none focus-visible:outline-none">
            <FaRegUser className="absolute right-3 top-2.5 w-[16px] h-[16px] text-white" />
        </Link>
    )
}
