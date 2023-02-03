import React, { Component } from 'react'
import address from './address.png'
import phone  from './phone.png';
import email from './email.png';
export default function Contact_us(props) {
  
    return (
        <div className='contact_us_details'>
        <div className='contact_us_details_address'>
            <p className='contact_us_details__p'>الموقع</p>
            <div className='Icons_adjust_details_contanier'>
                <img className='Icons_adjust_details' src={address}></img>
            </div>
            <p className='realdata_details_contactus'>{props.Address}</p>
        </div>
        <div className='contact_us_details_phone'>
            <p className='contact_us_details__p'>رقم الهاتف</p>
            <div className='Icons_adjust_details_contanier'>
                <img className='Icons_adjust_details' src={phone}></img>
            </div>
            <p className='realdata_details_contactus'>{props.phone}</p>
        </div>
        <div className='contact_us_details_email'>
            <p className='contact_us_details__p'>الايميل الشخصي</p>
            <div className='Icons_adjust_details_contanier'>
                <img className='Icons_adjust_details' src={email}></img>
            </div>
            <p className='realdata_details_contactus'>{props.email}</p>
        </div>
    </div>
    )
 
}
