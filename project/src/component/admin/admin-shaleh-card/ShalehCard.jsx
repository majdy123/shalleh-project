import React, { Component } from 'react'
import './shalehcard.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from 'axios';
import Tooltip from '@mui/material/Tooltip';



export default function ShalehCard(props){  
  const [stuts , setstuts] = useState(props.request == 0 ? "red" : "green");
  const [sub_mess , setsub_mess] = useState(props.request == 0 ? "غير نشط" : "نشط");
   
  const Delete_user = (name) => {
      axios.delete(`http://localhost:5000/api/delete_user/${props.UserName}`,{
      }).then((response)=>{
        if(response.data.message){
          alert(response.data.message)
          window.location.reload(false);
        }else{
          alert("لم يتم الحذف")
        }
    } )
  }


  const Disable_user = (name) => {
      axios.post(`http://localhost:5000/api/disable_user/${props.UserName}`,{
      }).then((response)=>{
        if(response.data.message){
          alert(response.data.message)
          setstuts("red")
          setsub_mess("غير نشط")
        }else{
          alert("لم يتم تعطيل الحساب")
        }
    } )
  }



  const enable_user = (name) => {
      axios.post(`http://localhost:5000/api/enable_user/${props.UserName}`,{
      }).then((response)=>{
        if(response.data.message){
          alert(response.data.message)
          setstuts("green")
          setsub_mess("نشط")
        }else{
          alert("لم يتم تفعيل الحساب")
        }
    } )
  }

    return (
        <Card className='card_shadow' sx={{ maxWidth: 345 }}>
        <CardContent className='card-content'>
          <Typography className='font_adjust_for_cards' gutterBottom variant="h5" component="div">
             {props.shalleh_name}
          </Typography>
          <Typography className='font_adjust_for_cards' variant="body2" color="text.secondary">
            رقم صاحب الشاليه: {props.phone}
          </Typography>
          <Typography className='font_adjust_for_cards' variant="body2" color="text.secondary">
            الايميل الشخصي: {props.email}
          </Typography>
          <Typography className='font_adjust_for_cards' variant="body2" color="text.secondary">
            اسم المستخدم :  {props.UserName}
          </Typography>
          <Typography className='font_adjust_for_cards' variant="body2" color="text.secondary">
             كلمة المرور :  {props.password}
          </Typography>
          <Typography className='font_adjust_for_cards' variant="body2" color="text.secondary">
            الموقع :  {props.location}
          </Typography>
          <Typography className='font_adjust_for_cards' variant="body2" color="text.secondary">
            الحالة : {sub_mess} <FiberManualRecordIcon className={stuts + "_dot_active"}></FiberManualRecordIcon>
          </Typography>
        </CardContent>
      
        <div className="card-icons">
            <Tooltip title='حذف'>
            <Button onClick={Delete_user} className='card-icon m-3' variant="outlined" color="error">
            <DeleteIcon/>
            </Button>
            </Tooltip>


            <Tooltip title='اعادة تفعيل الحساب'>
            <Button onClick={enable_user}  id='mySidenav' className='card-icon m-3 font_adjust_for_cards' variant="contained" color="success">
              تفعيل
            </Button>
            </Tooltip>

            <Tooltip title='تعطيل الحساب '>
            <Button onClick={Disable_user} className='card-icon m-3 font_adjust_for_cards' variant="contained" color="error">
              تعطيل
            </Button>
            </Tooltip>
        </div>
      </Card>
    )
}
