import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import PaidIcon from '@mui/icons-material/Paid';
// import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
// import PreviewIcon from '@mui/icons-material/Preview';
import './statisticsCard.css';
 


export default function StatisticsCard(props) {
 
    return (
        <div>
             <Card className ="cards_shadow" sx={{ maxWidth: 345 }}>
              <CardContent className='card-content parent_class_comp'>
                <Typography gutterBottom variant="h5" component="div">
                  <span className='fs-5'>{props.name}</span>
                </Typography>
                <div className='card_body'>
                  <div className='item_icon_flex'>
                    <props.icon color={props.col} />
                  </div>
                  <div className='item_number_flex'> 
                    {props.number}
                  </div>
                </div>


                {/* <Typography className='mt-2' variant="body2" color="text.secondary">
                  <div className='card_icon_num_adj'>
                  <span className='fs-3 class_number_user'>{this.props.number}</span>
                  <span className='card-icon class_icon_user'>{ (this.props.icon==1 && <PaidIcon className='fs-1 text-success'/>)}</span>  
                  <span className='card-icon class_icon_user'> { (this.props.icon==2 && <PeopleAltIcon className='fs-1 text-primary'/>)}</span>
                  <span className='card-icon '>{ (this.props.icon==3 && <PreviewIcon className='fs-1 text-info'/>)}</span> 
                  </div>
                </Typography> */}

              </CardContent>
        
          
         
     
      </Card>
        </div>
      )
}
