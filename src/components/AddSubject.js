import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const AddSubject = () => {
    return (
        <>
        <Navbar/>
            <div>
                <h1 className='font-bold text-2xl m-4'>Add Subject</h1>
                <div>
                    <input className=' border rounded-lg mx-2 my-1 px-2 py-1 ' type="text" placeholder='Subject Name' />
                    <input className=' border rounded-lg mx-2 my-1 px-2 py-1 ' type="number" placeholder='Total classes' />
                    <input className=' border rounded-lg mx-2 my-1 px-2 py-1 ' type="number" placeholder='Present initially' />
                </div>

                <div className='flex justify-center my-4'>
                    <Link to="/sub">
                        <button className="btn m-2 border rounded-lg px-4 py-1.5">Cancel</button>
                    </Link>
                    <Link to="/newsub">
                        <button className="btn m-2 bg-green-600 text-white border rounded-lg px-4 py-1.5">Add</button>
                    </Link>

                </div>
            </div>

        </>
    )
}

export default AddSubject