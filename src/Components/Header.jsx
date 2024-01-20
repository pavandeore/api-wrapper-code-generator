import React from 'react'
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='my-10 flex justify-between items-center'>
      <div>
        <h1 className='text-2xl mt-4'>API wrapper code creator</h1>
        <p className='text-sm text-gray-500'>Create a wrapper for any API in seconds | uses google gemini-pro AI model</p>
      </div>
        <div className='flex gap-x-4'>
          <a href='https://www.linkedin.com/in/pawan-deore-0bb60b1a4/' target='_blank' rel="noreferrer">
            <FaLinkedinIn className='text-3xl text-blue-500' />
          </a>
          <a href='http://github.com/pavandeore' target='_blank' rel="noreferrer">
            <FaGithub className='text-3xl text-blue-500' />
          </a>
          {/* https://www.linkedin.com/in/pawan-deore-0bb60b1a4/ */}
        </div>
    </div>
  )
}

export default Header