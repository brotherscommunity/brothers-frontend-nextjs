'use client'

import FormRow from "@/Components/Small Pieces/FormRow"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/Components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/Components/ui/select"
import { USER } from "@/Components/Main/forms/Registrationform"
import { Section1FormSchema } from "@/lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"

export interface GeneralSectionsFormProps {
    userData: USER | undefined
    setUserData: React.Dispatch<React.SetStateAction<USER | undefined>>
    setFilledSection: React.Dispatch<React.SetStateAction<number[]>>,
    setCurrentlySelected: React.Dispatch<React.SetStateAction<number>>
}

export default function Section1Form({userData, setUserData, setFilledSection, setCurrentlySelected} : GeneralSectionsFormProps) {
    const {push} = useRouter()

    const form = useForm<z.infer<typeof Section1FormSchema>>({
        resolver: zodResolver(Section1FormSchema),
        defaultValues: {
            firstName: userData?.firstName || "" ,
            lastName: userData?.lastName || "",
            userName: userData?.userName || "",
            nickName: userData?.nickName || "",
            sex: userData?.sex || "",
            languagesSpoken: userData?.languagesSpoken || "",
            languagesWishToLearn: userData?.languagesWishToLearn || "",
            birthDate: userData?.birthDate || ""
        },
    })

    function onSubmit(values: z.infer<typeof Section1FormSchema>){
        push("#main")
        setUserData({
            firstName: values.firstName,
            lastName: values.lastName,
            userName: values.userName,
            nickName: values.nickName,
            sex: values.sex,
            languagesSpoken: values.languagesSpoken,
            languagesWishToLearn: values.languagesWishToLearn,
            birthDate: values.birthDate
        })
        setFilledSection((filledSections) => [...filledSections, 2])
        setCurrentlySelected(2)
    }

    return (
        <section className='mt-10'>
            <h2 className="text-navy text-xl text-center font-semibold"> Personal Information </h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-start gap-3 mt-14">
                    <FormRow fieldname1="firstName" fieldname2="lastName" control={form.control} label1="First Name" label2="Last Name" inputType1="text" inputType2="text" placeholder1="Smith" placeholder2="Sand" needTopMargin={false} />
                    <FormRow fieldname1="nickName" fieldname2="userName" control={form.control} label1="Nickname" label2="username" inputType1="text" inputType2="text" placeholder1="sagu" placeholder2="Sadusmith23"/>
                    <div className="formRow mt-6">
                        {/* SEX */}
                        <FormField
                        control={form.control}
                        name="sex"
                        render={({ field }) => (
                            <FormItem className="formContainer">
                            <FormLabel className="formLabel"> 
                            Sex
                            <span className="astrics"> * </span>
                            </FormLabel>
                            <Select onValueChange= {field.onChange} defaultValue={field.value}>
                                    <FormControl className="focus:border-none focus-visible:outline-none py-4">
                                        <SelectTrigger {...field} className="bg-button w-[350px] px-3 py-2.5 focus:border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-button">
                                            <SelectValue placeholder="Select gender"/>
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent >
                                        <SelectItem value="male"> Male </SelectItem>
                                        <SelectItem value="female"> Female </SelectItem>
                                    </SelectContent>
                                </Select>
                            <FormMessage className='text-sm text-red-500' />
                            </FormItem>
                        )}
                        />
                        {/* LANGUAGES SPOKEN */}
                        <FormField
                        control={form.control}
                        name="languagesSpoken"
                        render={({ field }) => (
                            <FormItem className="formContainer">
                            <FormLabel className="formLabel"> 
                            Languages Spoken
                            <span className="astrics"> * </span>
                            </FormLabel>
                            <FormControl>
                                <input type="text" placeholder="English , French, German"  className="formInput" {...field}/> 
                            </FormControl>
                            <FormMessage  className='text-sm text-red-500' />
                            </FormItem>
                        )}
                        />
                    </div>
                    <div className="formRow mt-6">
                        {/* LANGUAGES WISHING TO LEARN  */}
                        <FormField
                        control={form.control}
                        name="languagesWishToLearn"
                        render={({ field }) => (
                            <FormItem className="formContainer">
                            <FormLabel className="formLabel"> 
                            Languages wishing to learn
                            <span className="astrics"> * </span>
                            </FormLabel>
                            <FormControl>
                                <input type="text" placeholder="English , French, German" className="formInput" {...field}/> 
                            </FormControl>
                            <FormMessage className='text-sm text-red-500' />
                            </FormItem>
                        )}
                        />
                        {/* BIRTH DATE  */}
                        <FormField
                        control={form.control}
                        name="birthDate"
                        render={({ field }) => (
                            <FormItem className="formContainer">
                            <FormLabel className="formLabel"> 
                            Birth Date
                            <span className="astrics"> * </span>
                            </FormLabel>
                            <FormControl>
                                <input type="date" placeholder="DD/MM/YYY" className="formInput" {...field}/> 
                            </FormControl>
                            <FormMessage  className='text-sm text-red-500' />
                            </FormItem>
                        )}
                        />
                    </div>
                    <span className="mt-14 -mr-10 flex items-center justify-end ">
                        <button type="submit" className="formNextButton"> Next </button>
                    </span>
                </form>
            </Form>
        </section>
    )
}
