'use client'
import { User } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = usePathname()
  const { data: session } = useSession()
  const user: User = session?.user as User
  const [active, setActive] = useState(location)


  useEffect(() => {
    setActive(location)
    // console.log(user)
  }, [location])


  return (
    <main className="flex items-center w-full h-20 px-4 text-white bg-black fixed nav">
      <div className="container flex justify-between items-center">
        <div>
          {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
          <h1 className="text-xl md:text-2xl font-signature ml-2">
            <Link
              className="link-underline link-underline-black"
              href="/"
            >
              VenueWorld
            </Link>
          </h1>
        </div>

        <div className="hidden md:flex">

          <Link href={"/"} className={`nav-links px-4 cursor-pointer capitalize font-medium hover:scale-105  duration-200 link-underline ${active == "/" ? ("text-white") : ("text-gray-500 hover:text-white")}`}>
            Home
          </Link>

          <Link href={"/explore"} className={`nav-links px-4 cursor-pointer capitalize font-medium hover:scale-105  duration-200 link-underline ${active == "/explore" ? ("text-white") : ("text-gray-500 hover:text-white")}`}>
            explore
          </Link>


          <Link href={"/bookings"} className={`nav-links px-4 cursor-pointer capitalize font-medium hover:scale-105  duration-200 link-underline ${active == "/bookings" ? ("text-white") : ("text-gray-500 hover:text-white")}`}>bookings</Link>


          <Link href={"/contact"} className={`nav-links px-4 cursor-pointer capitalize font-medium hover:scale-105  duration-200 link-underline ${active == "/contact" ? ("text-white") : ("text-gray-500 hover:text-white")}`}>contact</Link>


          {
            session ? (
              <Link
                key={5}
                className="nav-links px-4 cursor-pointer capitalize font-medium hover:scale-105  duration-200 link-underline text-gray-500 hover:text-white"
                onClick={() => signOut()}
                href={"/login"}>
                Logout
              </Link>
            ) : (
              <Link
                href={"/login"}
                key={5}
                className="nav-links px-4 cursor-pointer capitalize font-medium hover:scale-105  duration-200 link-underline text-gray-500 hover:text-white"
              >
                Login
              </Link>
            )
          }
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">



            <Link href={"/"} onClick={() => setNav(!nav)} className={`px-4 cursor-pointer capitalize py-6 text-4xl ${active == "/" ? ("text-white") : ("text-gray-500 hover:text-white")}`}>Home</Link>

            <Link href={"/explore"} onClick={() => setNav(!nav)} className={`px-4 cursor-pointer capitalize py-6 text-4xl ${active == "/explore" ? ("text-white") : ("text-gray-500 hover:text-white")}`}>explore</Link>

            <Link href={"/bookings"} onClick={() => setNav(!nav)} className={`px-4 cursor-pointer capitalize py-6 text-4xl ${active == "/bookings" ? ("text-white") : ("text-gray-500 hover:text-white")}`}>bookings</Link>

            <Link href={"/contact"} onClick={() => setNav(!nav)} className={`px-4 cursor-pointer capitalize py-6 text-4xl ${active == "/contact" ? ("text-white") : ("text-gray-500 hover:text-white")}`}>contact</Link>

            {
              session ? (

                <Link onClick={() => { signOut(); setNav(!nav) }} href={"/login"} className="px-4 cursor-pointer capitalize py-6 text-4xl text-gray-500 hover:text-white">Logout</Link>
              ) : (

                <Link href={"/login"} onClick={() => setNav(!nav)} className="px-4 cursor-pointer capitalize py-6 text-4xl text-gray-500 hover:text-white">Login</Link>

              )
            }

          </div>
        )}
      </div>
    </main >
  );
};

export default Navbar;