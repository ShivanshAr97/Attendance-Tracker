import React from 'react'
import Navbar from './Navbar'

const About = () => {
  return (
    <>
    <Navbar/>
    <div className='m-4'>
    <h1 className='font-bold'>About</h1>
    <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, doloribus mollitia natus dolorem illo sunt nam perferendis unde expedita necessitatibus!</p>
    <h1 className='font-bold mt-6'>About</h1>
    <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, doloribus mollitia natus dolorem illo sunt nam perferendis unde expedita necessitatibus!</p>
    <h1 className='font-bold mt-6'>About</h1>
    <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, doloribus mollitia natus dolorem illo sunt nam perferendis unde expedita necessitatibus!</p>
    <div className='flex justify-center'>
        <button className="btn border rounded-lg px-4 py-1.5 mx-2 my-8 text-white bg-green-600 font-semibold ">Suggestions</button>
        <button className="btn border rounded-lg px-4 py-1.5 mx-2 my-8 text-white bg-green-600 font-semibold ">Report Bug</button>
    </div>
    </div>
    </>
  )
}

export default About