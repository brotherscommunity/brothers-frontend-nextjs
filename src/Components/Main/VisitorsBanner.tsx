import { Visitors } from "@/constants";


export default function VisitorsBanner() {
    return (
        <section className='mt-10'>
            <div className="w-full h-[300px] bg-navy px-28 pt-16">
                <h2 className="text-3xl text-white font-semibold"> Visitor’s Counter </h2>
                <div className="flex items-center">
                    {Visitors.map((item, i) => {
                        return (
                            <span key={i} className="flex items-center relative mt-16 text-white">
                                <h5 className="text-base"> {item.timePeriod} </h5>
                                <div className={`absolute inset-0 bg-navy opacity-50 ${i === Visitors.length - 1 || i === Visitors.length - 2 ? "w-[90px]" : "w-[34px]"}`} />
                                <p className="font-semibold pl-2 text-xl"> {item.Number_of_Viewers} </p>
                                {i === Visitors.length - 1 ? null : (
                                    <span className="text-white mx-5">
                                        |
                                    </span>
                                ) }
                            </span>
                        )
                    })}
                </div>
            </div>
            <div className=" mt-10 px-28 flex gap-3 text-navy text-sm"> 
                <span className="font-bold"> Note! </span> 
                <p className="font-semibold"> Visits counts are only accepted from a registered member’s visit and only once per day. </p> 
                </div>
        </section>
    )
}
