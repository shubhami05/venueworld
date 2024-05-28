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
    <main className="flex items-center w-full h-20 px-4 text-zinc-100 bg-slate-900 fixed nav">
      <div className="min-w-full md:container flex justify-between items-center">
        <div>
          {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
          <h1 className="text-xl md:text-2xl font-signature ml-2">
            <Link
              className="font-bold link-underline link-underline-black"
              href={user?.isAdmin ? ("/dashboard") : ("/")}
            >
              VenueWorld
            </Link>
          </h1>
        </div>

        <div className="hidden md:flex font-semibold">
          <Link href={"/"} className={`nav-links px-4 cursor-pointer capitalize hover:scale-105  duration-200 link-underline ${active == "/" ? ("text-white") : ("text-gray-500 hover:text-white")}`}>
            Home
          </Link>
          {
            (user?.isAdmin || user?.isOwner) ?
              (
                <>
                  <Link href={user?.isAdmin ? ("/admin/dashboard") : ("/owner/dashboard")} className={`nav-links px-4 cursor-pointer capitalize hover:scale-105  duration-200 link-underline ${active == "/dashboard" ? ("text-white") : ("text-gray-500 hover:text-white")}`}>
                    Dashboard
                  </Link>

                  {
                    user?.isOwner ? (
                      <>
                        <Link href={`/owner/myvenues/${user?._id}`} className={`nav-links px-4 cursor-pointer capitalize hover:scale-105  duration-200 link-underline ${active == `/owner/myvenues/${user?._id}` ? ("text-white") : ("text-gray-500 hover:text-white")}`}>
                          My Venues
                        </Link>
                        <Link href={`/owner/bookings/${user?._id}`} className={`nav-links px-4 cursor-pointer capitalize hover:scale-105  duration-200 link-underline ${active == `/owner/bookings/${user?._id}` ? ("text-white") : ("text-gray-500 hover:text-white")}`}>
                          Bookings
                        </Link>
                        <Link href={`/owner/reviews/${user?._id}`} className={`nav-links px-4 cursor-pointer capitalize hover:scale-105  duration-200 link-underline ${active == `/owner/reviews/${user?._id}` ? ("text-white") : ("text-gray-500 hover:text-white")}`}>
                          Reviews
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link href={`/admin/user-list`} className={`nav-links px-4 cursor-pointer capitalize hover:scale-105  duration-200 link-underline ${active == `/admin/user-list` ? ("text-white") : ("text-gray-500 hover:text-white")}`}>
                          User List
                        </Link>
                        <Link href={`/admin/venues`} className={`nav-links px-4 cursor-pointer capitalize hover:scale-105  duration-200 link-underline ${active == `/admin/venues` ? ("text-white") : ("text-gray-500 hover:text-white")}`}>
                          Venues
                        </Link>
                      </>
                    )
                  }

                </>

              ) : (

                <>
                  <Link href={"/explore"} className={`nav-links px-4 cursor-pointer capitalize hover:scale-105  duration-200 link-underline ${pathname.startsWith('/explore') ? ("text-white") : ("text-gray-500 hover:text-white")}`}>
                    explore
                  </Link>

                  <Link href={`/bookings/${user?._id}`} className={`nav-links px-4 cursor-pointer capitalize hover:scale-105  duration-200 link-underline ${pathname.startsWith("/bookings") ? ("text-white") : ("text-gray-500 hover:text-white")}`}>bookings</Link>

                  <Link href={`/verify/${user?._id}`} className={`nav-links px-4 cursor-pointer capitalize hover:scale-105  duration-200 link-underline text-gray-500 hover:text-white`}>List your venue</Link>
                </>
              )
          }

          <>

            {
              session ? (
                <Link
                  key={5}
                  className="nav-links px-4 cursor-pointer capitalize hover:scale-105  duration-200 link-underline text-gray-500 hover:text-white"
                  onClick={() => signOut()}
                  href={"/login"}>
                  Logout
                </Link>
              ) : (
                <Link
                  href={"/login"}
                  key={5}
                  className="nav-links px-4 cursor-pointer capitalize hover:scale-105  duration-200 link-underline text-gray-500 hover:text-white"
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
          <div className="font-bold flex flex-col text-xl justify-center gap-4 items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">



            <Link href={"/"} onClick={() => setNav(!nav)} className={`px-4 cursor-pointer capitalize ${active == "/" ? ("text-white") : ("text-gray-500 hover:text-white")}`}>Home</Link>

            <Link href={"/explore"} onClick={() => setNav(!nav)} className={`px-4 cursor-pointer capitalize   ${active == "/explore" ? ("text-white") : ("text-gray-500 hover:text-white")}`}>explore</Link>

            <Link href={"/bookings"} onClick={() => setNav(!nav)} className={`px-4 cursor-pointer capitalize  ${active == "/bookings" ? ("text-white") : ("text-gray-500 hover:text-white")}`}>bookings</Link>

            <Link href={"/contact"} onClick={() => setNav(!nav)} className={`px-4 cursor-pointer capitalize  ${active == "/contact" ? ("text-white") : ("text-gray-500 hover:text-white")}`}>contact</Link>

            <>
              {
                session ? (

                  <span onClick={async () => { await signOut(); setNav(!nav) }} className="px-4 cursor-pointer capitalize text-gray-500 hover:text-white">Logout</span>
                ) : (

                  <Link href={"/login"} onClick={() => setNav(!nav)} className="px-4 cursor-pointer capitalize text-gray-500 hover:text-white">Login</Link>

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