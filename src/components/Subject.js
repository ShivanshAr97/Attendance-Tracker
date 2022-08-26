import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Subject = () => {
  return (
    <>
    <Navbar/>
      <div className=''>
        <h1 className='font-bold text-2xl m-4'>Hey there, User</h1>
        <h3 className='mx-4 my-2'>Enter the subjects you want to track attendance for by clicking "Add Subject":</h3>
        <div className=''>
          <Link to="/addsub">
          <button className="bottom-0 fixed btn my-4 border rounded-lg px-4 py-1 right-1/3 font-semibold">Add Subject</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Subject