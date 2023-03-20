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
        className='flex flex-col space-y-3 md:space-y-8 relative h-screen text-center md:text-left md:flex-row max-w-7xl px-7 md:px-9 justify-center mx-auto items-center'
      >
        <h3 className='absolute top-24 uppercase tracking-[2px] md:tracking-[5px] text-gray-500 text-xl md:text-2xl'>About Me</h3><br/><br/><br/>
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
          className=' mb-0 flex-shrink-0 h-[90px] w-[90px] md:h-[250px] md:w-[250px] rounded-full object-cover md:rounded-lg md:mt-11 xl:w-[500px] xl:h-[600px]'
        />
        <div className='space-y-1 md:space-y-10 md:px-10'>
          {/* <p className='text-base'>{pageInfo?.backgroundInformation}</p> */}
          <div className='text-base'>
          I am a Frontend Developer with experience in JavaScript, React, NextJS, Typescript, and Ruby on Rails, and have a professional background in psychology, medical research, and mental health counseling. My expertise lies in Frontend Development and UX/UI Design.
          </div>
          <div className='text-base'>
          My ultimate goal is to create websites that are user-friendly, accessible, lightweight, and responsive. To achieve this, I believe in employing a pragmatic, personal, and creative approach to storytelling that incorporates intelligent ideas and innovative technology. I am convinced that this approach will captivate users and provide a great digital experience.
          </div>
        </div>
      </motion.div>
    </>
  )
};

export default About;