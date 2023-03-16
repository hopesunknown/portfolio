import React from 'react';
import Image from 'next/image';
import {SocialIcon} from 'react-social-icons';
// import Link from 'next/link';
// import projectImage from './../public/favicon.ico';
import {motion} from 'framer-motion';
import {Project} from './../typings';
import {urlFor} from './../sanity';

type Props = {
  projects: Project[];
};

const Projects = ({projects}: Props) => {
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
      <h3 className='absolute top-24 uppercase tracking-[5px] text-gray-500 text-xl md:text-2xl'>
        Projects
      </h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-500/10 scrollbar-thumb-[#FBC101]/80'>
        {projects?.map((project, index) => (
          <div key={index} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-4 items-center justify-center p-20 md:p-44 h-screen'>
            {/* <motion.img 
              initial={{
                x: -300,
                opacity: 0
              }}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: 1.5}}
              viewport={{once: true}}
              src={urlFor(project?.image).url()} 
              alt='project screenshot image' 
              className='w-60 h-50 xl:w-[450px] xl:h-[300px] object-cover object-center ml-8'
            /> */}
            <img 
              src={urlFor(project?.image).url()}
              alt='project screenshot image'
              // className='w-60 h-50 xl:w-[450px] xl:h-[300px] object-cover object-center ml-8'
              width={350}
              height={200}
            />
          <div className='space-y-6 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-md md:text-4xl font-semibold text-center'>
              <span className='underline decoration-[#FBC101]/50'>Project {index + 1} of {projects.length}</span><br/>
                {project?.title}
              </h4>
              <div className='flex items-center space-x-2 justify-center'>
                {project?.technologies.map((technology) => (
                  <img 
                    key={technology._id} 
                    src={urlFor(technology.image).url()} 
                    alt='technology icon' 
                    className='h-5 w-5 md:h-10 md:w-10'
                  />
                ))}
              </div><br/>
              <span>{project?.summary}</span>
              <center>
                <SocialIcon
                  key={project?._id}
                  url={project?.linkToBuild}
                  network='youtube' 
                  target='_blank'
                  fgColor='transparent' 
                  bgColor='#FBC101'
                  style={{marginLeft: 5, marginRight: 5}}
                  className='hoverSocialBtn' 
                />
                <SocialIcon
                  key={project?._id}
                  url={project?.linkToBuild2}
                  network='github' 
                  target='_blank'
                  fgColor='transparent' 
                  bgColor='#FBC101'
                  style={{marginLeft: 5, marginRight: 5}}
                  className='hoverSocialBtn' 
                />
              </center>
            </div>
          </div>
        ))}
        </div>
      <div className='absolute bg-[#f7da7b] border border-[#f7da7b] rounded-full h-[500px] w-[500px] opacity-10 mt-8 z-0'/>
      {/* <div className='w-full absolute top-[30%] bg-[#FBC101]/10 left-0 h-[500px]' rounded-full/> */}

</motion.div>
  )
}

export default Projects;