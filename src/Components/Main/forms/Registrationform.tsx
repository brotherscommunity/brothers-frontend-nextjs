"use client"

import { Registration_Sections } from "@/constants"
import Link from "next/link"
import { useState } from "react"
import Section1Form from "./Section1Form"


export default function Registrationform(){

    const [filledSection, setFilledSection] = useState<number[]>([1])
    const [currentLySelected, setCurrentlySelected] = useState<number>(1)

    function handleMoveNext(section_num: number){
        setCurrentlySelected(section_num)
        setFilledSection((filledSections) => [...filledSections, section_num])
    }

    return (
        <section className="mx-24 mt-16 mb-48 py-6 px-20 shadow-lg bg-white">
            <h3 className="text-xl text-black text-center font-semibold"> Join the Brothers Community </h3>
            <span className=" flex justify-center">
                <p className="w-[230px] text-center text-sm leading-6 mt-3"> Becoming a Member is Just a Few Steps Away. Register Now </p>
            </span>
            <div className="flex items-center justify-center mt-8">
                {Registration_Sections.map((section_num) => {
                    return (
                        <>
                            <button key={section_num} onClick={() => handleMoveNext(section_num)} className={`w-9 h-9 rounded-full ${filledSection.includes(section_num) ? "bg-navy text-white" : "bg-white shadow-md text-navy border border-gray-300"} text-base focus-visible:outline-none`}>
                                <p className="font-semibold"> {section_num} </p>
                            </button>
                            {Registration_Sections[Registration_Sections.length - 1] !=  section_num && 
                            <hr className="border-t border-navy w-[50px]" />}
                        </>
                    )
                })}
            </div>
            <div className="w-[700px] ml-14 mt-10">
                {currentLySelected === 1 && <Section1Form />}
                <p className="flex justify-center text-sm mt-10"> 
                    Already have an account ? 
                    <Link href={"/sign-in"} className="text-navy pl-2 font-semibold"> Sign in </Link>
                </p>
            </div>
        </section>
    )
}
