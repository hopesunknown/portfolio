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
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-8 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 scrollbar-[#FBC101]'>
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
      <div className='px-6 md:px-8 text-center'>
        <h4 className='text-xl md:text-3xl font-light'>{experience.jobTitle}</h4>
        <p className='font-bold text-lg md:text-xl mt-1 px-0 md:px-10 text-center'>{experience.company}</p>
        <center>
        <div className='flex space-x-2 my-4 mx-2 items-center p-2'>
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
        </center>
        <p className='text-lg md:text-2xl uppercase py-5 text-gray-300 items-center'>
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere ? 'Present' : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className='list-disc space-y-4 ml-6 text-md md:text-2xl w-4/5 h-96 overflow-y-scroll p-5'>
          {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard;