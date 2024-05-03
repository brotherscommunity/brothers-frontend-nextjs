"use client"

import { Section1FormSchema, Section2FormSchema } from "@/lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form } from "@/Components/ui/form"
import { z } from "zod"
import { GeneralSectionsFormProps } from "./Section1Form"
import FormRow from "@/Components/Small Pieces/FormRow"
import { useRouter } from "next/navigation"

export default function Section2Form({userData, setUserData, setFilledSection, setCurrentlySelected} : GeneralSectionsFormProps){

    const {push} = useRouter()
    const form = useForm<z.infer<typeof Section2FormSchema>>({
        resolver: zodResolver(Section1FormSchema),
        defaultValues: {
            email: userData?.email || "",
            telegramUsername: userData?.telegramUsername || "",
            phoneNumber: userData?.phoneNumber || "",
            facebookId: userData?.facebookId || "",
            instagramUsername: userData?.instagramUsername || "",
            vkId: userData?.vkId || "",
            weChatId: userData?.weChatId || "",
            country: userData?.country || "",
            state: userData?.state || "",
            city: userData?.city || ""
        },
    })

    function handleBack(){
        push("#main")
        setFilledSection((filledSections) => filledSections.filter((index) => index !== 2))
        setCurrentlySelected(1)
    }

    function onSubmit(values: z.infer<typeof Section2FormSchema>){
        setUserData({
            email: values.email,
            telegramUsername: values.telegramUsername,
            phoneNumber: values.phoneNumber && values.phoneNumber,
            facebookId: values.facebookId,
            instagramUsername: values.instagramUsername,
            vkId: values.vkId,
            weChatId: values.weChatId,
            country: values.country,
            state: values.state,
            city: values.city
        })
        setFilledSection((filledSections) => [...filledSections, 3])
        setCurrentlySelected(3)
    }

    return (
        <section className='mt-10'>
            <h2 className="text-navy text-xl text-center font-semibold"> Contact Information </h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-start gap-3 mt-14">
                    <FormRow fieldname1="email" fieldname2="telegramUsername" control={form.control} label1="Email" label2="Telegram username" inputType1="email" inputType2="text" placeholder1="Email" placeholder2="Sandsmith" needTopMargin={false} optional2={true} />
                    <FormRow fieldname1="phoneNumber" fieldname2="vkId" control={form.control} label1="Phone Number" label2="Vk Id" inputType1="text" inputType2="text" placeholder1="Phone Number" placeholder2="Your VK ID" optional1={true} optional2={true}/>
                    <FormRow fieldname1="facebookId" fieldname2="country" control={form.control} label1="Facebook Id" label2="Country" inputType1="text" inputType2="text" placeholder1="123456789012345" placeholder2="USA" optional1={true}/>
                    <FormRow fieldname1="instagramUsername" fieldname2="state" control={form.control} label1="Instagram username" label2="State" inputType1="text" inputType2="text" placeholder1="sand_smith" placeholder2="Texas" optional1={true}/>
                    <FormRow fieldname1="weChatId" fieldname2="city" control={form.control} label1="Wechat Id" label2="City" inputType1="text" inputType2="text" placeholder1="unionid=1234567890" placeholder2="Austin" optional1={true} optional2={true}/>
                    <div className="mt-8 flex items-center justify-between">
                        <button type="button" onClick={handleBack} className="formBackButton"> Back </button>
                        <button type="submit" className="formNextButton -mr-14"> Next </button>
                    </div>
                </form>
            </Form>
        </section>
    )
}
