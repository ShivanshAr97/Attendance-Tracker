import React from 'react'
import Logo from "../images/logo2.png"
import Navbar from './Navbar'
import { GrUpdate } from "react-icons/gr";

const Profile = () => {
  return (
    <>
    <Navbar/>
    <div className='flex flex-col my-8'>
        <img className='w-24 border-2 mx-auto rounded-full' src={Logo} alt="" />
        <p className='flex items-center justify-end text-xs mx-4 cursor-pointer'><GrUpdate/>&nbsp; Update Profile</p>
        <div className='m-4'>
        <p className='mx-auto'>Name: <span className='font-semibold'>User</span></p>
        <p className='mx-auto my-2'>Institute: <span className='font-semibold'>NSUT</span></p>
        <p className='mx-auto my-2'>Contact: <span className='font-semibold'>9876543211</span></p>
        </div>
    </div>
    </>
  )
}

export default Profile