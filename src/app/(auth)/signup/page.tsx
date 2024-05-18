'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import React, { useEffect } from 'react'

const SignupPage = () => {
  const { data: session } = useSession()
  useEffect(()=>{
    console.log(session)
  },[session])
  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <div>
      Not signed in <br />
      <button onClick={() => signIn("google")}>Sign in</button>
    </div>
  )
}

export default SignupPage