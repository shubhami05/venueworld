'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
      setIsMounted(true);
  }, []);

  if (!isMounted) {
      return null;
  }
  return (
    <main className="min-h-screen flex justify-center items-center">
      Home
    </main>
  );
}
