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
    email: z.string().email().min(2, {message: "email is required"}),
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
    confirmPassword: z.string().min(1, {message: "You need to re-enter your password"}),
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
    username: z.string().min(1, {message: "username is required"}),
    password: z.string().min(1, {message: "password is required"})
})
export const EditProfileSchema = z.object({
    ...Section1FormSchema.shape,
    ...Section2FormSchema.shape,
    file: z.custom<File[]>(),
    newPassword: z.string().min(5, {message: "password must be greater than 5 characters"}),
    confirmPassword: z.string().min(1, {message: "You need to re-enter your password"}),
})
export const BlogPostSchema = z.object({
    postedBy: z.string().optional(),
    content: z.string().min(3, {message: "You need to provide the content"}), 
    title: z.string().min(2, {message: "title for your post is required"}).max(40, {message: "Title is too long"}),
    image: z.custom<File[]>(),
    references: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    created_at: z.date(),
})
export const VideoBlogSchema = z.object({
    postedBy: z.string().optional(),
    created_at: z.date(),
    title: z.string().min(2, {message: "title for your post is required"}).max(40, {message: "Title is too long"}),
    videoLink: z.string().min(2, {message: "Link is required"}),
    thumbnail: z.custom<File[]>(),
    description:  z.string().min(3, {message: "description is required"}),
    references: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
})