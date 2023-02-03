import React, { Component } from 'react'
import Card from '../card/Card'
import Card_title from './Card-body-title'
import axios from 'axios';
import './card-body.css'
import { useEffect, useState } from "react";




export default function Card_body(){
  //********************************
  const [data , setData] = useState([]);
    const loadData = async () => {
      const response = await axios.get("http://localhost:5000/api/all_active_shalleh/");
      setData(response.data);
    }
    useEffect(() => {
      loadData();
    },[])
// ******************************

  return (
    <div className='Card_body'>
      {/* All Card here */}
      <Card_title/>
      {data.map((item , index)=>{
          return (
          <Card 
            key = {index}
            UserName = {item.UserName}
            phone = {item.phone}
            email = {item.email}
            password = {item.password}
            cost_per_night = {item.cost_per_night}
            desc = {item.desc}
            Address = {item.Address}
            location = {item.location}
            gallary_photo = {item.gallary_photo}
            features = {item.features}
            calender_id = {item.calender_id}
            shalleh_name = {item.shalleh_name}
          />
        )
      })}
    </div>
  )
}
