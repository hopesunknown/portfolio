import React, {useState} from 'react';
import {motion} from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import {Experience} from './../typings';
import {ArrowLeftCircleIcon, ArrowRightCircleIcon} from '@heroicons/react/24/solid';
// import experience from '@/sanity/schemas/experience';

type Props = {
  experiences: Experience[];
};

const WorkExperience = ({experiences}: Props) => {
  const [current, setCurrent] = useState(0);

  const handleClickLess = () => {
    setCurrent((current) => (current === 0 ? experiences.length - 1 : current - 1))
  }

  const handleClickMore = () => {
    setCurrent((current) => (current === experiences.length - 1 ? 0 : current + 1))
  }

  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.2}}
      className='h-screen relative flex overflow-hidden flex-col text-left max-w-full justify-evenly mx-auto items-center z-0'
    >
      <h3 className='absolute top-24 uppercase tracking-[2px] md:tracking-[5px] text-gray-500 text-xl md:text-2xl hidden md:inline-flex'>
        Experience
      </h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-500/10 scrollbar-thumb-[#FBC101]/80'>
        {experiences?.map((experience, index) => (
          <div key={experience._id} className='w-screen flex-shrink-0 snap-center flex flex-col md:space-y-4 items-center justify-center md:p-40 h-screen'>
            <h4 className='text-md md:text-2xl font-semibold text-center'>
              <span className='underline decoration-[#FBC101]/50'>Experience {index + 1} of {experiences.length}</span><br/>
            </h4>
            <ExperienceCard
              // key={experience._id}
              experience={experience}
            />
          </div>
        ))}
      </div>
      <div className='flex flex-row items-center justify-center space-x-2 mb-7 md:mb-28 md:pb-10 md:mx-auto'>
        <button onClick={handleClickLess}><ArrowLeftCircleIcon className='text-[#FBC101] h-8 w-8' /></button>
        <button onClick={handleClickMore}><ArrowRightCircleIcon className='text-[#FBC101] h-8 w-8' /></button>
      </div>
      {/* <div className='flex absolute flex-col items-center justify-center space-x-2 object-bottom'> */}
      {/* </div> */}
      <div className='absolute bg-[#f7da7b] border border-[#f7da7b] rounded-full h-[500px] w-[500px] opacity-10 mt-8 z-0'/>
    </motion.div>
  )
}

export default WorkExperience;