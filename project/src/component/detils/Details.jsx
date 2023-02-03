import React, { Component } from 'react'
import './details.css'
import Calendar from '../calender/Calender'
import Navbar2 from '../navbar-2/Navbar2'
import Detils_head from '../Detils-head/Detils_head'
import Shalled_hero_details from '../shalled_hero_details/Shalled_hero_details'
import Detils_head_title from '../detils_head_title/Detils_head_title'
import Calender_above_section from './Calender_above_section';
import Footer from '../footer/Footer'
import View_footer from '../view/view_footer'
export default function Detils(){
  const queryParameters = new URLSearchParams(window.location.search)
  const UserName = queryParameters.get("UserName")
  
    return (
      <>
      <Navbar2/>
      <Detils_head/>
      <Detils_head_title/>
      <Shalled_hero_details 
        UserName = {UserName}
      />{/*This slots have a navagations tab from Maturial Ui */}
      <Calender_above_section/>
      <Calendar UserName = {UserName}/>
       <View_footer />
      </>
    )
}
