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
import { useState } from "react"
import { motion } from 'framer-motion'
import { AuroraBackground } from "@/components/ui/aurora-background"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { AxiosError } from 'axios'
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { ApiResponse } from "@/types/ApiResponse"
import { signIn } from "next-auth/react"
import { loginSchema } from "@/schemas/loginSchema"
import { Loader2 } from "lucide-react"



export default function SigninPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: ""
    }
  })
  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    setIsSubmitting(true);
    try {
      const result = await signIn("credentials", {
        redirect: false,
        identifier: data.identifier,
        password: data.password
      })
      if (result?.error) {
        if (result.error === "Error: Invalid credentials!") {
          toast({
            title: "Login Failed",
            description: "Invalid user or password",
            duration: 5000,
            variant: "destructive"
          });
        }
        else {
          toast({
            title: "Error",
            description: result.error || "Unknown error",
            variant: "destructive",
          });
        }
      }
      if (result?.url) {
        toast({
          title: "Success",
          description: "Login Successfully",
          variant: "default"
        })
        router.replace("/")
      }
    }
    catch (error: any) {
      const axiosError = error as AxiosError<ApiResponse>;
      let errorMessage = axiosError.response?.data.message;
      toast({
        title: "Login failed",
        description: errorMessage,
        variant: "destructive"
      })
    }
    finally {
      setIsSubmitting(false)
    }
  }
  return (
    <>
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
                Login to <span >VenueWorld!</span>
              </h1>
              <span className="font-medium ">
                Best venue for finding website!
              </span>
              <Separator className="my-5 " />

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">


                  <FormField
                    control={form.control}
                    name="identifier"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email/mobile</FormLabel>
                        <FormControl>
                          <Input className="bg-transparent backdrop-blur-xl text-white dark:text-black" placeholder="Email or mobile number" {...field} />
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
                  {
                    <Button type="submit" className="font-semibold bg-zinc-50 hover:bg-zinc-200 transition-all text-zinc-900 " disabled={isSubmitting}>
                      {
                        isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />Please Wait
                          </>
                        ) : ("Login")
                      }
                    </Button>
                  }
                  <h2 className="font-semibold">Don't have an account? <Link href={'/signup'} className="text-blue-400 hover:text-slate-300">Signup now</Link></h2>
                </form>
              </Form>
            </div>
          </main>
        </motion.div>
      </AuroraBackground>
    </>
  )
}


