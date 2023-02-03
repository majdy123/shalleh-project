import React, { Component } from 'react'
import Lock from './lock.png'
import Checkmark from './Checkmark.png'
import Set from './set.png'
import './about.css'


export default class About extends Component {
  render() {
    return (
      <div>
        <h3 className='title_home'>ايش الي بميز موقعنا عن غيره ؟</h3>
        <div className="card-group all_card_adjust">
            <div className="card card_adjust">
                <img className="card-img-top img_card_resize" src={Lock} alt="Card image cap"></img>
                <div className="card-body">
                <h5 className="card-title">حماية كاملة للباينات</h5>
                <p className="card-text card_desc">حماية كاملة لكافلة التفاصيل الخاصة بعملية حجز الشاليه و التفاصيل الخاصة بعمليات الدفع و الاستلام</p>
                </div>
                 
            </div>
            <div className="card card_adjust">
                <img className="card-img-top  img_card_resize" src={Checkmark} alt="Card image cap"></img>
                <div className="card-body">
                <h5 className="card-title">ضمانة لكافة التفاصيل</h5>
                <p className="card-text card_desc">ضمانة الحصول على تفاصيل مطابقة للخدمات المعروضة للشاليه و بافضل الاسعار</p>
                </div>
                 
            </div>
            <div className="card card_adjust">
                <img className="card-img-top  img_card_resize" src={Set} alt="Card image cap"></img>
                <div className="card-body">
                <h5 className="card-title">انت في ايد امينة</h5>
                <p className="card-text card_desc">بامكانك استرداد المبلغ المدفوع في حالة حدوث اي مشكلة او عدم تطابق في التفاصيل المطلوبة للشاليه</p>
                </div>
                 
            </div>
        </div>
      </div>
    )
  }
}
