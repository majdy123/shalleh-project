import React, { useState } from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { TextField } from '@mui/material';
import Badge from '@mui/material/Badge';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
 
import CheckIcon from '@mui/icons-material/Check';
import './calender.css'
import { useEffect } from 'react';
import axios  from 'axios';

    const Calendar =(props)=>{ 
      const [value, setValue] = React.useState(new Date());
      const [highlightedDays, setHighlightedDays] = useState([1, 2, 13]);
      useEffect(() => {
        axios.get(`http://localhost:5000/api/calender_day/${props.UserName}`)
        .then(res => {
          console.log(res.data[0].calender_days)
          const arr = res.data[0].calender_days.split(",").map(Number);
          setHighlightedDays(arr)
        })
        .catch(err => {
          console.error(err);
        });
      },[])
       
        return (
          <div className='cal'>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <StaticDatePicker 
                 
                // mask='__//__'
                variant='static'
                orientation='portrait'
                value={value}
                onChange={(newValue) => setValue(newValue)}
                renderInput={(params) => {
                  <TextField {...params} />;
                }}
                //*********************************************************** */
                renderDay={(day, _value, DayComponentProps) => {
                    const isSelected =
                      !DayComponentProps.outsideCurrentMonth &&
                      highlightedDays.indexOf(day.getDate()) >= 0;
                       
          
                    return (
                      <Badge 
                         
                        key={day.toString()}
                        overlap='circular'
                        
                        badgeContent={isSelected ? <CheckIcon style={{color : '#24BD51' }}  /> : undefined}
                      >
                        <PickersDay {...DayComponentProps} />
                      </Badge>
                    );
                  }}
                  //*********************************************************** */
              />
            </LocalizationProvider>
        </div>

    );}

export default Calendar;