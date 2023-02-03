import React from 'react'
import './card.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import HotTubIcon from '@mui/icons-material/HotTub';
import WifiIcon from '@mui/icons-material/Wifi';
import TvIcon from '@mui/icons-material/Tv';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import PetsIcon from '@mui/icons-material/Pets';
import AccessibleIcon from '@mui/icons-material/Accessible';
import PoolIcon from '@mui/icons-material/Pool';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';


export default function Card(props) {
  function inc_visit(){
    const cll_visit = async () => {
      const response = await axios.post(`http://localhost:5000/api/incr_visit/${props.UserName}`);
    }
    cll_visit();
  } 
  const [featurs_array, setfeaturs_array] = useState([]);
  const loadDatafets = async () => {
    const response = await axios.get(`http://localhost:5000/api/features_retrieve/${props.UserName}`);
    const tmp_arr = response.data[0];
    setfeaturs_array(tmp_arr.features);
  }
  useEffect(()=>{
    loadDatafets();
  },[])
  // const array_tmp = featurs_array.split(",");
  const [wifi_fet, setwifi_fet] = useState();//
  const [pool_fet, setpool_fet] = useState();//
  const [wheelchair_fet, setwheelchair_fet] = useState();//
  const [pets_fet, setpets_fet] = useState();//
  const [condition_fet, setcondition_fet] = useState();//
  const [ps_fet,setps_fet ] = useState();//
  const [tv_fet,settv_fet ] = useState();//
  const [grill_fe,setgrill_fe ] = useState();//
  const [jakozi_fet,setjakozi_fet ] = useState();//
  const [parking_fet,setparking_fet ] = useState();//
  const Link_photo_prim = "http://localhost:5000/uploads/"+props.UserName+"_prim.jpg";
  let wifi = false;
  let pool = false;
  let wheelchair = false;
  let pets = false;
  let condition = false;
  let ps = false;
  let tv = false;
  let grill = false;
  let jakozi = false;
  let parking = false;

  if(featurs_array.length != 0){
    (featurs_array.includes('1')) ? (wifi = true): ( wifi = false);
    (featurs_array.includes('2')) ? (pool = true): ( pool = false);
    (featurs_array.includes('3')) ? (wheelchair = true): ( wheelchair = false);
    (featurs_array.includes('4')) ? (pets = true): ( pets = false);
    (featurs_array.includes('5')) ? (condition = true): ( condition = false);
    (featurs_array.includes('6')) ? (ps = true): ( ps = false);
    (featurs_array.includes('7')) ? (tv = true): ( tv = false);
    (featurs_array.includes('8')) ? (grill = true): ( grill = false);
    (featurs_array.includes('9')) ? (jakozi = true): ( jakozi = false);
    (featurs_array.includes('10')) ? (parking = true): ( parking = false);
    console.log(featurs_array);
  }
    return (
        <div className="card">
            <div className="card-header card-head-adjust">
                <h5>{props.shalleh_name}</h5></div>
            <div className="card-body-adjust">
              <div className='left_side'>
              <div className='slot_one_left_side'>
                <div className='card_details'>
                  <div className='circle_card_cost'>
                    <div className='cost_start_value'> :   ابتداء من</div>
                    <div className='cost_number_nis'>{props.cost_per_night} <i>₪</i></div>
                    <div className='Night_cost_deti'>ليلة/</div>
                  </div>
                </div>
                <div className='  card_desc_body'>
                  <p className='shalleh_name' >{props.shalleh_name}</p>
                  <p className='location_card'>
                  <LocationOnIcon className='blue_icons' />
                    الموقع : {props.location} ,
                    <br/>  
                    العنوان :  {props.Address}
                  </p>
                  <p className='card_body_desc_text'>{props.desc}
                  </p>
                  <p className='featurs_card'> : المميزات</p>
                </div>
                </div>
                <div className='slot_two_left_side'>
                <div className='shalledh_featurs  scrollmenu'>
                  {
                    wifi ? (<div className='feature_slot'><i><WifiIcon /></i><div className='feature_text'> واي فاي</div></div>) : ("")
                  }
                  {
                    pool ? (<div className='feature_slot'><i><PoolIcon /></i><div className='feature_text'>  مسبح</div></div>) : ("")
                  }
                  {
                    wheelchair ? ( <div className='feature_slot'><i><AccessibleIcon /></i><div className='feature_text'>  توفر اماكن لذوي الاحتياجات الخاصة</div></div>) :("")
                  }
                  {
                    pets ? (<div className='feature_slot'><i><PetsIcon /></i><div className='feature_text'>  اصطحاب الحيوانات الأليفة</div></div>):("")
                  }
                  {
                    condition ? (<div className='feature_slot'><i><AcUnitIcon /></i><div className='feature_text'> تكيف</div></div>) :("")
                  }
                  {
                    ps ? (<div className='feature_slot'><i><SportsEsportsIcon /></i><div className='feature_text'> بلايستيشن</div></div>):("")
                  }
                  {
                    tv ? (<div className='feature_slot'><i><TvIcon /></i><div className='feature_text'> تلفاز</div></div>):("")
                  }
                  {
                    grill ?(<div className='feature_slot'><i><OutdoorGrillIcon /></i><div className='feature_text'>  مكان شواء</div></div> ):("")
                  }
                  {
                    jakozi ?(<div className='feature_slot'><i><HotTubIcon /></i><div className='feature_text'>   جاكوزي</div></div>    ):("")
                  }
                  {
                    parking?(<div className='feature_slot'><i><LocalParkingIcon /></i><div className='feature_text'>   موقف سيارات</div></div>):("")
                  }          
              </div>
            </div>
              </div>
              <div className='card_image'>
                <div style={{backgroundImage: 'url(image-url)'}} className='card_img_photo'><div className='pook_now_ele'>احجز الان</div></div>
                <div className="middle_overlay_card-photo">
                    <div className="text_overlay_card-photo"><a onClick={inc_visit} href={'/view/details?UserName='+ props.UserName}><h4>كافة التفاصيل</h4></a></div>
                </div>
              </div>
              
            </div>
      </div>
    )
}
