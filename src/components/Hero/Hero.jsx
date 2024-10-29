import React from 'react'
import './Hero.css'
import mypic from '../../assets/mypic.png'

const Hero = () => {
  return (
    <div className='box'>
    <div className='Intro'>
       <img src={mypic} alt="my pic" />
       <h1>Hi! I am Yash More,</h1>
       <h2>Aspiring Frontend Developer skilled in React and JavaScript, passionate about learning and enhancing user experience through intuitive, impactful designs.</h2>
    </div>
    </div>
  )
}

export default Hero
