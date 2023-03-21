import React from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';
import {Experience} from './../typings';
import {urlFor} from './../sanity';

type Props = {
  experience: Experience;
}

const ExperienceCard = ({experience}: Props) => {
  return (
    <div className='md:space-y-1'>
      <h4 className='text-md md:text-2xl font-semibold text-center mb-2'>
        <span className='underline decoration-[#FBC101]/50'>
          {experience.jobTitle}
        </span>
      </h4>
      <p className='font-bold text-md md:text-2xl px-0 md:px-10 text-center mb-2'>
        {experience.company}
      </p>
      <div className='flex items-center space-x-2 justify-center mb-2'>
        {experience.technologies.map((technology) => (
          <img
            key={technology._id}
            className='h-5 w-5 md:h-10 md:w-10'
            src={urlFor(technology.image).url()}
            alt='technology icon'
          />
        ))}
      </div>
      <div className='flex items-center justify-center'>
        <p className='text-sm md:text-xl uppercase text-gray-300 items-center mb-2'>
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere ? 'Present' : new Date(experience.dateEnded).toDateString()}
        </p>
      </div>
      <div className='flex items-center justify-center'>
        <ul className='list-disc space-y-2 md:space-y-4 text-md md:text-lg md:w-4/5 h-95 items-left'>
          {experience.points.map((point, index) => (
          <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ExperienceCard;