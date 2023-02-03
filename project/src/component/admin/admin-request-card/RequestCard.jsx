import React, { Component } from 'react'
import './requestcard.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {  CardActionArea } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export default function RequestCard (props) {
  const changerequest = (name) => {
    window.location.reload(false);
      axios.post(`http://localhost:5000/api/change_req/${props.name}`,{
      }).then((response)=>{
        if(response){
        }
        else{
        }
    } )
  }
    return (
        <Card className='card_shadow' sx={{ maxWidth: 345 }}>  
        <CardContent className='card-content'>
          <Typography className='font_adjust_for_cards' gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography className='font_adjust_for_cards' variant="body2" color="text.secondary">
            رقم صاحب الشاليه:{props.phone}
          </Typography>
        </CardContent>
        <div className="card-icons_container">
        <div className="card-icons">
            <button onClick={() => changerequest(props.name)} className='card-action-area request_icons_adjust_check'>
            <CheckCircleIcon className='text-success card-icon icon_change_color_request_check' />
            </button>
        </div>
        <p>بأمكانك ترك الطلب معلق بتجاهله</p>
        </div>
    </Card>
    )
}
