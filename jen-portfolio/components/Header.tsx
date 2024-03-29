import React from 'react';
import Link from 'next/link';
import {SocialIcon} from 'react-social-icons';
import {motion} from 'framer-motion';
import {Social} from './../typings';

type Props = {
  socials: Social[];
}

function Header({socials}: Props) {
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
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url} 
            target='_blank'
            fgColor='transparent' 
            bgColor='#FBC101'
            style={{margin: 5}}
            className='hoverSocialBtn' 
          />
        ))}
      </motion.div>
      <motion.div 
        className='flex flex-row items-center text-black-300 cursor-pointer mt-1 md:mt-0'
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
          className='hoverSocialBtn'
          network='email'
          url='#contact'
          fgColor='transparent' 
          bgColor='#FBC101' 
        />
        <Link href='#contact'>
          <p className='p-3 uppercase hidden md:inline-flex text-sm text-black-400'>Contact Me</p>
        </Link>
      </motion.div>
    </header>
  )
};

export default Header;