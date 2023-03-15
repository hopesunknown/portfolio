import React from 'react';
import Image from 'next/image';
import projectImage from './../public/favicon.ico';
import {motion} from 'framer-motion';

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];

  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[5px] text-gray-500 text-2xl'>
        Projects
      </h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-500/10 scrollbar-thumb-[#FBC101]/80'>
        {projects.map((project, index) => (
          <motion.div key={index} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img 
              initial={{
                x: -300,
                opacity: 0
              }}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: 1.5}}
              viewport={{once: true}}
              src='./../public/favicon.ico' 
              alt='project screenshot image' 
              // width={50} 
              // height={50} 
            />
          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-4xl font-semibold text-center'>
              <span className='underline decoration-[#FBC101]/50'>project title {index + 1} of {projects.length}</span>{" "}
              description title
              </h4>
              <p>project summary</p>
            </div>
          </motion.div>
        ))}
        </div>
      
      <div className='w-full absolute top-[30%] bg-[#FBC101]/10 left-0 h-[500px]'></div>

</div>
  )
}

export default Projects;