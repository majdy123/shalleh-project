import React, { Component } from 'react'
import './card-body-title.css'
import logo from './logo1.png'
export default class Card_body_title extends Component {
  render() {
    return (
      <h2 id='card-id-title' className='  '> <img className='title_logo' src={logo}></img>قم بحجز الشاليه الخاص بك</h2>
    )
  }
}
