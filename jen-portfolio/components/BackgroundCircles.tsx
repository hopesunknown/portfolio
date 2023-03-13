import React from 'react'

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <div className='relative flex justify-center items-center'>
      <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
      <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping'/>
      <div className='absolute border border-[#333333] rounded-full h-[400px] w-[400px] mt-52 animate-ping'/>
      <div className='absolute border border-[#333333] rounded-full h-[650px] w-[650px] opacity-20 mt-52 animate-ping'/>
      <div className='absolute border border-[#333333] rounded-full h-[800px] w-[800px] opacity-20 mt-52 animate-ping'/>
    </div>
  )
}

export default BackgroundCircles