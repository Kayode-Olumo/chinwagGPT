'use client'
import React from 'react';
import { signIn } from "next-auth/react";
import Image from "next/image";
import ChatLogo from "../assets/OpenAI.svg"


function Login() {
  return (
    <div className='bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center'>
        <Image src={ChatLogo} alt="logo" width={300} height={300}/>
        <button onClick={() => signIn('google')} className='text-white font-bold text-2xl animate-pulse pt-5'>Sign in to ChinwagGPT</button>
    </div>
  )
}

export default Login