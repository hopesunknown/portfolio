import React from 'react';
import {motion} from 'framer-motion';
import {PageInfo} from './../typings';
import {urlFor} from './../sanity';

type Props = {
  pageInfo: PageInfo;
};

const About = ({pageInfo}: Props) => {
  return (
    <>
      <motion.div 
        initial={{
          x: -200,
          opacity: 0
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        transition={{duration: 1.5}}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
      >
        <h3 className='absolute top-24 uppercase tracking-[5px] text-gray-500 text-2xl'>About Me</h3>
        <motion.img 
          initial={{
            x: -200,
            opacity: 0
          }}
          whileInView={{
            x: 0,
            opacity: 1
          }}
          transition={{duration: 1.5}}
          src={urlFor(pageInfo?.profilePic).url()}
          alt='picture of the developer'
          className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />
        <div className='space-y-10 px-10 md:px-10'>
          <p className='text-base'>{pageInfo?.backgroundInformation}</p>
        </div>
      </motion.div>
    </>
  )
};

export default About;