'use client'
import { User } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = usePathname()
  const { data: session } = useSession()
  const user: User = session?.user as User
  const [active, setActive] = useState(location)
  const router = useRouter()
  const pathname = usePathname()


  useEffect(() => {
    setActive(location)
    // console.log(user)
  }, [location])


  return (
    <main className="flex z-10 items-center w-full h-20 px-4 text-zinc-900 bg-zinc-100 bg-opacity-50 backdrop-blur-md fixed nav">
      <div className="min-w-full md:container flex justify-between items-center">
        <div>

          <h1 className="text-xl md:text-2xl font-signature ml-2">
            <Link
              className="font-bold link-underline link-underline-black"
              href={"/"}
            >
              VenueWorld
            </Link>
          </h1>
        </div>

        <div className="hidden md:flex font-semibold">
          <Link href={"/"} className={`nav-links px-4 cursor-pointer capitalize hover:scale-105  duration-200 link-underline ${pathname.endsWith("/") ? ("text-zinc-900") : ("text-gray-500 hover:text-zinc-900")}`}>
            Home
          </Link>
         

                <>
                  <Link
                    href={"/explore"}
                    className={`nav-links px-4 cursor-pointer capitalize hover:scale-105  duration-200 link-underline ${pathname.startsWith('/explore') ? ("text-zinc-900") : ("text-gray-500 hover:text-zinc-900")}`}>
                    explore
                  </Link>

                  <Link
                    href={`/bookings/${user?._id}`}
                    className={`nav-links px-4 cursor-pointer capitalize hover:scale-105  duration-200 link-underline ${pathname.startsWith("/bookings") ? ("text-zinc-900") : ("text-gray-500 hover:text-zinc-900")}`}>bookings</Link>

                  <Link
                    href={`/verify/${user?._id}`}
                    className={`nav-links px-4 cursor-pointer capitalize hover:scale-105  duration-200 link-underline text-gray-500 hover:text-zinc-900`}>List your venue</Link>
                </>
              

          <>

            {
              session ? (
                <Link
                  key={5}
                  className="nav-links px-4 cursor-pointer capitalize hover:scale-105  duration-200 link-underline text-gray-500 hover:text-zinc-900"
                  onClick={() => signOut()}
                  href={"/login"}>
                  Logout
                </Link>
              ) : (
                <Link
                  href={"/login"}
                  key={5}
                  className="nav-links px-4 cursor-pointer capitalize hover:scale-105  duration-200 link-underline text-gray-500 hover:text-zinc-900"
                >
                  Login
                </Link>
              )
            }
          </>
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (

          <div className="font-bold flex flex-col text-xl justify-center gap-4 items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-zinc-300 text-gray-500">

            <Link href={"/"} onClick={() => setNav(!nav)} className={`px-4 cursor-pointer capitalize ${pathname.startsWith("/") ? ("text-zinc-900") : ("text-gray-500 hover:text-zinc-900")}`}>Home</Link>

            <Link href={"/explore"} onClick={() => setNav(!nav)} className={`px-4 cursor-pointer capitalize   ${active == "/explore" ? ("text-zinc-900") : ("text-gray-500 hover:text-zinc-900")}`}>explore</Link>

            <Link href={`/bookings/${user?._id}`} onClick={() => setNav(!nav)} className={`px-4 cursor-pointer capitalize ${pathname.startsWith("/bookings") ? ("text-zinc-900") : ("text-gray-500 hover:text-zinc-900")}`}>bookings</Link>

            <Link href={`/verify/${user?._id}`} onClick={() => setNav(!nav)} className={`px-4 cursor-pointer capitalize  ${active == "/contact" ? ("text-zinc-900") : ("text-gray-500 hover:text-zinc-900")}`}>List Your Venue</Link>

            <>
              {
                session ? (

                  <span onClick={async () => { await signOut(); setNav(!nav) }} className="px-4 cursor-pointer capitalize text-gray-500 hover:text-zinc-900">Logout</span>
                ) : (

                  <Link href={"/login"} onClick={() => setNav(!nav)} className="px-4 cursor-pointer capitalize text-gray-500 hover:text-zinc-900">Login</Link>

                )
              }
            </>
          </div>
        )}
      </div>
    </main >
  );
};

export default Navbar;