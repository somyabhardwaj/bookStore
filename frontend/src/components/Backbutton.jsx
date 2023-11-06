import React from 'react'
import { MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';
const Backbutton = ({description = '/'}) => {
  return (
    <div className='border border-gray-300 w-8 rounded-full '>
          <Link to = {description}>
            <MdArrowBack className='text-3xl bg-gray-200 rounded-full text-blue-800 ' />
          </Link>
    </div>
  )
}

export default Backbutton
