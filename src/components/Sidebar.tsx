'use client'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const Sidebar = () => {
    const location = usePathname();
    const { data: session } = useSession();

    const sidebar = document.getElementById('default-sidebar');

    useEffect(() => {
        handleSidebar();
    }, [location])


    const handleSidebar = () => {
        sidebar?.classList.toggle('translate-x-0');
        sidebar?.classList.toggle('-translate-x-full');
    }

    return (
        <div>
            <button onClick={handleSidebar} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-slate-500 rounded-lg sm:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="default-sidebar" className="fixed top-0 left-0 z-40 sm:w-64 w-full h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">

                <div className="h-full px-3 py-5 overflow-y-auto bg-slate-50 dark:bg-slate-800">
                    <div className='flex justify-between'>
                        <Link href={'/owner/dashboard'} >
                            <h1 className='font-bold text-2xl px-2 text-slate-800'>
                                VenueWorld
                            </h1>
                        </Link>
                        <button className='sm:hidden' title='close' onClick={handleSidebar}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>

                        </button>
                    </div>
                    <hr className='border-slate-300 mt-2 mb-5' />
                    <ul className="flex flex-col gap-2 font-medium cursor-pointer">
                        <Link href={'/owner/dashboard'}>
                            <li className={`flex items-center p-2 text-slate-900 rounded-lg dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 group ${location.startsWith("owner/dashboard") ? ('bg-slate-700') : ('')}`}>
                                <svg className="w-5 h-5 text-slate-500 transition duration-75 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className="ms-3">Dashboard</span>
                            </li>
                        </Link>
                        <Link href={`/owner/myvenues/${session?.user._id}`}>
                            <li className={`flex items-center p-2 text-slate-900 rounded-lg dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 group ${location.startsWith("owner/myvenues")}`}>
                                <svg className="flex-shrink-0 w-5 h-5 text-slate-500 transition duration-75 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Your Venues</span>
                            </li>
                        </Link>
                        <Link href={`/owner/bookings/${session?.user._id}`}>
                            <li className="flex items-center p-2 text-slate-900 rounded-lg dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 group">
                                <svg className="flex-shrink-0 w-5 h-5 text-slate-500 transition duration-75 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm0-4H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm10 4h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 0 2Zm0-4h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 0 2Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Bookings</span>
                                <span className="flex items-center justify-center px-2 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">New</span>
                            </li>
                        </Link>
                        <Link href={`/owner/reviews/${session?.user._id}`}>
                            <li className="flex items-center p-2 text-slate-900 rounded-lg dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 group">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 w-5 h-5 text-slate-500 transition duration-75 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white">
                                    <path fillRule="evenodd" d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 0 0 1.28.53l4.184-4.183a.39.39 0 0 1 .266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0 0 12 2.25ZM8.25 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm2.625 1.125a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Reviews</span>
                                <span className="flex items-center justify-center px-2 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">New</span>
                            </li>
                        </Link>
                        <hr className='border-slate-300 my-2' />

                        <li className="flex items-center p-2 text-slate-900 rounded-lg dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 group">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 w-5 h-5 text-slate-500 transition duration-75 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white">
                                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                            </svg>
                            <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
                        </li>
                        <li onClick={()=>signOut()} className="flex items-center p-2 text-slate-900 rounded-lg dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 group">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 w-5 h-5 text-slate-500 transition duration-75 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white">
                                <path fillRule="evenodd" d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z" clipRule="evenodd" />
                            </svg>
                            <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
                        </li>

                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar;
