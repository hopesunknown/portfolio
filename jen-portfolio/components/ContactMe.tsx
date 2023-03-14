import React from 'react';
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid';

type Props = {};

const ContactMe = (props: Props) => {
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

        <form className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input className='contactInput' placeholder='Name' type='text' />
            <input className='contactInput' placeholder='Email' type='email' />
          </div>
          <input className='contactInput' placeholder='Subject' type='text' />
          <textarea className='contactInput' placeholder='Message' />
          <button className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>
            Send Message
          </button>
        </form>

      </div>
    </div>
  )
}

export default ContactMe;