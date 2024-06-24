"use client"
import { useEffect, useState } from "react";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";
import Sidebar from "@/components/Sidebar";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isMounted, setIsMounted] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }
    return (

        <>
            <Sidebar />
            <main className="p-5 sm:ml-64">
                {children}
            </main>
            <Toaster />

        </>

    );
}
