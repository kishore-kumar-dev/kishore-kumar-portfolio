import React from 'react'
import { FaGithubSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaAws } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4'>
            <h3 className='text-2xl text-gray-200 font-semibold'>Kishore</h3>
            <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                <a href="https://github.com/kishore-kumar-dev"><FaGithubSquare /></a>
                <a href="https://www.linkedin.com/in/kishorekumars-/"><FaLinkedin /></a>
                {/* <a href="https://www.instagram.com/kishore_kumar_dev/"><Faa /></a> */}
                {/* <a href="#"><FaInstagram /></a> */}
            </div>

        </div>

        <p className='text-gray-400'>@2024 Kishore</p>
        
    </div>
  )
}

export default Footer