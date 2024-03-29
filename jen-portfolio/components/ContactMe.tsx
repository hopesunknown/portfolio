import React from 'react';
import {SocialIcon} from 'react-social-icons';
// import {EnvelopeIcon} from '@heroicons/react/24/solid';
import {useForm, SubmitHandler} from "react-hook-form";

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string
};

type Props = {};

const ContactMe = (props: Props) => {
  const {register, handleSubmit} = useForm<Inputs>();
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[2px] md:tracking-[5px] text-gray-500 text-xl md:text-2xl'>
        Contact Me
      </h3><br/>
      <div className='flex flex-col space-y-4 md:mx-auto'>
        <h4 className='text-lg md:text-2xl font-semibold text-center'>
          <span className='decoration-[#FBC101]/50 underline'>Let's connect.</span>
        </h4>
        <div className='space-y-1 md:space-y-4 mx-auto'>
          <div className='flex items-left space-x-4 justify-left'>
            <SocialIcon
              url='https://www.github.com/hopesunknown' 
              target='_blank'
              fgColor='transparent' 
              bgColor='#FBC101'
              className='hoverSocialBtn' 
            />
            <a href='https://www.github.com/hopesunknown' target='_blank' className='socialUrlLink'>
              github.com/hopesunknown
            </a>
          </div>
          <div className='flex items-left space-x-4 justify-left'>
            <SocialIcon 
              url='https://www.linkedin.com/in/jentchai/' 
              target='_blank'
              fgColor='transparent' 
              bgColor='#FBC101'
              className='hoverSocialBtn'  
            />
            <a href='https://www.linkedin.com/in/jentchai/' target='_blank' className='socialUrlLink'>
              linkedin.com/in/jentchai
            </a>
          </div>
          <div className='flex items-left space-x-4 justify-left'>
            <SocialIcon
              url='https://www.youtube.com/@jentchai1728' 
              target='_blank'
              fgColor='transparent' 
              bgColor='#FBC101'
              className='hoverSocialBtn' 
            />
            <a href='https://www.youtube.com/@jentchai1728' target='_blank' className='socialUrlLink'>
              youtube.com/@jentchai1728
            </a>
          </div>
          <div className='flex items-left space-x-4 justify-left'>
            <SocialIcon 
              url='https://medium.com/@jentchai' 
              target='_blank'
              fgColor='transparent' 
              bgColor='#FBC101'
              className='hoverSocialBtn' 
            />
            <a href='https://medium.com/@jentchai' target='_blank' className='socialUrlLink'>
              medium.com/@jentchai
            </a>
          </div>
        </div>
        <form 
          // onSubmit={handleSubmit(onSubmit)} 
          action='https://formsubmit.co/e725e159ba0dc850132dc2683d0df0f9'
          method='POST'
          target='_blank'
          className='flex flex-col space-y-1 w-fit mx-auto'
        >
          <input {...register('name')} className='contactInput' placeholder='Name' type='text' />
          <input {...register('email')} className='contactInput' placeholder='Email' type='email' />
          <input {...register('subject')} className='contactInput' placeholder='Subject' type='text' />
          <textarea {...register('message')} className='contactInput' placeholder='Message' />
          <button className='heroButton'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe;