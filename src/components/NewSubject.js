import React from 'react'
import { CgRedo } from "react-icons/cg";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Navbar from './Navbar';

const NewSubject = () => {
    return (
        <>
        <Navbar/>
            <div className='bg-gray-200 p-3 my-2'>
                <p className='font-bold text-xl'>Computer Science</p>
                <div className='flex justify-between'>
                    <div className='flex text-sm'>
                        <p>Total: <span>12</span></p>
                        <p className='pl-8'>Present: <span>9</span></p>
                    </div>
                    <div className='flex justify-center items-center cursor-pointer'>
                        <span className='px-0.5'><FaRegEdit/></span>
                        <span className='px-0.5'><CgRedo size='20'/></span>
                        <span className='px-0.5'><MdOutlineCancel/></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewSubject