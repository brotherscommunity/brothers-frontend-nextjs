'use client'

import Spinner from "@/Components/Small Pieces/Spinner"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/Components/ui/form"
import { SignFormSchema } from "@/lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

export default function Signinform() {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const form = useForm<z.infer<typeof SignFormSchema>>({
        resolver: zodResolver(SignFormSchema),
        defaultValues: {
            username: "",
            password: ""
        },
    })

    function onSubmit(values: z.infer<typeof SignFormSchema>){
        //TODO: Make an HTTP request to sign in the user
    }

    return (
        <section className="mainContainer">
            <h2 className="text-2xl text-black text-center font-semibold mt-10"> Welcome Back! </h2>
            <p className="mt-3 ml-16 w-[250px] max-sm:text-sm sm:text-base text-center leading-6"> Becoming a Member is Just a Few Steps Away. Register Now </p>
            <div className="mt-10 ml-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem className="formContainer">
                            <FormLabel className="formLabel"> 
                            Username
                            </FormLabel>
                            <FormControl>
                                <input type="text" placeholder="SandSmith" disabled={isLoading}  className="formInput" {...field}/> 
                            </FormControl>
                            <FormMessage className='text-sm text-red-500' />
                            </FormItem>
                        )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="formContainer mt-7">
                                <FormLabel className="formLabel"> 
                                Password
                                </FormLabel>
                                <FormControl>
                                    <input type="password" disabled={isLoading} placeholder="Enter Password"  className="formInput" {...field}/> 
                                </FormControl>
                                <FormMessage  className='text-sm text-red-500' />
                                </FormItem>
                            )}
                            />
                            <div className="flex justify-end mt-6">
                                <Link href="/forgot-password" className="text-sm text-navy font-semibold"> Forgot password ? </Link>
                            </div>
                            <button type="submit" className="bg-navy w-full mt-7 rounded-md text-white py-2"> 
                                {isLoading ? <Spinner loading={isLoading} /> : "SIGN IN"} 
                            </button>
                            <div className="flex items-center justify-center gap-2 mt-8">
                                <p className="text-sm font-medium"> Don't have an account ? </p>
                                <Link href="/register" className="text-sm text-navy font-semibold"> Sign up</Link>
                            </div>
                    </form>
                </Form>
            </div>
        </section>
    )
}
