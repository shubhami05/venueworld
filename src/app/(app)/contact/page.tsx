'use client'

import React, { useEffect, useState } from 'react'

const page = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
      setIsMounted(true);
  }, []);

  if (!isMounted) {
      return null;
  }
  return (
    <div className='min-h-screen flex justify-center items-center'>
      CONTACT
    </div>
  )
}

export default page
