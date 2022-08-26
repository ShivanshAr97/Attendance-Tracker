import React from 'react'
import Navbar from './Navbar'
import { IoIosStats } from "react-icons/io";
import { ImStatsDots } from "react-icons/im";
import { AiTwotoneCalendar, AiFillSetting } from "react-icons/ai";
import { PieChart } from 'react-minimal-pie-chart';
import { Link } from 'react-router-dom';

const Total = () => {
    return (
        <>
            <Navbar />
            <div className='flex items-center'>
                <div className='m-4'>
                    <p className='font-semibold my-2 text-sm'>Aim: <span className='text-base font-bold'>80%</span> </p>
                    <p className='font-semibold my-2 text-sm'>Overall Attendance:  <span className='text-base font-bold'>90%</span> </p>
                    <div className='flex my-4 cursor-pointer'>
                        <span className='px-1.5'><IoIosStats /></span>
                        <span className='px-1.5'><AiTwotoneCalendar /></span>
                        <span className='px-1.5'><ImStatsDots /></span>
                        <span className='px-1.5'><AiFillSetting /></span>
                    </div>
                </div>
                <div className='m-4 w-1/3'>
                    <PieChart 
                        data={[
                            { label: 'kejeg', value: 10, color: 'blue' },
                            { label: 'Two', value: 15, color: '#C13C37' },
                            { label: 'Three', value: 20, color: '#6A2135' },
                        ]}
                    />
                </div>
            </div>
            <Link to="/sub">
            <button className="btn rounded-lg border px-4 py-2 my-4 flex mx-auto cursor-pointer">Add Subject</button></Link>
        </>
    )
}

export default Total