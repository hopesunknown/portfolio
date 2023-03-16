import React from 'react';
import {motion} from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import {Experience} from './../typings';
import experience from '@/sanity/schemas/experience';

type Props = {
  experiences: Experience[];
};

const WorkExperience = ({experiences}: Props) => {
  return (
    <>
      <motion.div 
        initial={{
          x: -200,
          opacity: 0
        }}
        whileInView={{x: 0, opacity: 1}}
        transition={{duration: 1.5}}
        className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
      >
        <h3 className='absolute top-24 uppercase tracking-[5px] text-gray-500 text-lg'>Experience</h3>
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-500/10 scrollbar-thumb-[#FBC101]/80'>
          {experiences?.map((experience) => (
            <ExperienceCard
              key={experience._id}
              experience={experience}
            />
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default WorkExperience;