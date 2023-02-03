import React, { Component } from 'react'
import Info2 from './info2.png'
import Info3 from './info3.png'

import './about2.css'
export default class About2 extends Component {
  render() {
    return (

      <div id='about'>
        <div className="px-3 py-6 my-5 text-center">
            <img className="d-block mx-auto mb-4 class_about2" src={Info2} alt="" width="100" height="100"></img>
            <h1 className="display-5 fw-bold">مين احنا  ؟</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4 info-data">
                موقع بدك شاليه هو موقع من تطوير مجموعة صفحتي و يهدف الموقع بشكل اساسي الى تجميع كافة الشاليهات في فلسطين في موقع واحد لتسهيل حجز و اختيار الشاليه المناسب 
              </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              </div>
            </div>
          </div>


          <div className="px-2 py-6 my-5 text-center">
            <img className="d-block mx-auto mb-4 class_about2" src={Info3} alt="" width="100" height="100"></img>
            <h1 className="display-5 fw-bold">شو بتستنى  !؟</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4 info-data">
                خذ جولة في الموقع و احجز الشاليه الخاص فيك
              </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              </div>
            </div>
          </div>
      </div>
      
    )
  }
}
