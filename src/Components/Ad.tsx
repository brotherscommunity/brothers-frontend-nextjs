import Image from "next/image";
import { MdOutlineClear } from "react-icons/md";
// import ad from "/public/Ad.png"

interface AdProps {
    title: string,
    buttonLabel: string
}

export default function Ad({title, buttonLabel}: AdProps) {
    return (
        <section className='mt-20'>
            <div className="w-[1130px] h-[257px] relative rounded-xl">
                {/* <Image src={ad} alt="ad" width={1130} height={120} className="rounded-xl" /> */}
                <div className="absolute inset-0 bg-black opacity-90 rounded-[20px]"></div>
                <button className="p-2 bg-slate-600 absolute top-6 right-9 rounded-md">
                    <MdOutlineClear className="w-3 h-3 text-white" />
                </button>
                <span className="absolute left-0 top-1/3 w-full">
                    <div className="flex flex-col items-center justify-center ">
                        <h3 className="text-3xl text-white font-semibold"> {title} </h3>
                        <button className="mt-6 bg-navy w-[120px] h-[47px] focus-visible:outline-none rounded-lg text-white text-base">
                            {buttonLabel}
                        </button>
                    </div>
                </span>
            </div>
        </section>
    )
}
