import React, { Component } from 'react'
import './nav.css'
import Logo from './logo.png'

export default class Nav extends Component {
  render() {
    return (
      <>
    <nav className='Nav_align'>
        <div>
          <a  href="/"><img src={Logo} alt="BooNametstrap" className='logo'/></a>
        </div>
        <div>
        <ul className='navlist'>
          <li className='element'><a  className='link' href="/home">الصفحة الرئيسية</a></li>
          <li className='element'><a className='link'  href="/signin">تسجيل الدخول (خاص)</a></li>
          <li className='element'><a  className='link' href="/view#card-id-title">عرض الشاليهات</a></li>
          <li className='element'><a  className='link' href="#about">حول</a></li>
        </ul>
      </div>
        
    </nav>
      </>
    )
  }
}
