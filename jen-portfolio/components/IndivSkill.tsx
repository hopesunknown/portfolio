import React from 'react';
import {motion} from 'framer-motion';
import {Skill} from './../typings';
import {urlFor} from './../sanity';

type Props = {
  skill: Skill;
};

const IndivSkill = ({skill}: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img 
          initial={{
            x: 0,
            opacity: 0
          }}
          whileInView={{
            x: 0,
            opacity: 1
          }}
          transition={{duration: 1.2}}
          src={urlFor(skill?.image).url()}
          className='rounded-full border border-gray-500 object-cover w-16 h-16 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out items-center'
        />
        <div className='absolute opacity-100 h-16 w-16 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-50'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-sm md:text-xl font-semibold'>{skill?.title}</p>
          </div>
        </div>
    </div>
  )
}

export default IndivSkill;