"use client";

import React, { useState } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation'
import axios from "axios"
import { Loading } from '../components/loading';

const LoginPage = () => {
  const router=useRouter();
  const [user,setUser]=useState({
    email:'',
    password:''
   })
   const [loader,setLoader]=useState(false);


const onLogin=async()=>{
  try {
    setLoader(true);
    if(!(user.email && user.password))
    return toast.error("Please enter email and password correctly");

    const resp=await axios.post("/api/users/login",user);
    console.log(resp.data);
    toast.success("Successfully login")
    router.push("/profile")
  } catch (error:any) {
    toast.error("Login Failed!!!")
  }
  finally{
    setLoader(false)
  }
}
if(loader)
return <Loading></Loading>

  return (
    <div className='min-h-screen flex flex-col justify-center items-center '>
      <div className='bg-white p-10 text-black flex flex-col justify-center items-center rounded-xl shadow-xl' >  
        <h1 className='font-bold pb-2 text-emerald-400 text-2xl'>Login</h1> <hr />
         <label htmlFor="email">email</label>
         <input
         className='border-2 border-black p-1'
         id="email" 
         type="text" 
         value={user.email}
         onChange={(e)=>setUser({...user,email:e.target.value})}
         placeholder='email'
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

         <button
         onClick={onLogin} 
         className='p-2 mt-3 text-black border border-gray-600 bg-gray-200 p-y-2 rounded-lg mb-4
            hover:bg-black hover:text-white transition'>
              Login
         </button>
         <Link
         className='text-blue-800'
         href="/signup">Don't have an account yet? <span className='underline'>Sign up</span> </Link>
      </div>  
    </div>
  )
}

export default LoginPage