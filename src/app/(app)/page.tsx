'use client'
import Image from "next/image";
import hero_image from '../../images/hero_image.svg'

export default function Home() {
  const handleSubmit = ()=>{
    alert("Submitted")
  }

  return (
    <main className="min-h-screen flex-col justify-center items-center">


      {/* Hero section */}
        <section className="hero-section h-[50rem] w-full  dark:bg-grid-white/[0.2] bg-grid-black/[0.05] relative flex items-center justify-center min-h-screen  2d232e">

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
                  className="shadow-xl h-12 md:h-14 px-6 md:px-8 rounded-r-md bg-blue-600 text-white hover:bg-blue-800 transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:flex-none"
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
              className="max-w-full h-auto hero_image object-cover aspect-auto transform animate-in"
              height="900"
              style={{animation: 'loop 5s -25s ease-in-out infinite',}}
              src={hero_image}
              width="900"
            />
          </div>
        </div>
      </section>


      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores enim, vero, quae consequuntur in quibusdam tenetur laudantium a doloremque optio aliquid aliquam omnis voluptatum obcaecati illum iusto molestias nisi, adipisci laborum tempore molestiae quia qui. Error aliquam, vitae totam, officia reiciendis rerum maxime in quo ex cumque iure aliquid consequuntur exercitationem repellat perspiciatis iusto consequatur consectetur quasi repudiandae excepturi sequi pariatur explicabo facere! Dolorem sed nemo nobis dolorum autem esse maiores sunt totam culpa iusto ab quibusdam eveniet quod eos quos laboriosam blanditiis ea aut consequatur soluta, minus qui perspiciatis veniam. Aliquam eum consequuntur quisquam, fugit iusto sequi quibusdam nam!
      </div>
    </main>
  );
}
