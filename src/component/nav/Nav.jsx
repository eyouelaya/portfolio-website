import React from 'react'
import './nav.css'
import {IoHomeOutline} from 'react-icons/io5'
import {BiUser} from 'react-icons/bi'
import {MdWorkOutline} from 'react-icons/md'
import {BiMessageMinus} from 'react-icons/bi'
import {BsFolder2Open} from 'react-icons/bs'
import {useState} from 'react'

export const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')} className= {activeNav === '#' ? 'active hover-text hover-text-home' : 'hover-text hover-text-home'} data-hover='Home'><IoHomeOutline /></a>
      
      <a href='#about' onClick={()=> setActiveNav('#about')} className=  {activeNav === '#about' ? 'active hover-text hover-text-about' : 'hover-text hover-text-about'} data-hover='About'><BiUser /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className=  {activeNav === '#contact' ? 'active hover-text hover-text-contact' : 'hover-text hover-text-contact'} data-hover='Contact'><BiMessageMinus /></a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')} className=  {activeNav === '#experience' ? 'active hover-text hover-text-experience' : 'hover-text hover-text-experience'}data-hover='Experience'><MdWorkOutline /></a>
      <a href='#portfolio' onClick={()=> setActiveNav('#portfolio')} className=  {activeNav === '#portfolio' ? 'active hover-text hover-text-portfolio' : 'hover-text hover-text-portfolio'}data-hover='Portfolio'><BsFolder2Open /></a>
    </nav>
  )
}
