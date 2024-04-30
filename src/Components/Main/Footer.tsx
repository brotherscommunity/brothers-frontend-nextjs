import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
    return (
        <section className='w-full mt-10 flex flex-col items-center justify-center mb-20'>
            <form className="flex items-start gap-5">
                <input type="text" placeholder="Enter your email" className="w-[439px] h-[48px] px-3 border border-gray-400 rounded-lg focus-visible:outline-none" />
                <button type="submit" className="bg-navy h-[48px] px-6 py-2 text-base text-white rounded-md"> Subscribe </button>
            </form>
            {/* TODO: Instagram page Link */}
            <Link href={""} className="mt-10">
                <FaInstagram className="w-[36px] h-[36px]" />
            </Link>
            <p className="mt-7 text-base text-black font-medium"> @2024 All rights reseved. Brotherhood International Community  </p>
        </section>
    )
}
