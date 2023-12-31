"use client"



import { signUp } from "@/app/actions/users/SignUp"
import { useState } from "react"

export default function SignUpForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [ message, setMessage] = useState('')

    const handleSubmit = async () => {
        setMessage("Signing up...")
        const message = await signUp(email,password)
        setMessage(message)
    }
  return (
    <div className="flex flex-col gap-4 bg-gray-400 p-4">
        <input className="text-black" type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
        <input className="text-black" type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />

        <button onClick={handleSubmit}>
            Sign Up
        </button>

        <p>
            {message}
        </p>
      
    </div>
  )
}
