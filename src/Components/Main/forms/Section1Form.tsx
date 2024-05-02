'use client'

import { Section1FormSchema } from "@/lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

interface Section1FormProps {
    setFilledSection: React.Dispatch<React.SetStateAction<number>>,
    setCurrentlySelected: React.Dispatch<React.SetStateAction<number[]>>
}

export default function Section1Form() {

    const form = useForm<z.infer<typeof Section1FormSchema>>({
        resolver: zodResolver(Section1FormSchema),
        defaultValues: {
            
        },
    })

    return (
        <section className='mt-10'>
            <h2 className="text-navy text-xl text-center font-semibold"> Personal Information </h2>

        </section>
    )
}
