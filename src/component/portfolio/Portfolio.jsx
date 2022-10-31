import React from 'react'
import './portfolio.css'
import IMG1 from  '../../assets/portfolio1.jpg' 


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Cryto',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19760919-Autumn-Girl'
  },
  {
    id: 2,
    image: IMG1,
    title: 'Cryto',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19760919-Autumn-Girl'
  },
  {
    id: 3,
    image: IMG1,
    title: 'Cryto',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19760919-Autumn-Girl'
  },
  {
    id: 4,
    image: IMG1,
    title: 'Cryto',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19760919-Autumn-Girl'
  },
  {
    id: 5,
    image: IMG1,
    title: 'Cryto',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19760919-Autumn-Girl'
  },
  {
    id: 6,
    image: IMG1,
    title: 'suspense',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19760919-Autumn-Girl'
  },

]

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h5>{title}</h5>
              <div className="portfolio_item-cta">
                <a href={github} className='btn'> Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }

        

       

       
        
        
      </div>
    </section>
  ) 
}

export default Portfolio