import React from 'react';
import {motion} from 'framer-motion';
import blobanimation from './../public/blobanimation.svg';

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%']
      }}
      transition={{duration: 3.5}}
      className='relative flex justify-center items-center mt-8'
    >
      {/* <div className='absolute bg-[#f7da7b] border border-[#f7da7b] rounded-full h-[500px] w-[500px] opacity-10 mt-8 z-0'/>
      <div className='absolute border border-[#f7da7b] rounded-full h-[50px] w-[50px] opacity-10 m-55 animate-pulse z-0'/>
      <div className='absolute border border-[#f7da7b] rounded-full h-[350px] w-[350px] opacity-10 m-55 animate-pulse z-0'/> */}

    </motion.div>

//  <div className="w-full bg-no-repeat absolute bg-cover bg-center" style={{top: "-10vh", height: "120vh", backgroundSize: "200vh 121vh", backgroundImage: `url(${blobanimation})`}}></div>
  )
};

export default BackgroundCircles;