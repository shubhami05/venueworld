'use client'
import Image from "next/image";
import hero_image from '../../images/hero_image.svg'
import { WobbleCard } from "@/components/ui/wobble-cards";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { contactFormSchema } from "@/schemas/contactFormSchema";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { AxiosError } from "axios";
import { ApiResponse } from "@/types/ApiResponse";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullname: "",
      email: "",
      mobile: "",
      description: ""
    },
  })



  const handleSubmit = async (data: any) => {
    try {
      setIsSubmitting(true);
    }
    catch (error: any) {
      console.log(error)
      const axiosError = error as AxiosError<ApiResponse>;
      let errorMessage = axiosError.response?.data.message;
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive"
      })
    }
    finally {
      setIsLoading(false)
    }
  }


  return (
    <main className="min-h-screen flex-col justify-center items-center">


      {/* Hero section */}
      <section className="hero-section min-h-screen w-full dark:bg-grid-white/[0.2] bg-grid-black/[0.05] relative flex items-center justify-center 2d232e">

        <div className="container flex flex-col md:flex-row items-center justify-center w-full min-h-[80vh] overflow-hidden px-4 md:px-6 lg:px-8">
          <section className="relative w-full flex items-center justify-center">
            <div className=" font-bold  z-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 relative px-4 md:px-6 text-center">
              <h1 className="drop-shadow-lg text-3xl md:text-5xl lg:text-6xl font-bold text-zinc-800 tracking-tight">
                Find the Perfect Venue for Your Events
              </h1>
              <p className="drop-shadow-lg mt-4 md:mt-6 text-lg md:text-xl text-zinc-800">
                Discover a wide range of stylish and versatile event venues to make your special occasion unforgettable.

              </p>
              <form onSubmit={handleSubmit} className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center">
                <input
                  className="shadow-xl  border-2 h-12 w-full md:h-14 px-4 md:px-6 rounded-l-md text-zinc-900 focus:ring-2 focus:ring-primary focus:border-primary mb-4 sm:mb-0 sm:mr-2 sm:flex-1"
                  placeholder="Enter event details (e.g. location, category)"
                  type="text"
                />
                <button
                  className="shadow-xl h-12 md:h-14 px-6 md:px-8 rounded-r-md bg-slate-800 text-white hover:bg-slate-600 transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:flex-none"
                  type="submit"
                >
                  Search Venues
                </button>
              </form>
            </div>
          </section>
          <div className=" items-center justify-center p-8 md:p-12 lg:p-16 hidden xl:flex">
            <Image
              alt="Event Illustration"
              className="max-w-full h-auto hero_image object-cover aspect-auto transform drop-shadow-xl animate-in"
              height="900"
              style={{ animation: 'loop 5s -25s ease-in-out infinite', }}
              src={hero_image}
              width="900"
            />
          </div>
        </div>
      </section>
      <Separator />
      <section className="py-20 hero-section min-h-screen bg-gradient-to-br from-slate-50 to-slate-300  w-full flex flex-col justify-center ">
        <h1 className="text-5xl text-slate-800 mb-20 font-bold font-sans container">We provide</h1>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-900 min-h-[200px] lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Top Verified Venues
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                The venues listed in our site have best facilites and verified by us.
              </p>
            </div>
            <Image
              src="/assets/userpanel-home-img-1.png"
              width={400}
              height={400}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[0%] filter -bottom-10 object-contain rounded-2xl hidden md:block"
            />
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[200px]">
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              No Extra Charge for Exploring.
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              We provide online service for users to find suiatable venue without any type of fees.
            </p>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 bg-purple-950 lg:col-span-3 min-h-[200px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Variety of Venues With Various Type of Facilitites in Different Cities!
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                With over 100,000 mothly Venues' exploration, VenueWolrd is the most
                popular online platform for Venue Finders and Owners as well.
              </p>
            </div>
            <Image
              src="/assets/userpanel-home-img-2.png"
              width={400}
              height={400}
              alt="linear demo image"
              className="absolute -right-10 md:-right-[0%] lg:-right-[0%] lg:mr-10 top-0 object-contain rounded-2xl hidden md:block"
            />
          </WobbleCard>
        </div>
      </section>
      <Separator />
      <section className="about-section min-h-screen w-full bg-gradient-to-bl from-slate-300 to-slate-50 flex flex-col justify-center items-center">

        <h1 className="text-5xl text-slate-800 mb-20 font-bold font-sans container">About Us</h1>
        <div className="container">
          <div className="py-16 container overflow-hidden">
            <div className="container m-auto px-6 space-y-8 text-slate-500 md:px-12">
              <div>
                <span className="text-slate-600 text-lg font-semibold">Venue World</span>
                <h2 className="mt-4 text-2xl text-slate-800 font-bold md:text-4xl">A technology to be helpful for both Finder and Owner of venue.</h2>
              </div>
              <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4  drop-shadow-lg">
                <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                  <div className="relative p-8 space-y-4 flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 transition group-hover:text-yellow-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                    </svg>

                    <div className="space-y-2">
                      <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600 text-center">8000+</h5>
                      <p className="text-sm text-gray-600">different venues are listed in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non accusamus temporibus.</p>
                    </div>

                  </div>
                </div>
                <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                  <div className="relative p-8 space-y-4 flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 transition group-hover:text-yellow-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>


                    <div className="space-y-2">
                      <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600 text-center">8000+</h5>
                      <p className="text-sm text-gray-600">users have explored our site. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non accusamus temporibus.</p>
                    </div>

                  </div>
                </div>
                <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                  <div className="relative p-8 space-y-4 flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 transition group-hover:text-yellow-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>


                    <div className="space-y-2">
                      <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600 text-center">8000+</h5>
                      <p className="text-sm text-gray-600"> venues are enquired by users. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non accusamus temporibus.</p>
                    </div>

                  </div>
                </div>
                <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                  <div className="relative p-8 space-y-4 flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 transition group-hover:text-yellow-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>


                    <div className="space-y-2">
                      <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600 text-center">8000+</h5>
                      <p className="text-sm text-gray-600">reviews are recieved for various venues. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non accusamus temporibus.</p>
                    </div>

                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>
      <Separator />
      <section className="contact-section py-20  min-h-screen bg-slate-50  flex flex-col justify-center items-start">
        <div className="heading container">
          <h1 className="text-5xl text-slate-800 mb-10 font-bold font-sans ">Contact Us</h1>
        </div>
        <div className="form-container container flex justify-between">
          <div className=" items-center justify-center p-8 md:p-12 lg:p-16 hidden xl:flex">
            <Image
              alt="Event Illustration"
              className="max-w-full h-auto hero_image object-cover aspect-auto transform drop-shadow-xl animate-in"
              height="500"
              style={{ animation: 'loop 5s -25s ease-in-out infinite', }}
              src={'/assets/userpanel-home-img-3.png'}
              width="500"
            />
          </div>
          <Card className="w-[550px] drop-shadow-xl">
            <CardHeader>
              <CardTitle>Contact with us</CardTitle>
              <CardDescription>Be in-touch with us, share your thoughts and idea.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="fullname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email address" {...field} />
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
                          <Input placeholder="Enter your mobile number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          placeholder="Write your message"
                          className="resize-y"
                          {...field}
                        />

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex gap-2">
                    <Button
                      type="submit"
                      className={`${isSubmitting ? 'opacity-50' : 'opacity-100'}`}
                      disabled={isSubmitting}>
                      {isSubmitting ? 'Please wait' : 'Submit'}
                    </Button>
                    <Button variant={"outline"} onClick={() => form.reset()} type="reset">Reset</Button>
                  </div>
                </form>
              </Form>
            </CardContent>

          </Card>
        </div>
      </section>
    </main>
  );
}
