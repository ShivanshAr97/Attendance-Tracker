import React from 'react'
import { AiOutlineUser, AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Logo from "../images/logo2.png"

const Navbar = () => {
  return (
    <>
    <div className='flex justify-between px-4 border-b shadow-md'>
    <Link to="/"><img className='w-16' src={Logo} alt="" /></Link>
    <div className='flex items-center'>
        <p className='px-1'>Date</p>
        <p className='px-1'><AiOutlineUser/></p>
        <p className='px-1'><AiOutlineInfoCircle/></p>
    </div>
    </div>
    </>
  )
}

export default Navbar