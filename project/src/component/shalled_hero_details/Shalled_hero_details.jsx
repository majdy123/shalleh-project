import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import './shalled_hero_detail.css'
import Contact_us from './Contact_us';
import Details_shalleh from './Details_shalleh';
import axios from 'axios';
import { useEffect, useState } from "react";
import Gallery from './gallery';


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Badge>{children}</Badge>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
      'aria-controls': `simple-tabpanel-${index}`,
    };
  
}

export default function Shalled_hero_details(props){   
    const [data_det , setData_det] = useState(["d"]);
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    //********************************
    useEffect(() => {
      const loadDataDetails = async () => {
        const response = await axios.get(`http://localhost:5000/api/details_user/${props.UserName}`) ;
        const arr = response.data;
        setData_det(arr); 
         
      }
      loadDataDetails();
    },[])
    // ******************************
    return (
        <Box className='Tabs_page_details' sx={{ width: '100%' }}>
          <Box  sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab className='tabs_page_title_text'  label="صور الشاليه" {...a11yProps(0)} />
              <Tab className='tabs_page_title_text'  label="تفاصيل الشاليه" {...a11yProps(1)} />
              <Tab className='tabs_page_title_text'  label="التواصل لحجز الشاليه" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel className='gallery_adjust_class' value={value} index={0}>
            <Gallery UserName={props.UserName} />
          </TabPanel>
          <TabPanel className='tabs_page_title_text' value={value} index={1}>
            <Details_shalleh 
              desc = {data_det[0].desc}
            />
          </TabPanel>
          <TabPanel className='tabs_page_title_text' value={value} index={2}>
          <Contact_us 
            email = {data_det[0].email}
            phone = {data_det[0].phone}
            Address = {data_det[0].Address}
          />
          </TabPanel>
        </Box>
    );
}
