import SignUpForm from '@/components/SignUpForm'
import React from 'react'

export default function SignUp() {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-3xl'>SignUp</h1>
      <SignUpForm />
    </div>
  )
}
