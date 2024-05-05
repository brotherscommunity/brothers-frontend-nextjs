"use client"

import { Section3FormSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Checkbox } from "@/Components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/Components/ui/form"
import { USER } from "./Registrationform";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface Section3FormProps {
    userData: USER | undefined,
    setFilledSection: React.Dispatch<React.SetStateAction<number[]>>,
    setCurrentlySelected: React.Dispatch<React.SetStateAction<number>>
}

export default function Section3Form({userData, setCurrentlySelected, setFilledSection } : Section3FormProps) {

    const [acceptedTos, setAcceptedTos] = useState<boolean>(false)
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
        if(!acceptedTos){
            toast.error("Please accept the terms and conditions")
            return
        }
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
        <section className='registrationFormContainer'>
            <h2 className="text-navy text-xl text-center font-semibold"> Account Information </h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center gap-3 mt-14">
                    <div className="flex flex-col gap-3">
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
                            </FormLabel>
                            <FormControl>
                                <input type="text" placeholder="Referal Id"  className="formInput" {...field}/> 
                            </FormControl>
                            <FormMessage  className='text-sm text-red-500' />
                            </FormItem>
                        )}
                        />
                        <span className="flex items-center gap-6 mt-8 xl:ml-12">
                            <Checkbox onClick={() => setAcceptedTos((accepted) => !accepted)} className="rounded-full text-navy w-5 h-5" />
                            <p className="text-base max-sm:w-[200px] sm:w-[250px] md:w-[300px] xl:w-[360px]"> I have read and accepted the terms and conditions of this community </p>
                        </span>
                    </div>
                    <div className="mt-16 xl:px-20 flex items-center justify-center gap-28">
                        <span>
                            <button type="button" onClick={handleBack} className="formBackButton">
                                Back
                            </button>
                        </span>
                        <span>
                            <button type="submit" className="formNextButton">
                                Done
                            </button>
                        </span>
                    </div>
                </form>
            </Form>
        </section>
    )
}
