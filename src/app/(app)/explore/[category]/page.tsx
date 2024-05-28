'use client'

import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const params = useParams()
  return (
    <div className='min-h-screen flex justify-center items-center'>
      Hello this is venue page {params.category}
    </div>
  )
}

export default page
