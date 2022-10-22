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
                <BsCheck2Square className='experience__details-icon' />
                <div>
                  <h6>Project Management</h6>
                  <small className='text-light'> </small>
                </div>
              </article>

              <article className='experience__details'>
                <BsCheck2Square className='experience__details-icon' />
                <div>
                  <h6>Problem Solving</h6>
                  <small className='text-light'> experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsCheck2Square className='experience__details-icon' />
                <div>
                  <h6>Stakeholder Managment</h6>
                  <small className='text-light'> experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsCheck2Square className='experience__details-icon' />
                <div>
                  <h6>Self Starter</h6>
                  <small className='text-light'> experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsCheck2Square className='experience__details-icon' />
                <div>
                  <h6>Problem Solving</h6>
                  <small className='text-light'> experienced</small>
                </div>
              </article>
            </div>
        </div>
        <div className="experience__tools">
        <h3>Programming Lanaguages/Tools</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsCheck2Square className='experience__details-icon' />
                <div>
                  <h6>Javascript</h6>
                  <small className='text-light'> experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsCheck2Square className='experience__details-icon' />
                <div>
                  <h6>MySQL</h6>
                  <small className='text-light'> experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsCheck2Square className='experience__details-icon' />
                <div>
                  <h6>Python</h6>
                  <small className='text-light'> experienced</small>
                </div>
                </article>

              <article className='experience__details'>
                <BsCheck2Square className='experience__details-icon' />
                <div>
                  <h6>Self Starter</h6>
                  <small className='text-light'> experienced</small>
                </div>
                </article>

              <article className='experience__details'>
                <BsCheck2Square className='experience__details-icon' />
                <div>
                  <h6>Problem Solving</h6>
                  <small className='text-light'> experienced</small>
                </div>
              </article>
            </div>
        </div>
      </div>

    </section>
  )
}
