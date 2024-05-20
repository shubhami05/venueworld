import { z } from "zod";

export const signupSchema = z.object({
    firstname:z.string(),
    lastname:z.string(),
    email:z.string().email({message:"Invalid email address"}),
    mobile:z.string(),
    password:z.string().min(6,{message:"Password must be atleast 6 characters"})
})