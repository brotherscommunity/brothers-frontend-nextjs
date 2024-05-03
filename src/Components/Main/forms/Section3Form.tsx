"use client"

import { Section3FormSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Checkbox } from "@/Components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/Components/ui/form"
import { USER } from "./Registrationform";
import { useRouter } from "next/navigation";

interface Section3FormProps {
    userData: USER | undefined,
    setFilledSection: React.Dispatch<React.SetStateAction<number[]>>,
    setCurrentlySelected: React.Dispatch<React.SetStateAction<number>>
}

export default function Section3Form({userData, setCurrentlySelected, setFilledSection } : Section3FormProps) {

    const {push} = useRouter()
    const form = useForm<z.infer<typeof Section3FormSchema>>({
        resolver: zodResolver(Section3FormSchema),
        defaultValues: {
            password: userData?.password ||  "",
            confirmPassword: userData?.confirmPassword || "",
            referalId: userData?.referalId || undefined
        },
    })

    function handleBack(){
        push("#main")
        setFilledSection((filledSections) => filledSections.filter((index) => index !== 3))
        setCurrentlySelected(2)
    }

    function onSubmit(values: z.infer<typeof Section3FormSchema>){
        // We finally collected all the form data as one
        const finalData = {
            ...userData,
            password: values.password,
            confirmPassword: values.confirmPassword,
            referalId: values.referalId
        }
        console.log(finalData)
        // TODO: Make an HTTP request to Register the user
    }

    return (
        <section className='mt-10'>
            <h2 className="text-navy text-xl text-center font-semibold"> Account Information </h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-14">
                    <div className="flex flex-col items-center gap-3 ">
                        <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem className="formContainer">
                            <FormLabel className="formLabel"> 
                            Password
                            <span className="astrics"> * </span>
                            </FormLabel>
                            <FormControl>
                                <input type="password" placeholder="*************"  className="formInput" {...field}/> 
                            </FormControl>
                            <FormMessage  className='text-sm text-red-500' />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem className="formContainer mt-6">
                            <FormLabel className="formLabel"> 
                            Confirm Password
                            <span className="astrics"> * </span>
                            </FormLabel>
                            <FormControl>
                                <input type="password" placeholder="*************"  className="formInput" {...field}/> 
                            </FormControl>
                            <FormMessage  className='text-sm text-red-500' />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="referalId"
                        render={({ field }) => (
                            <FormItem className="formContainer mt-6">
                            <FormLabel className="formLabel"> 
                            Referal Id
                            <span className="astrics"> * </span>
                            </FormLabel>
                            <FormControl>
                                <input type="text" placeholder="Referal Id"  className="formInput" {...field}/> 
                            </FormControl>
                            <FormMessage  className='text-sm text-red-500' />
                            </FormItem>
                        )}
                        />
                        <span className="flex items-center gap-6 mt-8 ml-12">
                            <Checkbox className="rounded-full text-navy w-5 h-5" />
                            <p className="text-base w-[360px]"> I have read and accepted the terms and conditions of this community </p>
                        </span>
                    </div>
                    <div className="mt-16 px-20 flex items-center justify-center gap-28">
                        <button type="button" onClick={handleBack} className="formBackButton">
                            Back
                        </button>
                        <button type="submit" className="formNextButton">
                            Done
                        </button>
                    </div>
                </form>
            </Form>
        </section>
    )
}
