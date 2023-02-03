import React, { Component } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import About from '../about/About'
import Hero from '../hero/Hero'
import About2 from '../about2/About2'
import './home.css'

export default class Home extends Component {
  render() {
    return (
      <div className='home_page'>
        <Header />
        <About />
        {/* <Hero /> */}
        <About2 />
        <Footer />
      </div>
    )
  }
}
