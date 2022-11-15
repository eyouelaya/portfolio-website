import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'

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
          <p>Currently a Market Specialist at META(FB), I support the Sub-Saharan Market by initiating and leading projects to ensure the safety of our communities. I also work on Web development projects on the side. Through my experience in various roles throughout my career, I have developed strong problem-solving, critical thinking, software development, partner management, and leadership skills.</p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
