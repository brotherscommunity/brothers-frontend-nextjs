import { z } from "zod";

export const Section1FormSchema = z.object({
    firstName: z.string().min(2, {message: "first name is required"}).max(10, {message: "first name is too long"}),
    lastName: z.string().min(2, {message: "last name is required"}).max(10, {message: "last name is too long"}).optional(),
    userName: z.string().min(2, {message: "username is required"}).max(8, {message: "user name is too long"}),
    nickName: z.string().min(2, {message: "Nickname is required"}).max(10, {message: "nick name is too long"}),
    sex: z.string().min(2, {message: "sex is required"}),
    languagesSpoken: z.string().min(2, {message: "This field is required"}),
    languagesWishToLearn: z.string().min(2, {message: "This field is required"}),
    birthDate: z.string().min(2, {message: "birth date is required"})
})

export const Section2FormSchema = z.object({
    email: z.string().email(),
    telegramUsername: z.string().optional(),
    phoneNumber: z.string().max(15, {message: "phone number is too long"}).optional(),
    facebookId: z.string().optional(),
    instagramUsername: z.string().optional(),
    vkId: z.string().optional(),
    weChatId: z.string().optional(),
    country: z.string().min(2, {message: "country is required"}),
    state: z.string().min(2, {message: "state is required"}),
    city: z.string().optional()
})

export const Section3FormSchema = z.object({
    password: z.string().min(5, {message: "password must be greater than 5 characters"}),
    confirmPassword: z.string(),
    referalId: z.number().optional()
}).refine(
    (values) => {
        return values.password === values.confirmPassword;
    },
    {
        message: "Passwords must match!",
        path: ["confirmPassword"],
    }
)

export const SignFormSchema = z.object({
    username: z.string(),
    password: z.string()
})

export const EditProfileSchema = z.object({
    ...Section1FormSchema.shape,
    ...Section2FormSchema.shape,
    file: z.custom<File[]>(),
})