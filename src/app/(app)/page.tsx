'use client'
import Image from "next/image";
import hero_image from '../../images/hero_image.svg'
import { WobbleCard } from "@/components/ui/wobble-cards";

export default function Home() {
  const handleSubmit = () => {
    alert("Submitted")
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


      <section className="py-20 hero-section min-h-screen bg-gradient-to-br from-slate-50 to-slate-300  w-full flex flex-col justify-center ">
        <h1 className="text-5xl text-slate-800 mb-20 font-bold font-sans container">We provide</h1>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[200px] lg:min-h-[300px]"
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
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[200px] lg:min-h-[600px] xl:min-h-[300px]">
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

      <section className="hero-section min-h-screen w-full flex flex-col justify-center items-center">

        <h1 className="text-5xl text-slate-800 mb-20 font-bold font-sans container">About Us</h1>
        <div>
          <div className="py-16 bg-slate-50 overflow-hidden">
            <div className="container m-auto px-6 space-y-8 text-slate-500 md:px-12">
              <div>
                <span className="text-slate-600 text-lg font-semibold">Venue World</span>
                <h2 className="mt-4 text-2xl text-slate-800 font-bold md:text-4xl">A technology to be helpful for both Owner and finder of venue.</h2>
              </div>
              <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
                <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                  <div className="relative p-8 space-y-4 flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                    </svg>

                    <div className="space-y-2">
                      <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600 text-center">8000+</h5>
                      <p className="text-sm text-gray-600">different venues are listed in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non accusamus temporibus.</p>
                    </div>

                  </div>
                </div>
               
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
