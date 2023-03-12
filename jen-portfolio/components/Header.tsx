import React from 'react';
import {SocialIcon} from 'react-social-icons';

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-30 xl:items-center'>
      <div className='flex flex-row items-center'>
        {/* Social media icons */}
        <SocialIcon 
          url='https://www.youtube.com/@jentchai1728' 
          fgColor='black' 
          bgColor='#FBC101' 
        />
        <SocialIcon 
          url='https://www.youtube.com/@jentchai1728' 
          fgColor='black' 
          bgColor='#FBC101' 
        />
        <SocialIcon 
          url='https://www.youtube.com/@jentchai1728' 
          fgColor='black' 
          bgColor='#FBC101' 
        />
      </div>

      <div className='flex flex-row items-center text-black-300 cursor-pointer'>
        <SocialIcon 
          className='cursor-pointer'
          network='email'
          fgColor='black' 
          bgColor='#FBC101' 
        />
        <p className='uppercase hidden md:inline-flex text-sm text-black-400'>Get in touch</p>
      </div>
    </header>
  )
}

export default Header;