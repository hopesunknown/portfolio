import React from 'react';
import {SocialIcon} from 'react-social-icons';
import {motion} from 'framer-motion';

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-30 xl:items-center'>
      <motion.div 
        className='flex flex-row items-center'
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{duration: 1.5}}
      >
        <SocialIcon
          url='https://www.youtube.com/@jentchai1728' 
          target='_blank'
          fgColor='transparent' 
          bgColor='#FBC101'
          style={{margin: 5}} 
        /><br/>
        <SocialIcon 
          url='https://www.linkedin.com/in/jentchai/' 
          target='_blank'
          fgColor='transparent' 
          bgColor='#FBC101' 
          style={{margin: 5}} 
        />
        <SocialIcon 
          url='https://medium.com/@jentchai' 
          target='_blank'
          fgColor='transparent' 
          bgColor='#FBC101' 
          style={{margin: 5}} 
        />
      </motion.div>

      <motion.div 
        className='flex flex-row items-center text-black-300 cursor-pointer'
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
      >
        <SocialIcon 
          className='cursor-pointer'
          network='email'
          url='mailto:jentchai@gmail.com'
          fgColor='transparent' 
          bgColor='#FBC101' 
        />
        <p className='p-3 uppercase hidden md:inline-flex text-sm text-black-400'>Get in touch</p>
      </motion.div>
    </header>
  )
}

export default Header;