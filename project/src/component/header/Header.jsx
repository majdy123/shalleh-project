import React, { Component } from 'react'
import './header.css'
import Heroo from './hero-section-banner.jpg'
import Navbar2 from '../navbar-2/Navbar2'


export default function Header() {
    return (
      <>
      <Navbar2/>
       <div id='wave' className='header_home'>
       <div className='overlay_header'>
          <h1 className='main-title '>بدك شاليه ؟</h1>
          <h4 className='sub-title'>أكبر موقع شاليهات في فلسطين</h4>
        </div>
       </div>
      </>
    )
}
