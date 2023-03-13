import React from 'react';
import {useTypewriter} from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {}

const Hero = (props: Props) => {
  const [text, helper] = useTypewriter({ 
    words: ['hello', 'this', 'is', 'cool'],
    loop: true,
    delaySpeed: 2000
  })
  return (
    <>
      <BackgroundCircles />
      <h1>Hello, my name is Jen Tchai</h1>
      <h2>I am a Frontend Developer, based in Washington, DC.</h2>
      <div>{text}</div>
    </>
  )
}

export default Hero;