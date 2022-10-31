import React from 'react'
import { Header } from './component/header/Header'
import { Nav } from './component/nav/Nav'
import { Footer } from './component/footer/Footer'
import {About} from './component/about/About'
import {Contact} from './component/contact/Contact'
import {Experience} from './component/experience/Experience'
import {Portfolio} from './component/portfolio/Portfolio'




export const App = () => {
 return (
    
      <>
        <Header />
        <Nav />
        <Footer />
        <About />
        <Contact />
        <Experience />
        <Portfolio />
      </>  
   


  )
 }
