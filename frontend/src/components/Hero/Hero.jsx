import React from 'react'
import './Hero.css'
import hero_image from './../../assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-text">
            <h1>Shop the latest fashion trends</h1>
            <p>Get the best deals on the latest fashion trends</p>
            <button className='btn'>Shop Now</button>
        </div>
        <div className="hero-image">
            <img src={hero_image} alt="Hero" />
        </div>
    </div>
  )
}

export default Hero
