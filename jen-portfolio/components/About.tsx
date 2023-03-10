import React from 'react';
import {motion} from 'framer-motion';

type Props = {};

const About = (props: Props) => {
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
          src='./../public/image0.jpeg'
          className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />
        <div className='space-y-10 px-10 md:px-10'>
          {/* <h4 className='text-4xl font-semibold'></h4> */}
          <p className='text-base'>
          I am a Frontend Developer with experience in JavaScript, React, NextJS, Typescript, and Ruby on Rails, and have a professional background in psychology, medical research, and mental health counseling. My expertise lies in Frontend Development and UX/UI Design.
          </p>
          <p className='text-base'>
          My ultimate goal is to create websites that are user-friendly, accessible, lightweight, and responsive. To achieve this, I believe in employing a pragmatic, personal, and creative approach to storytelling that incorporates intelligent ideas and innovative technology. I am convinced that this approach will captivate users and provide a great digital experience.
          </p>
        </div>
      </motion.div>
    </>
  )
};

export default About;