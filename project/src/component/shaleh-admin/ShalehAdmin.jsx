import React, { Component, useRef ,useState , useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './shalehadmin.css'
import PrimaryInfo from '../primaryInfo/PrimaryInfo';
import Features from '../features/Features';
import Gallery from '../gallery/Gallery';

function logout_admin(){
  localStorage.setItem("authenticated_user", false);
  localStorage.setItem("UserName", "");
  navigator("")
}


export default function ShalehAdmin () {
 
  const authenticated =(localStorage.getItem("authenticated_user"));
  //const [UserNameShalleh , setUserNameShalleh] = useState(localStorage.getItem("UserName"));
  //setUserNameShalleh(localStorage.getItem("UserName"))

  return (
      <div className='admin-primary-contianer'>
      <Box  className='color_adj'  sx={{ flexGrow: 1  }}>
          <AppBar className='adjustt_nav' position="static">
            <Toolbar>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                ادارة الشاليه الخاص بك
                <button className='log_out_button' onClick={logout_admin}><a className='log_out_link' href='/home'>تسجيل الخروج</a></button>
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      <ul className="nav nav-pills mb-3 mt-4 nav_adjust_shalleh_user" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active nav_adjust_shalleh_user_butt" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">المعلومات الرئيسية</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link nav_adjust_shalleh_user_butt" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">مميزات الشاليه</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link nav_adjust_shalleh_user_butt" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">صور الشاليه</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link nav_adjust_shalleh_user_butt" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" >الاشعارات</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link nav_adjust_shalleh_user_butt" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" >الرسائل</button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0"><PrimaryInfo  className='primary-info'/></div>
        <div className="tab-pane features fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0"><Features /></div>
        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0"><Gallery className='gallery'/></div>
        <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex="0"><div className='mt-5 bold'>سوف تتوفر قريبا قيد التطوير<br/>من خلال هذه الخاصية يمكن التواصل مع اصحاب الشاليهات بشكل مباشؤ دون الحاجة للاتصال</div></div>
      </div>
    </div>
  )
}
