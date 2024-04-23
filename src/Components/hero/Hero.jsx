import React from 'react'
import './Hero.css'
import Shop from '../Assets/shopping.jpg'
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className='hero'>
          <div className="hero-contant">
          <h1>FIND YOUR STYLE</h1>
           <h4>Fashion is a form of <br /> selt-expression and autonomy at a  <br/> particular period to autonomy</h4>        
          <button className='hero-btn'>Latest Collection <FaArrowRight /> </button>
          </div>    
    </div>
  )
}

export default Hero
