'use client'

import { useState } from "react"
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";

interface ListProps {
    title: string,
    children: React.ReactNode,
    pagination?: React.ReactNode
}

export default function List({title, children, pagination} : ListProps) {

    const [expand, setExpand] = useState<boolean>(false)
    
    return (
        <section className='mt-8'>
            <div className="ListBar">
                <div className="flex items-start gap-6">
                    <button onClick={() => setExpand((isExpanded) => !isExpanded)} className="p-3 rounded-full bg-green-50 flex justify-center">
                        {expand ?  <CiSquareMinus className="w-4 h-4 text-black" /> : <CiSquarePlus className="w-5 h-5 text-black" />}
                    </button>
                    <button onClick={() => setExpand((isExpanded) => !isExpanded)} className="focus-visible:outline-none border-none">
                        <h3 className="text-lg text-black font-palanquin pt-2"> {title} </h3>
                    </button>
                </div>
            </div>
            {expand && <div className="mt-6">
                <div className="ListBar">
                    {children}
                </div>
                {pagination}
            </div>
            }
        </section>
    )
}
