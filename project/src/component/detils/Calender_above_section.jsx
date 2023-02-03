import React, { Component } from 'react'
import './details.css'
import CheckIcon from '@mui/icons-material/Check';
import { border } from '@mui/system';
export default class Calender_above_section extends Component {
  render() {
    return (
      <div className='Calender_above_section'>
        <p className='Calender_above_section_title'>الايام المتاحة لحجز الشاليه</p>
        <div className='Calender_above_section_hint_section'>
          <div className='Calender_above_section_iconmap'>
          <CheckIcon style={{color : '#24BD51' }}  />
          <p>الايام التي تحتوي على هذه الاشارة محجوزة</p>
          </div>
        </div>  
      </div>
    )
  }
}
