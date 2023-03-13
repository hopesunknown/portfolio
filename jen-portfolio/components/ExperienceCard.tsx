import React from 'react';
import {motion} from 'framer-motion';

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article>
      <motion.img
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
        src=''
        alt='company logo' 
      />
      <div>
        <h4>Junior</h4>
        <p>Nusura LLC</p>
        <div>
          Tech used
        </div>
        <p>Started wor... - Ended...</p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard;