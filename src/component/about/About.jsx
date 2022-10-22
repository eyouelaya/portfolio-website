import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {CgOrganisation} from 'react-icons/cg'
import {VscLibrary} from 'react-icons/vsc'

export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
      </div>
      <div className="about__content">
          <div className="about__cards">
           
            <article className='about__card'>
              < FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
           
            <article className='about__card'>
              < CgOrganisation className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Organisation</small>
            </article>
            
            <article className='about__card'>
              < VscLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Projects</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sequi debitis vero hic fugiat, odit, minus magni suscipit dolorum earum, exercitationem non ex amet ipsa numquam velit corporis voluptatum. Quam.</p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
