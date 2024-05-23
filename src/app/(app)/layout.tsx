"use client"
import { useEffect, useState } from "react";
import "../globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }
    return (
      
            <>
                <Navbar />
                {children}
                <Toaster/>
            </>
    
    );
}
