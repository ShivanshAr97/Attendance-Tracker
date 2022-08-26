import React, {useRef} from 'react'
import Logo from '../images/logo.png'
import { Link } from 'react-router-dom'


const Register = () => {

  return (
    <>
    <img src={Logo} width={150} className=" flex mx-auto my-4" alt="" />
    <h1 className='flex justify-center font-bold text-3xl my-6'>Register with Us</h1>
    <form action="">
        <input className='flex border px-4 py-2 rounded-lg m-2 w-4/5 justify-center' type="text" placeholder='Username' required />
        <input  className='flex border px-4 py-2 rounded-lg m-2 w-4/5 justify-center' type="email" placeholder='Email' required />
        <input className='flex border px-4 py-2 rounded-lg m-2 w-4/5 justify-center' type="password" placeholder='Password' required />
        <button type='submit' className="btn flex mx-auto my-4 rounded-lg border w-fit px-4 py-1 font-semibold cursor-pointer">Sign Up</button>
        <p className='flex justify-center text-sm'>Already have an account ? <Link to="/login"><span className='flex justify-end text-sm text-blue-600 cursor-pointer'>&nbsp; Log in</span></Link></p>
    </form>
    
    </>
  )
}

export default Register