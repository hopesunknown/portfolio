import React, {useState} from 'react';
import Image from 'next/image';
import {SocialIcon} from 'react-social-icons';
// import Link from 'next/link';
// import projectImage from './../public/favicon.ico';
import {motion} from 'framer-motion';
import {Project} from './../typings';
import {urlFor} from './../sanity';
import {ArrowLeftCircleIcon, ArrowRightCircleIcon} from '@heroicons/react/24/solid';

type Props = {
  projects: Project[];
};

const Projects = ({projects}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickLess = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const handleClickMore = () => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.2}}
      className='h-screen relative flex overflow-hidden flex-row text-left max-w-full justify-evenly mx-auto items-center z-0'
    > 
      <h3 className='absolute top-24 uppercase tracking-[2px] md:tracking-[5px] text-gray-500 text-xl md:text-2xl'>
        Projects
      </h3>
      <div className='flex flex-row items-center justify-center md:pl-10 z-50'>
        <button onClick={handleClickLess}>
          <ArrowLeftCircleIcon className='text-[#FBC101] h-8 w-8' />
        </button>
      </div>
      <div className='relative w-10/12 md:w-2/3 flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-500/10 scrollbar-thumb-[#FBC101]/80 mt-24 md:mt-0'>
        {projects?.slice(currentIndex, currentIndex + 1).map((project, index) => (
          <motion.div 
            key={index} 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.2}}
            className='w-11/12 md:w-3/4 flex-shrink-0 snap-center flex flex-col md:space-y-4 items-center justify-center mx-auto h-screen'
          >
            <img 
              src={urlFor(project?.image).url()}
              alt='project screenshot image'
              className='w-56 h-40 md:w-72 md:h-52 xl:w-96 xl:h-60 object-cover object-center'
            />
            <div className='space-y-1 md:space-y-6 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-md md:text-3xl font-semibold text-center'>
                <span className='underline decoration-[#FBC101]/50'>
                  Project {currentIndex + 1} of {projects.length}
                </span><br/>
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
              </div>
              <div className='flex items-center justify-center'>
                <span className='mx-auto'>{project?.summary}</span>
              </div>
              <div className='flex items-center space-x-2 justify-center'>
                <SocialIcon
                  url={project?.linkToBuild}
                  network='youtube' 
                  target='_blank'
                  fgColor='transparent' 
                  bgColor='#FBC101'
                  style={{marginLeft: 5, marginRight: 5}}
                  className='hoverSocialBtn' 
                />
                <SocialIcon
                  // key={project?._id}
                  url={project?.linkToBuild2}
                  network='github' 
                  target='_blank'
                  fgColor='transparent' 
                  bgColor='#FBC101'
                  style={{marginLeft: 5, marginRight: 5}}
                  className='hoverSocialBtn' 
                />
              </div>
            </div>
          </motion.div>
        ))}
        </div>
        <div className='flex flex-row items-center justify-center md:pr-10 z-50'>
          <button onClick={handleClickMore}>
            <ArrowRightCircleIcon className='text-[#FBC101] h-8 w-8' />
          </button>
        </div>
      <div className='absolute bg-[#f7da7b] border border-[#f7da7b] rounded-full h-[500px] w-[500px] opacity-10 mt-8 z-0'/>
    </motion.div>
  )
}

export default Projects;