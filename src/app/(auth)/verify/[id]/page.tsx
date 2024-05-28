'use client'

import { useParams } from 'next/navigation'
import React from 'react'


const page = () => {
    const params = useParams()
    return (
        <main className='min-h-screen flex justify-center items-center'>
            Hello {params.id}
        </main>
    )
}

export default page
