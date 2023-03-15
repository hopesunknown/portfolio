import React from 'react';
import {motion} from 'framer-motion';
import Skill from './Skill';
import {Skill as SkillType} from './../typings';

type Props = {
  skills: SkillType[];
};

const Skills = ({skills}: Props) => {
  return (
    <>
      <motion.div 
        initial={{
          x: -200,
          opacity: 0
        }}
        whileInView={{x: 0, opacity: 1}}
        transition={{duration: 1.5}}
        className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
      >
        <h3 className='absolute top-24 uppercase tracking-[5px] text-gray-500 text-2xl'>Skills</h3>
        <h3></h3>
        <div className='grid grid-cols-4 gap-5'>
          {skills?.map((skill) => (
            <Skill 
              key={skill._id}
              skill={skill}
            />
          ))}
         
        </div>
      </motion.div>
    </>
  )
}

export default Skills;