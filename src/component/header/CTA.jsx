import React from 'react'
import cv from '../../assets/cv.pdf'

export const CTA = () => {
  return (
    <div className='cta'>
        <a href={cv} download= 'Eyouel Kenfu CV' className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'> Let's Talk</a>
    </div>

  )
}
