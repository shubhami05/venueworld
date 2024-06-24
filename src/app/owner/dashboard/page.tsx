'use client'

import { useSession } from 'next-auth/react'
import React from 'react'

const page = () => {
  const {data:session} = useSession()
  return (
    <div>
      Hello Owner {session?.user._id}
    </div>
  )
}

export default page
