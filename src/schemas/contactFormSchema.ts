import { z } from "zod";


export const contactFormSchema = z.object({
    fullname: z.string().min(1,{ message: "Please enter your full name!" }),
    email: z.string().email({ message: "Please enter your email!" }),
    mobile: z.string().min(10, { message: "Invalid mobile number!" }),
    description: z.string().min(10, { message: "Minimum 10 characters are required!" }).max(200, { message: "No more than 200 words are allowed at once!" })
})