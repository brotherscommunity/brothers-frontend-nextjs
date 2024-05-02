import { z } from "zod";

export const Section1FormSchema = z.object({
    firstName: z.string().min(2, {message: "first name is required"}).max(10, {message: "first name is too long"}),
    lastName: z.string().min(2, {message: "last name is required"}).max(10, {message: "last name is too long"}).optional(),
    userName: z.string().min(2, {message: "username is too short"}).max(8, {message: "user name is too long"}).optional(),
    nickName: z.string().max(10, {message: "nick name is too long"}),
    email: z.string().email(),
    password: z.string().min(3, {message: "password is required"}),
    confirmPassword: z.string().min(3, {message: "confirm password is required"}).optional()
}).refine(
    (value) => {
        if(value.confirmPassword && value.password !== value.confirmPassword){
            return false
        }
        else{
            return true
        }
    }, 
    {
        message: "Passwords must match!",
        path: ["confirmPassword"],
    }
)