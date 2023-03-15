import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import profilePic from './../public/image0.jpeg';
// import {useTypewriter} from 'react-simple-typewriter';
import {urlFor} from './../sanity';
import {motion} from 'framer-motion';
import BackgroundCircles from './BackgroundCircles';
import {PageInfo} from './../typings';

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({pageInfo}: Props) => {
  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 3}}
      className='h-screen flex flex-col space-y-8 items-center justify-center text-center overlow-hidden'
    >
      <BackgroundCircles />
      <div className='flex flex-col z-50 items-center'>
      <img
        // src={profilePic}
        src={urlFor(pageInfo?.heroImage).url()}
        height={250}
        width={250}
        className='roundedImg'
        placeholder='blur'
        alt='profile image of the developer' 
      />
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>Hello, my name is {pageInfo?.name}.</h1>
        <h2 className='text-xl text-gray-500 pb-2 tracking-[2px]'>{pageInfo?.role}</h2>
        {/* <div>{text}</div> */}
      </div>
      <div className='pt-5'>
        <Link href='#about'>
          <button className='heroButton'>About Me</button>
        </Link>
        <Link href='#experience'>
          <button className='heroButton'>Experience</button>
        </Link>
        <Link href='#skills'>
          <button className='heroButton'>Skills</button>
        </Link>
        <Link href='#projects'>
          <button className='heroButton'>Projects</button>
        </Link>
        <Link href='#contact'>
          <button className='heroButton'>Contact Me</button>
        </Link>
      </div>
    </motion.div>
  )
}

export default Hero;