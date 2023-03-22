import React from 'react';
import {motion} from 'framer-motion';
import IndivSkill from './IndivSkill';
import {Skill as SkillType} from './../typings';

type Props = {
  skills: SkillType[];
};

const Skills = ({skills}: Props) => {
  return (
    <motion.div 
      initial={{
        x: 0,
        opacity: 0
      }}
      whileInView={{
        x: 0, 
        opacity: 1
      }}
      transition={{duration: 1.7}}
      className='h-screen flex relative flex-col text-center px-0 md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[2px] md:tracking-[5px] text-gray-500 text-xl md:text-2xl'>
        Skills
      </h3><br/><br/><br/><br/>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
        {skills.map((skill) => (
          <IndivSkill 
            key={skill._id}
            skill={skill}
          />
        ))}    
      </div>
    </motion.div>
  )
};

export default Skills;