import React from 'react';
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid';
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
  // const onSubmit: SubmitHandler<Inputs> = (formData) => window.location.href = `mailto:jentchai@gmail.com?subject=${formData.subject}&body=My name is ${formData.name} and my email is ${formData.email}. ${formData.message}`;

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[5px] text-gray-500 text-2xl'>
        Contact Me
      </h3>
      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'> this is where you contact me
          <span className='decoration-[#F7AB0A]/50 underline'>right here</span>
        </h4>
        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
              <PhoneIcon className='text-[#F7AB0A] h-7 w-7' />
              <p className='text-2xl'>+2435353873</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
              <MapPinIcon className='text-[#F7AB0A] h-7 w-7' />
              <p className='text-2xl'>Washington, DC</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
              <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7' />
              <p className='text-2xl'>jentchai@gmail.com</p>
            </div>
          </div>

        <form 
          // onSubmit={handleSubmit(onSubmit)} 
          action='https://formsubmit.co/e725e159ba0dc850132dc2683d0df0f9'
          method='POST'
          target='_blank'
          className='flex flex-col space-y-2 w-fit mx-auto'
        >
          <div className='flex space-x-2'>
            <input {...register('name')} className='contactInput' placeholder='Name' type='text' />
            <input {...register('email')} className='contactInput' placeholder='Email' type='email' />
          </div>
          <input {...register('subject')} className='contactInput' placeholder='Subject' type='text' />
          <textarea {...register('message')} className='contactInput' placeholder='Message' />
          <button className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>
            Send Message
          </button>
        </form>

      </div>
    </div>
  )
}

export default ContactMe;