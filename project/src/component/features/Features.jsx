import React, { Component, useRef ,useState , useEffect } from 'react';
import Switch from '@mui/material/Switch';
import './features.css'
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import FireplaceIcon from '@mui/icons-material/Fireplace';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import HotTubIcon from '@mui/icons-material/HotTub';
import axios from "axios";
import Button from '@mui/material/Button';
export default function Features() {

    var UserNameShalleh =localStorage.getItem("UserName");
    const [wifi_fet, setwifi_fet] = useState({checked: false, name : "wifi"});//
    const [pool_fet, setpool_fet] = useState({checked: false, name : "pool"});//
    const [wheelchair_fet, setwheelchair_fet] = useState({checked: false, name : "wheelchair" });//
    const [pets_fet, setpets_fet] = useState({checked: false, name : "pets"});//
    const [condition_fet, setcondition_fet] = useState({checked: false, name : "condition"});//
    const [ps_fet,setps_fet ] = useState({checked: false, name : "ps"});//
    const [tv_fet,settv_fet ] = useState({checked: false, name : "tv"});//
    const [grill_fe,setgrill_fe ] = useState({checked: false, name : "grill"});//
    const [jakozi_fet,setjakozi_fet ] = useState({checked: false, name : "jakozi"});//
    const [parking_fet,setparking_fet ] = useState({checked: false, name : "parking"});//
    //const [dump_arr, setdump_arr] = useState([]);
    // console.log(wifi_fet)
    // console.log(pool_fet)
    // console.log(wheelchair_fet)
    // console.log(pets_fet)
    // console.log(condition_fet)
    // console.log(ps_fet)
    // console.log(tv_fet)
    // console.log(grill_fe)
    // console.log(jakozi_fet)
    // console.log(parking_fet)
    const [fet_arrays , setfet_arrays] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/api/shaleh_user_details_fetu/${UserNameShalleh}`)
        .then(res => {
          const data_arrr = res.data[0].features.split(',')
        //   console.log(data_arrr)
          if(data_arrr.includes('1')){setwifi_fet({checked: true, name : "wifi"})}
          if(data_arrr.includes('2')){setpool_fet({checked: true, name : "pool"})}
          if(data_arrr.includes('3')){setwheelchair_fet({checked: true, name : "wheelchair"})}
          if(data_arrr.includes('4')){setpets_fet({checked: true, name : "pets"})}
          if(data_arrr.includes('5')){setcondition_fet({checked: true, name : "condition"})}
          if(data_arrr.includes('6')){setps_fet({checked: true, name : "ps"})}
          if(data_arrr.includes('7')){settv_fet({checked: true, name : "tv"})}
          if(data_arrr.includes('8')){setgrill_fe({checked: true, name : "grill"})}
          if(data_arrr.includes('9')){setjakozi_fet({checked: true, name : "jakozi"})}
          if(data_arrr.includes('10')){setparking_fet({checked: true, name : "parking"})}
          //setdump_arr(data_arrr)
          setfet_arrays(data_arrr)
        })
        .catch(err => {
          console.error(err);
        });
      },[])

      const updatedatafet = async (e)=>{
        e.preventDefault();
        console.log(fet_arrays)
         await axios.post(`http://localhost:5000/api/shaleh_user_details_update_fetu/${UserNameShalleh}`,{
          features : fet_arrays
          }).then((response)=>{
            if(response.data.message){
                alert(response.data.message);
            }
          })
      }
      
    return (
        <div> 
            
            <div className="title">
                <h3 >مميزات الشالية الرئيسية</h3>
                <h6>
                    يمكنك تشغيل او ايقاف الخاصية حسب ما يتوافق مع الشالية الخاص بك
                </h6>
                <p>في حال كان لديك اضافات لم يتم ذكرها قم باضافتها في وثف الشاليه <FiberManualRecordIcon  style={{ color: 'green', fontSize: '15px' }} /></p>
            </div>
            <form onSubmit={updatedatafet}>
                <div className="row mt-4 ">
                <div className="col-md-3 mt-2 felx_adjust">
                    <div className='felx_adjust_icons_fet'>
                        <Switch
                            onChange={(event)=>{
                                setwifi_fet({ ...wifi_fet, [event.target.name] : event.target.checked })
                                if(event.target.checked == true){
                                    if(!fet_arrays.includes('1'))
                                    {
                                    fet_arrays.push('1')
                                    }
                                }
                                else{
                                    let index = fet_arrays.indexOf('1');
                                    if (index > -1) {
                                        fet_arrays.splice(index, 1);
                                    }
                                }
                            }} 
                            name="checked"
                            checked={wifi_fet.checked} 
                        />
                    </div>  
                    <div>
                        <i className="fa-solid fa-wifi center_them_link_adj"></i><div>توفر اتصال بالانترنت</div>
                    </div>
                </div>
                <div className="col-md-3 mt-2 felx_adjust">
                    <div className='felx_adjust_icons_fet'>
                        <Switch
                            onChange={(event)=>{
                            setpool_fet({ ...pool_fet, [event.target.name]: event.target.checked })
                            if(event.target.checked == true){
                                if(!fet_arrays.includes('2'))
                                {
                                    fet_arrays.push('2')
                                }
                            }
                            else{
                                let index = fet_arrays.indexOf('2');
                                if (index > -1) {
                                    fet_arrays.splice(index, 1);
                                }
                            }
                        }}
                            name="checked"
                            checked={pool_fet.checked} 
                        />
                    </div>
                    <div>
                        <i className="fa-solid fa-person-swimming"></i><div>متوفر مسبح</div> 
                    </div>
                </div>
                <div className="col-md-3 mt-2 felx_adjust">
                    <div className='felx_adjust_icons_fet'>
                        <Switch
                            onChange={(event)=>{
                                setwheelchair_fet({ ...wheelchair_fet, [event.target.name]: event.target.checked })
                                if(event.target.checked == true){
                                    if(!fet_arrays.includes('3'))
                                    {
                                        fet_arrays.push('3')
                                    }
                                }
                                else{
                                    let index = fet_arrays.indexOf('3');
                                    if (index > -1) {
                                        fet_arrays.splice(index, 1);
                                    }
                                }
                            }}
                            name="checked"
                            checked={wheelchair_fet.checked} 
                        />
                    </div>
                    <div>
                        <i className="fa-solid fa-wheelchair"></i><div> مرافق مخصصة لاصحاب الاحتياجات الخاصة</div>
                    </div>
                </div>
                <div className="col-md-3 mt-2 felx_adjust">
                    <div className='felx_adjust_icons_fet'>
                        <Switch
                            onChange={(event)=>{
                            setpets_fet({ ...pets_fet, [event.target.name]: event.target.checked })
                            if(event.target.checked == true){
                                if(!fet_arrays.includes('4'))
                                {
                                    fet_arrays.push('4')
                                }
                            }
                            else{
                                let index = fet_arrays.indexOf('4');
                                if (index > -1) {
                                    fet_arrays.splice(index, 1);
                                }
                            }
                        }}
                            name="checked"
                            checked={pets_fet.checked} 
                        />
                    </div>
                    <div>
                        <i className="fa-solid fa-paw"></i><div> اصطحاب الحيوانات الاليفة </div>
                    </div>
                </div>
                </div>
                <div className="row mt-4">
                <div className="col-md-3 mt-2 felx_adjust">
                    <div className='felx_adjust_icons_fet'>
                        <Switch
                            onChange={(event)=>{
                                setcondition_fet({ ...condition_fet, [event.target.name]: event.target.checked })
                                if(event.target.checked == true){
                                    if(!fet_arrays.includes('5'))
                                    {
                                        fet_arrays.push('5')
                                    }
                                }
                                else{
                                    let index = fet_arrays.indexOf('5');
                                    if (index > -1) {
                                        fet_arrays.splice(index, 1);
                                    }
                                }
                            }
                            }  
                            name="checked"
                            checked={condition_fet.checked} 
                        />
                    </div>
                    <div>
                        <i className="fa-solid fa-snowflake"></i><div>توفر تكييف</div>
                    </div>
                
                </div>
                <div className="col-md-3 mt-2 felx_adjust">
                    <div className='felx_adjust_icons_fet'>
                        <Switch
                            onChange={(event)=>{
                            setps_fet({ ...ps_fet, [event.target.name]: event.target.checked })
                            if(event.target.checked == true){
                                if(!fet_arrays.includes('6'))
                                {
                                    fet_arrays.push('6')
                                }
                            }
                            else{
                                let index = fet_arrays.indexOf('6');
                                if (index > -1) {
                                    fet_arrays.splice(index, 1);
                                }
                            }
                        }}   
                            name="checked"
                            checked={ps_fet.checked} 
                        />
                    </div>
                    <div>
                        <i className="fa-brands fa-playstation f-icon"></i><div>توفر بليستيشن </div> 
                    </div>
                </div>
                <div className="col-md-3 mt-2 felx_adjust">
                    <div className='felx_adjust_icons_fet'>
                        <Switch
                            onChange={(event)=>{
                            settv_fet({ ...tv_fet, [event.target.name]: event.target.checked })
                            if(event.target.checked == true){
                                if(!fet_arrays.includes('7'))
                                {
                                    fet_arrays.push('7')
                                }
                            }
                            else{
                                let index = fet_arrays.indexOf('7');
                                if (index > -1) {
                                    fet_arrays.splice(index, 1);
                                }
                            }
                        }
                            
                        }   
                            name="checked"
                            checked={tv_fet.checked} 
                        />
                    </div>
                    <div>
                        <i className="fa-solid fa-tv"></i><div> توفر تلفاز</div>
                    </div>
                </div>
                <div className="col-md-3 mt-2 felx_adjust">
                    <div className='felx_adjust_icons_fet'>
                        <Switch
                            onChange={(event)=>{
                            setgrill_fe({ ...grill_fe, [event.target.name]: event.target.checked })
                            if(event.target.checked == true){
                                if(!fet_arrays.includes('8'))
                                {
                                    fet_arrays.push('8')
                                }
                            }
                            else{
                                let index = fet_arrays.indexOf('8');
                                if (index > -1) {
                                    fet_arrays.splice(index, 1);
                                }
                            }
                        }} 
                            name="checked"
                            checked={grill_fe.checked} 
                        />
                    </div>
                    <div>
                        <i className="fa-regular fa-grill f-icon"> <OutdoorGrillIcon/></i> <div> توفر منطقة شواء</div>
                    </div>
                
                </div>
                </div>
                <div className="row mt-4">
                <div className="col-md-3 mt-2 felx_adjust ">
                    <div className='felx_adjust_icons_fet'>
                        <Switch
                            onChange={(event)=>{
                            setjakozi_fet({ ...jakozi_fet, [event.target.name]: event.target.checked })
                            if(event.target.checked == true){
                                if(!fet_arrays.includes('9'))
                                {
                                    fet_arrays.push('9')
                                }
                            }
                            else{
                                let index = fet_arrays.indexOf('9');
                                if (index > -1) {
                                    fet_arrays.splice(index, 1);
                                }
                            }
                        }}
                            name="checked"
                            checked={jakozi_fet.checked}   
                        />    
                    </div>
                    <div>
                        <i className="fa-regular fa-grill f-icon"> <HotTubIcon /></i><div> جاكوزي</div>
                    </div>
                </div>
                <div className="col-md-3 mt-2 felx_adjust">
                    <div className='felx_adjust_icons_fet'>
                        <Switch
                            onChange={(event)=>{
                            setparking_fet({ ...parking_fet, [event.target.name]: event.target.checked })
                            if(event.target.checked == true){
                                if(!fet_arrays.includes('10'))
                                {
                                    fet_arrays.push('10')
                                }
                            }
                            else{
                                let index = fet_arrays.indexOf('10');
                                if (index > -1) {
                                    fet_arrays.splice(index, 1);
                                }
                            }
                        }}
                            name="checked"
                            checked={parking_fet.checked}   
                        /> 
                    </div>   
                    <div>
                        <i className="fa-regular fa-grill f-icon"> <LocalParkingIcon /></i> <div>موقف سيارات </div>
                    </div>
                    
                </div>

                </div>
                <Button type='submit' variant="contained" size="medium" className='mt-4 button_fix_shape'>
                    حفظ مميزات الشاليه
                </Button>
            </form>
        </div>
    )
}
