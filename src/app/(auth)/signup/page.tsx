"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { signupSchema } from "@/schemas/signupSchema"
import { useState } from "react"
import { motion } from 'framer-motion'
import { AuroraBackground } from "@/components/ui/aurora-background"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import axios, { AxiosError } from 'axios'
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { ApiResponse } from "@/types/ApiResponse"



export default function SignupPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: ""
    }
  })
  const onSubmit = async (data: z.infer<typeof signupSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post('api/signup', data)
      if (response.data.success) {
        toast({
          title: "Success",
          description: response.data.message
        })
        router.replace("/login")
      }
      else {
        toast({
          title: "Failed",
          description: response.data.message
        })
      }
    }
    catch (error: any) {
      console.log("Error in signing up user!", error)
      const axiosError = error as AxiosError<ApiResponse>;
      let errorMessage = axiosError.response?.data.message;
      toast({ 
          title: "Signup failed",
          description: errorMessage,
          variant: "destructive"  
      })
      
    }
    finally {
      setIsSubmitting(false)
    }
  }
  return (
    <AuroraBackground >
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <main className="flex justify-center items-center font-sans min-w-fit min-h-screen">

          <div className="w-full max-w-md p-8 bg-slate-500 bg-opacity-10 backdrop-blur-md rounded-lg shadow-xl ">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              Signup to <span >VenueWorld!</span>
            </h1>
            <p className="font-medium ">
              Best venue for finding website!
            </p>
            <Separator className="my-5 " />

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="flex gap-4 md:flex-row flex-col">

                  <FormField
                    control={form.control}
                    name="firstname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Firstname</FormLabel>
                        <FormControl>
                          <Input className="bg-transparent backdrop-blur-xl text-white dark:text-black" placeholder="Firstname" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Lastname</FormLabel>
                        <FormControl>
                          <Input className="bg-transparent backdrop-blur-xl text-white dark:text-black" placeholder="Lastname" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input className="bg-transparent backdrop-blur-xl text-white dark:text-black" placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile</FormLabel>
                      <FormControl>
                        <Input type="number" className="bg-transparent backdrop-blur-xl text-white dark:text-black" placeholder="Enter your mobile number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input className="bg-transparent backdrop-blur-xl text-white dark:text-black" placeholder="Enter your password" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                {<Button type="submit" className="font-semibold bg-zinc-50 hover:bg-zinc-200 transition-all text-zinc-900 " disabled={isSubmitting}>
                  {
                    isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />Please Wait
                      </>
                    ) : ("Sign up")
                  }
                </Button>
                }
                <p className="font-semibold">Already have an account? <Link href={'/login'} className="text-blue-400 transition-all hover:text-slate-300">Login now</Link></p>
              </form>
            </Form>
          </div>

        </main>
      </motion.div>
    </AuroraBackground>

  )
}


