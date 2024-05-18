import { z } from "zod";

export const signupSchema = z.object({
    email:z.string().email({message:"Invalid email address"}),
    pasword:z.string().min(6,{message:"Password must be atleast 6 characters"})
})