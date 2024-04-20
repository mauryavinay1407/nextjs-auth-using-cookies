"use client";

import React, { useState } from 'react'
import Link from 'next/link'
import {useRouter} from "next/navigation";
import axios from "axios"
import toast from 'react-hot-toast';
import {Loading} from '../components/loading'

const SignupPage = () => {
  const router=useRouter();
  const [loader,setLoader]=useState(false)
   const [user,setUser]=useState({
    email:'',
    password:'',
    username:''
   })
   
   const onSignup=async()=>{
     try {
       setLoader(true);
       if(!(user.email && user.password && user.username))
       {
        return toast.error("Empty fields are not allowed!");
       }
     await axios.post("/api/users/signup",user);
     toast.success('Account Created Successfully!')
     router.push("/login") 
    } catch (error:any) {
      toast.error('Sign up failed!')
    }
    finally{
      setLoader(false)
    }
   }
   if(loader)
   return <Loading/>


  return (
    <div className='min-h-screen flex flex-col justify-center items-center '>
    <div className='bg-white p-10 text-black flex flex-col justify-center items-center rounded-xl shadow-xl' >  
      <h1 className='font-bold pb-2 text-emerald-400 text-2xl'> Signup</h1> <hr />
       <label htmlFor="username">username</label>
       <input
       className='border-2 border-black p-1'
       id="username" 
       type="text" 
       value={user.username}
       onChange={(e)=>setUser({...user,username:e.target.value})}
       placeholder='username'
       />
       <label htmlFor="password">password</label>
       <input
       className='border-2 border-black p-1'
       id="password" 
       type="text" 
       value={user.password}
       onChange={(e)=>setUser({...user,password:e.target.value})}
       placeholder='password'
       />
       <label htmlFor="email">email</label>
       <input
       className='border-2 border-black p-1'
       id="email" 
       type="text" 
       value={user.email}
       onChange={(e)=>setUser({...user,email:e.target.value})}
       placeholder='email'
       />
       <button
       onClick={onSignup} 
       className='p-2 mt-3 text-black border border-gray-600 bg-gray-200 p-y-2 rounded-lg mb-4
          hover:bg-black hover:text-white transition'>
            Signup
       </button>
       <Link
       className='text-blue-800'
       href="/login">Already have an account? <span className='underline'>Try Login</span></Link>
    </div>  
  </div>
  )
}

export default SignupPage