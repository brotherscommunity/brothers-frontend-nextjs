import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import VisitorsBanner from "./VisitorsBanner";

export default function Footer() {
    return (
        <section>
            <VisitorsBanner />
            <div className="w-full mt-10 flex flex-col items-center justify-center mb-20">
                <form className="flex items-start gap-5">
                    <input type="text" placeholder="Enter your email" className="max-sm:w-[250px] sm:w-[300px] md:w-[360px] lg:w-[439px] h-[48px] px-3 border border-gray-400 rounded-lg focus-visible:outline-none" />
                    <button type="submit" className="bg-navy max-md:h-[45px] md:h-[48px] px-6 py-2 text-base text-white rounded-md"> Subscribe </button>
                </form>
                {/* TODO: Instagram page Link */}
                <Link href={""} className="mt-10">
                    <FaInstagram className="w-[36px] h-[36px]" />
                </Link>
                <p className="mt-7 max-sm:text-sm sm:text-base text-black font-medium"> @2024 All rights reseved. Brotherhood International Community  </p>
            </div>
        </section>
    )
}
