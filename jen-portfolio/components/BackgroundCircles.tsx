import React from 'react';
import {motion} from 'framer-motion';

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
      transition={{duration: 2.5}}
      className='relative flex justify-center items-center'
    >
      <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
      <div className='rounded-full border border-[#333333] h-[300px] w-[300px] absolute mt-52'/>
      <div className='rounded-full border border-[#333333] h-[500px] w-[500px] absolute mt-52'/>
      <div className='absolute border border-[#FBC101] rounded-full h-[650px] w-[650px] opacity-20 mt-52 animate-pulse'/>
      <div className='absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52'/>
    </motion.div>
  )
};

export default BackgroundCircles;