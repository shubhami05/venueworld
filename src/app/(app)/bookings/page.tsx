'use client'


import { User } from 'next-auth'
import { useSession } from 'next-auth/react'
import React from 'react'

const page = () => {
  const {data:session} = useSession()
  const user: User = session?.user as User

  return (
    <div className='min-h-screen flex justify-center items-center'>
      Bookings {user._id}
    </div>
  )
}

export default page
