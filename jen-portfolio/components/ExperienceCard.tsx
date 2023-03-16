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
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:h-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      {/* <motion.img
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{duration: 1.5}}
        whileInView={{
          y: 0, 
          opacity: 1
        }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src={urlFor(experience?.companyImage).url()}
        alt='company logo' 
      /> */}
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>{experience.jobTitle}</h4>
        <p className='font-bold text-2xl mt-1'>{experience.company}</p>
        <div className='flex space-x-2 my-2'>
          {experience.technologies.map((technology) => (
              <Image 
                key={technology._id}
                className='h-10 w-10 rounded-full'
                src={urlFor(technology.image).url()}
                alt='technology icon'
                width={5}
                height={5}
              />
          ))}
        </div>
        <p className='uppercase py-5 text-gray-300'>
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {/* {experience.dateStarted} -{" "} */}
          {experience.isCurrentlyWorkingHere ? 'Present' : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg p-5'>
          {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard;