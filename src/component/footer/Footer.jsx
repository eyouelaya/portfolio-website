import React from 'react'
import './footer.css'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'


export const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Eyouel Kenfu</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#contact'>Contact</a></li>
        <li><a href='#experience'>Experience</a></li>
        {/* <li><a href='#portfolio'>Portfolio</a></li> */}
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/eyouel-ayalew-kenfu/'><AiFillLinkedin /></a>
        <a href='https://github.com/eyouelaya?tab=repositories'><AiOutlineGithub /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Eyouel Kenfu. All rights reserved</small>
      </div>
    </footer>
  )
}
