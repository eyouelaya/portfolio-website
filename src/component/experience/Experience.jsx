import React from 'react'
import './experience.css'
import {BsCheck2Square} from 'react-icons/bs'
export const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className="experience__skills">
            <h3>Skills</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <div className='experience__details-div'>
                  <BsCheck2Square className='experience__details-icon' />
                  <h6>Project Management</h6>
                </div>
              </article>

              <article className='experience__details'>
                <div className='experience__details-div'>
                  <BsCheck2Square className='experience__details-icon' />
                  <h6>Problem Solving</h6>
                </div>
              </article>

              <article className='experience__details'>
                <div className='experience__details-div'>
                  <BsCheck2Square className='experience__details-icon' />
                  <h6>Stakeholder Managment</h6>
                </div>
              </article>

              <article className='experience__details'>
                <div className='experience__details-div'>
                  <BsCheck2Square className='experience__details-icon' />
                  <h6>Critical Thinking</h6>
                </div>
              </article>

              <article className='experience__details'>
                <div className='experience__details-div'>
                  <BsCheck2Square className='experience__details-icon' />
                  <h6>Leadership</h6>
                </div>
              </article>

              <article className='experience__details'>
                <div className='experience__details-div'>
                  <BsCheck2Square className='experience__details-icon' />
                  <h6>Software Development</h6>
                </div>
              </article>
            </div>
        </div>
        <div className="experience__tools">
        <h3>Languages/Frameworks</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <div className='experience__details-div'>
                  <BsCheck2Square className='experience__details-icon' />
                  <h6>Javascript</h6>
                </div>
              </article>

              <article className='experience__details'>
                <div className='experience__details-div'>
                  <BsCheck2Square className='experience__details-icon' />
                  <h6>MySQL</h6>
                </div>
              </article>

              <article className='experience__details'>
                <div className='experience__details-div'>
                  <BsCheck2Square className='experience__details-icon' />
                  <h6>React JS</h6>
                </div>
                </article>

              <article className='experience__details'>
                <div className='experience__details-div'>
                  <BsCheck2Square className='experience__details-icon' />
                  <h6>Laravel</h6>
                </div>
                </article>

              <article className='experience__details'>
                <div className='experience__details-div'>
                  <BsCheck2Square className='experience__details-icon' />
                  <h6>Java</h6>
                </div>
              </article>

              <article className='experience__details'>
                <div className='experience__details-div'>
                  <BsCheck2Square className='experience__details-icon' />
                  <h6>Python</h6>
                </div>
              </article>
              <article className='experience__details'>
                <div className='experience__details-div'>
                  <BsCheck2Square className='experience__details-icon' />
                  <h6>C#</h6>
                </div>
              </article>

              <article className='experience__details'>
                <div className='experience__details-div'>
                  <BsCheck2Square className='experience__details-icon' />
                  <h6>AWS</h6>
                </div>
              </article>
            </div>
        </div>
      </div>

    </section>
  )
}
