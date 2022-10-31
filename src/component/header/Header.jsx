import React from 'react'
import './header.css'
import {CTA} from './CTA'
import {Socials} from './Socials'
import ME from '../../assets/me.png'

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Eyouel Ayalew Kenfu</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
       
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#about" className='scroll__down'>Scroll Down</a>
        <Socials />
      </div>
    </header>
  )
}
