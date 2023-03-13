import React from 'react';
import Image from 'next/image';
import profilePic from './../public/image0.jpeg';
import {useTypewriter} from 'react-simple-typewriter';
import {motion} from 'framer-motion';
import BackgroundCircles from './BackgroundCircles';

type Props = {}

const Hero = (props: Props) => {
  // const [text, helper] = useTypewriter({ 
  //   words: ['hello', 'this', 'is', 'cool'],
  //   loop: true,
  //   delaySpeed: 2000
  // })
  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 3}}
      className='h-screen flex flex-col space-y-8 items-center justify-center text-center overlow-hidden'
    >
      <BackgroundCircles />
      <Image
        src={profilePic}
        height={200}
        width={200}
        className='roundedImg'
        placeholder='blur'
        alt='profile image of the developer' 
      />
      <div>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>Hello, my name is Jen Tchai</h1>
        <h2 className='text-xl text-gray-500 pb-2 tracking-[2px]'>I am a Frontend Developer, based in Washington, DC.</h2>
        {/* <div>{text}</div> */}
      </div>
    </motion.div>
  )
}

export default Hero;