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
    // <div className='w-screen flex-shrink-0 snap-center flex flex-col md:space-y-4 items-center justify-center p-19 md:p-44 h-screen'>
      <div className='space-y-1 md:space-y-6 px-0 md:px-10 max-w-6xl'>
        <h4 className='text-md md:text-3xl font-semibold text-center'>
          <span className='underline decoration-[#FBC101]/50'>
            {experience.jobTitle}
          </span>
        </h4>
        <p className='font-bold text-md md:text-3xl mt-1 px-0 md:px-10 text-center'>
          {experience.company}
        </p>
        <div className='flex items-center space-x-2 justify-center'>
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
          <p className='text-sm md:text-xl uppercase py-2 text-gray-300 items-center'>
            {new Date(experience.dateStarted).toDateString()} -{" "}
            {experience.isCurrentlyWorkingHere ? 'Present' : new Date(experience.dateEnded).toDateString()}
          </p>
        </div>
        <div className='flex items-center justify-center'>
          <ul className='list-disc space-y-2 md:space-y-4 text-md md:text-lg md:w-4/5 h-95 p-0 mx-5 md:mx-0 md:p-8 items-left'>
            {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    // </div>
  )
}

export default ExperienceCard;