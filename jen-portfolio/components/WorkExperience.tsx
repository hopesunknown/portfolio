import React from 'react';
import {motion} from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import {Experience} from './../typings';
// import experience from '@/sanity/schemas/experience';

type Props = {
  experiences: Experience[];
};

const WorkExperience = ({experiences}: Props) => {
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
      <h3 className='absolute top-24 uppercase tracking-[2px] md:tracking-[5px] text-gray-500 text-xl md:text-2xl hidden md:inline-flex'>
        Experience
      </h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-500/10 scrollbar-thumb-[#FBC101]/80'>
        {experiences?.map((experience, index) => (
            <div key={experience._id} className='w-screen flex-shrink-0 snap-center flex flex-col md:space-y-4 items-center justify-center p-19 md:p-44 h-screen'>
              <h4 className='text-md md:text-2xl font-semibold text-center'>
          <span className='underline decoration-[#FBC101]/50'>Experience {index + 1} of {experiences.length}</span><br/>
          </h4>
          <ExperienceCard
            // key={experience._id}
            experience={experience}
          /></div>
        ))}
      </div>
      <div className='absolute bg-[#f7da7b] border border-[#f7da7b] rounded-full h-[500px] w-[500px] opacity-10 mt-8 z-0'/>
    </motion.div>
  )
}


// {projects?.map((project, index) => (
//   <div key={index} className='w-screen flex-shrink-0 snap-center flex flex-col md:space-y-4 items-center justify-center p-19 md:p-44 h-screen'>
//     <img 
//       src={urlFor(project?.image).url()}
//       alt='project screenshot image'
//       // className='w-60 h-50 xl:w-[450px] xl:h-[300px] object-cover object-center ml-8'
//       width={300}
//       height={180}
//     />
//   <div className='space-y-1 md:space-y-6 px-0 md:px-10 max-w-6xl'>
//     <h4 className='text-md md:text-4xl font-semibold text-center'>
//       <span className='underline decoration-[#FBC101]/50'>Project {index + 1} of {projects.length}</span><br/>
//         {project?.title}
//       </h4>
//       <div className='flex items-center space-x-2 justify-center'>
//         {project?.technologies.map((technology) => (
//           <img 
//             key={technology._id} 
//             src={urlFor(technology.image).url()} 
//             alt='technology icon' 
//             className='h-5 w-5 md:h-10 md:w-10'
//           />
//         ))}
//       </div><br/>
//       <div className='flex items-center justify-center'>
//         <span className='mx-4'>{project?.summary}</span>
//       </div>
//       <div className='flex items-center space-x-2 justify-center'>
//         <SocialIcon
//           url={project?.linkToBuild}
//           network='youtube' 
//           target='_blank'
//           fgColor='transparent' 
//           bgColor='#FBC101'
//           style={{marginLeft: 5, marginRight: 5}}
//           className='hoverSocialBtn' 
//         />
//         <SocialIcon
//           // key={project?._id}
//           url={project?.linkToBuild2}
//           network='github' 
//           target='_blank'
//           fgColor='transparent' 
//           bgColor='#FBC101'
//           style={{marginLeft: 5, marginRight: 5}}
//           className='hoverSocialBtn' 
//         />
//       </div>
//     </div>
//   </div>
// ))}
export default WorkExperience;