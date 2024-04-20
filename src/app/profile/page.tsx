"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const Profile = () => {
  const [name,setName]=useState('')
  const router=useRouter();
  useEffect(()=>{
    const fetchdata=async()=>{
      const resp=await axios.get("/api/users/profile");
      setName(resp.data.username);
    }
    fetchdata()
   },[])

   const logoutUser=async()=>{
    try {
      const response=await axios.get("/api/users/logout");
      toast.success(response.data.message);
      router.push("/login")
    } catch (error:any) {
      toast.error(error.message)
    }
   }
  return (
    <div className='min-h-screen flex flex-col justify-center items-center  '>
      <h1 className='text-2xl bold'>Hello {name}</h1>
       <button className='bg-red-600 p-1 m-2 px-4 hover:bg-red-900'
        onClick={logoutUser}
       >Logout</button>
    </div>
  )
}

export default Profile
