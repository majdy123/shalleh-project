import React, { Component } from 'react'
import './adminprimary.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import RequestCard from '../admin-request-card/RequestCard';
import ShalehCard from '../admin-shaleh-card/ShalehCard';
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from 'axios';

export default function AdminPrimary(){
  const authenticated =(localStorage.getItem("authenticated_admin"));
//********************************
  const [data , setData] = useState([]);
    const loadData = async () => {
      const response = await axios.get("http://localhost:5000/api/Get_Admin_request");
      const dara_arr = response.data;
      setData(dara_arr);
    }
    useEffect(() => {
      loadData();
    },[])

// ******************************
  const [data_mng , setDataMng] = useState([]);
  const loadDataMng = async () => {
    const response = await axios.get("http://localhost:5000/api/Get_Admin_managment");
    const data_mng_arr = response.data;
    setDataMng(data_mng_arr);
  }
  useEffect(() => {
    loadDataMng();
  },[])
// ******************************
  function logout_admin(){
    localStorage.setItem("authenticated_admin", false);
    localStorage.setItem("UserName", "");
    navigator("")
  }
  
  if (authenticated == false ||  authenticated == null) {
    return <Navigate replace to="/home" />;
  } else {
    return (
      
      <div className='admin-primary-contianer'>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar className='Toolbar_admin' position="static">
              <Toolbar className='Toolbar_admin'>
                <Typography className='font_adjust_for_cards' variant="h4" component="div" sx={{ flexGrow: 1 }}>
                  ادارة الموقع
                </Typography>
                
                <button className='log_out_button' onClick={logout_admin}><a className='log_out_link' href='/home'>تسجيل الخروج</a></button>
              </Toolbar>
            </AppBar>
          </Box>
    <ul className="nav nav-pills mb-3 mt-5 admin-nav" id="pills-tab" role="tablist">
      <li className="nav-item" role="presentation">
        <button className="nav-link m-3 w-100 active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">طلبات الانضمام</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link m-3 w-100" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">ادارة الشاليهات</button>
      </li>
    
    </ul>
<div  key="Request_card_secfather"  className="tab-content" id="pills-tabContent">


  {/*****************  Admin Auth Request Cards Body *****************/}
  <div key="Request_card_sec1" className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
    <div className="row requst-content">
        {data.map((item , index)=>{
                return(
                <div key = {index}  className="col-md-4">
                  <RequestCard 
                  name = {item.UserName} 
                  phone = {item.phone} />
                </div>
              )
          })} 
    </div>
  </div>
  {/*****************  Admin Auth Shalleh Cards Body *****************/}
  <div key="Request_card_sec2"  className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
  <div className="row requst-content">
    {data_mng.map((item , index)=>{
          return (
          <div key = {index} className="col-md-4">
            <ShalehCard 
              shalleh_name = {item.shalleh_name}
              phone = {item.phone}
              email = {item.email}
              UserName = {item.UserName}
              password = {item.password}
              request = {item.request}
              location = {item.location}
              first_time = {item.first_time}
            />
          </div>
        )
    })} 
    </div>
  </div>
  <p className='req_admin_page_text'>طلبات المستخدمين</p>
</div>
    
      </div>
    )
  }
}
