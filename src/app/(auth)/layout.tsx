"use client"
import { useEffect, useState } from "react";
import "../globals.css";
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
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
