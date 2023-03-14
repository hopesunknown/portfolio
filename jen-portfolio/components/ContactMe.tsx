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
        <div>
          <div className='flex items-center'>
            <PhoneIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe;