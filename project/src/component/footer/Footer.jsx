import React, { Component } from 'react'
import './footer.css'
export default class Footer extends Component {
  render() {
    return (
      <div>
  <footer id='main_footer' className="py-3 my-4 footer-all ">
    <ul className="nav justify-content-center  pb-3 mb-3 Baraa_Majdy ">
      <li className="nav-item adjust footer-item"><a href="/home" className="nav-link px-2 text-muted"> <span className='footer-link footer-color-hover'>
      الصفحة الرئيسية
        </span>  </a></li>
      <li className="nav-item adjust footer-item"><a href="/signin" className="nav-link px-2 text-muted"> <span className='footer-link footer-color-hover'>
      تسجيل الدخول
      </span></a></li>
      <li className="nav-item adjust footer-item"><a href="/view" className="nav-link px-2 text-muted"> <span className='footer-link footer-color-hover'>
       ابدأ جولتك 
      </span></a></li>
      
    </ul>
    <ul className="nav nav_icons justify-content-center  pb-3 mb-3">
    <i className="fa-brands fa-facebook"></i>
    <i className="fa-brands fa-whatsapp"></i>
    <i className="fa-brands fa-instagram"></i>
    </ul>
    <p className="text-center text-muted foot fs-5 footer-text" > 2023 © Vision, powered by <a href='https://www.facebook.com/safhityp' className='safhity-link text-center   foot fs-5'>Safhity</a></p>
  </footer>
      </div>
    )
  }
}
