'use client'
import { useParams } from 'next/navigation'
import React from 'react'

const VerifyPage = () => {
  const params = useParams()
  return (
    <div>
      This is Verify page for {params.id}
    </div>
  )
}

export default VerifyPage
