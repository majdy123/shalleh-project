import React, { Component } from 'react'
import './detils_head.css'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

export default class Detils_head extends Component {
  render() {
    return (
      <>
      <div className='header_Details'>
       <div className='header_Details_overlay'>
          <div className='main-title_Details '>التفاصيل</div>
          <div className='sub-title_Details'> <a className='shalleh_book_button_update' href='./'><ArrowCircleLeftIcon /> العودة</a></div>
        </div>
       </div>
      </>
    )
  }
}
