import React, { Component } from 'react'
import './notfound.css'

export default class notfound extends Component {
  render() {
    return (
      <div className='button_backhome'>
        <div className="container">
            <script src="/script/gsap.min.js"></script>
        <h1 className="first-four">4</h1>
        <div className="cog-wheel1">
            <div className="cog1">
              <div className="top"></div>
              <div className="down"></div>
              <div className="left-top"></div>
              <div className="left-down"></div>
              <div className="right-top"></div>
              <div className="right-down"></div>
              <div className="left"></div>
              <div className="right"></div>
          </div>
        </div>
        
        <div className="cog-wheel2"> 
          <div className="cog2">
              <div className="top"></div>
              <div className="down"></div>
              <div className="left-top"></div>
              <div className="left-down"></div>
              <div className="right-top"></div>
              <div className="right-down"></div>
              <div className="left"></div>
              <div className="right"></div>
          </div>
        </div>
       <h1 className="second-four">4</h1>
        <p className="wrong-para">الصفحة غير موجودة او غير صحيحة</p>
        </div>
          <a href="/home">
            <button className="btn btn-primary btn-lg">الصفحة الرئيسية</button>
          </a>
      </div>
    )
  }
}
