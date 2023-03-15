import React from 'react';
import {motion} from 'framer-motion';
import {Skill} from './../typings';
import {urlFor} from './../sanity';

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

const Skill = ({skill, directionLeft}: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img 
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
          }}
          whileInView={{
            x: 0,
            opacity: 1
          }}
          transition={{duration: 1.5}}
          src={urlFor(skill?.image).url()}
          className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition uration-300 ease-in-out'
        />
        <div className='absolute opacity-100 h-24 s-24 m:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-xl font-bold'>{skill?.title}</p>
          </div>
        </div>
    </div>
  )
}

export default Skill;