import React, { Component, useRef ,useState , useEffect } from 'react';
import './primaryinfo.css'
import StatisticsCard from '../statisticsCard/StatisticsCard'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PaidIcon from '@mui/icons-material/Paid';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PreviewIcon from '@mui/icons-material/Preview';
import Tooltip from '@mui/material/Tooltip';
import axios from "axios";
import Calender from './calender'
export default function PrimaryInfo() {
    var UserNameShalleh =localStorage.getItem("UserName");
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [cost_per_night, setcost_per_night] = useState('');
    const [desc, setdesc] = useState('');
    const [Address, setAddress] = useState('');
    const [location, setlocation] = useState('');
    const [calender_days, setcalender_days] = useState('');
    const [shalleh_name, setshalleh_name] = useState('');
    const [number_of_visit, setnumber_of_visit] = useState('');
    const [data_details , setdata_details] = useState([]);

    const regex = /^\d+(,\d+)*$/;
    const handleChangeincalender = event => {
      let newValue = event.target.value;
    let lastChar = newValue[newValue.length - 1];
    if (regex.test(newValue) || lastChar === "," || newValue === "") {
        setcalender_days(newValue);
      }
    };


  const updatedatadet = async (e)=>{
    e.preventDefault();
     await axios.post(`http://localhost:5000/api/shaleh_user_details_update/${UserNameShalleh}`,{
      phone:phone,
      email:email,
      password:password,
      cost_per_night:cost_per_night,
      desc:desc,
      Address:Address,
      location:location,
      calender_days:calender_days,
      shalleh_name:shalleh_name,
      number_of_visit:number_of_visit
      }).then((response)=>{
        if(response.data.message){
          alert(response.data.message)
        }
        else{
           
        }
      })
  }

  useEffect(() => {
    axios.get(`http://localhost:5000/api/shaleh_user_details/${UserNameShalleh}`)
    .then(res => {
      const data_arrr = res.data;
      setdata_details(data_arrr)
      setphone(data_arrr[0].phone)
      setAddress(data_arrr[0].Address)
      setshalleh_name(data_arrr[0].shalleh_name)
      setdesc(data_arrr[0].desc)
      setpassword(data_arrr[0].password)
      setlocation(data_arrr[0].location)
      setemail(data_arrr[0].email)
      setcost_per_night(data_arrr[0].cost_per_night)
      setcalender_days(data_arrr[0].calender_days)
      setnumber_of_visit(data_arrr[0].number_of_visit)
    })
    .catch(err => {
      console.error(err);
    });
  },[])

  

  return (
    <div>
        {data_details.length > 0 ? (
          <div className='primary-info'>
    <div className="row card-view adjust_card-user_det">
      <div className="col-md-4 mt-1  ">
        <StatisticsCard icon={PaidIcon} col = 'success' name="?????? ?????????????????? ???????? ??????????" number= {data_details[0].calender_days.split(',').length}   />
      </div>

      <div className="col-md-4 mt-1  ">
      <StatisticsCard name="?????????????? ???????? ??????????" col='info' number= {(data_details[0].calender_days.split(',').length)*(data_details[0].cost_per_night)} icon={PreviewIcon}/>
        </div>

        <div className="col-md-4 mt-1  ">
        <StatisticsCard name="?????? ???????? ???????? ??????????????" col='error' number={data_details[0].number_of_visit} icon={PeopleAltIcon}/>
        </div>
    </div>
    <div className="main-info-form mt-5   p-2">
      <h4 className='primary_form'>?????????? ???? ?????????? ?????????????? ?????????????? </h4>
      <form className='form_body_adjust' onSubmit={updatedatadet}>
    <div className="row mt-2 input_slot_row">
      <div className="col-md-3" >
      <span className='label fs-3 form_data_tit'>??????????</span>
      </div>
      <div className="col-md-9">
      <TextField
        id="outlined-multiline-flexible"
        className='form_input_data'
        label="?????? ??????????????"
        onChange={(e)=>setshalleh_name(e.target.value)}
        value={shalleh_name}
        multiline
        maxRows={4}
      />
      </div>
    </div>
    <div className="row mt-2 input_slot_row">
      <div className="col-md-3">
      <span className='label fs-3 form_data_tit'>?????????? </span>
      </div>
      <div className="col-md-9 ">
      <Tooltip title="???????? ???? ???????????? ???? 1000 ??????">
        <TextField
          className='form_input_data_desc'
          id="outlined-multiline-flexible"
          inputProps={{ maxLength: 1000 }}
          label="?????? ??????????????"
          multiline
          onChange={(e)=>setdesc(e.target.value)}
          value={desc}
          minRows={6}
        />
        </Tooltip>
      </div>
    </div>
    <div className="row mt-2 input_slot_row">
      <div className="col-md-3">
      <span className='label fs-3 form_data_tit'>???????? ???????? </span>
      </div>
      <div className="col-md-9 ">
      <Tooltip title="???????? ????????????">
        <TextField
          className='form_input_data_desc'
          id="outlined-multiline-flexible"
          label="???????? ????????????"
          multiline
          maxRows={4}
          onChange={(e)=>setpassword(e.target.value)}
          value={password}
        />
        </Tooltip>
      </div>
    </div>
    <div className="row mt-2 input_slot_row">
      <div className="col-md-3">
      <span className='label fs-3 form_data_tit'>????????????</span>
      </div>
      <div className="col-md-9 ">
      <Tooltip title="???????????? ">
        <TextField
          className='form_input_data_desc'
          id="outlined-multiline-flexible"
          label="????????????"
          multiline
          maxRows={6}
          onChange={(e)=>setphone(e.target.value)}
          value={phone}
        />
        </Tooltip>
      </div>
    </div>
    <div className="row mt-2 input_slot_row">
      <div className="col-md-3"> 
      <span className='label fs-3 form_data_tit'>????????????</span>
      </div>
      <div className="col-md-9 ">
      <TextField
      className='form_input_data_desc'
        id="outlined-multiline-flexible"
        label="????????????"
        multiline
        onChange={(e)=>setlocation(e.target.value)}
        value={location}
        maxRows={4}
        
      />
      </div>
    </div>
    <div className="row mt-2 input_slot_row">
      <div className="col-md-3">
      <span className='label fs-3 form_data_tit'>??????????????</span>
      </div>
      <div className="col-md-9 ">
      <TextField
        className='form_input_data_desc'
        id="outlined-multiline-flexible"
        label="??????????????"
        multiline
        value={Address}
        onChange={(e)=>setAddress(e.target.value)}
        maxRows={4}
      />
      </div>
    </div>
    <div className="row mt-2 input_slot_row">
      <div className="col-md-3">
      <span className='label fs-3 form_data_tit'>??????????????</span>
      </div>
      <div className="col-md-9 ">
      <TextField
        className='form_input_data_desc'
        id="outlined-multiline-flexible"
        label="??????????????"
        value={email}
        onChange={(e)=>setemail(e.target.value)}
        multiline
        maxRows={4}
      />
      </div>
    </div>
    <div className="row mt-2 input_slot_row">
      <div className="col-md-3">
      <span className='label fs-3 form_data_tit'>??????????????</span>
      </div>
      <div className="col-md-9 ">
      <TextField
        className='form_input_data_desc'
        id="outlined-multiline-flexible"
        onChange={(e)=>setcost_per_night(e.target.value)}
        label="?????????? ??????????"
        value={cost_per_night}
        multiline
        maxRows={4}
      />
      </div>
     
    </div>
    <div className="row mt-2 input_slot_row">
      <div className="col-md-3">
      <span className='label fs-3 form_data_tit'>????????????????</span>
      </div>
      <div className="col-md-9 ">
      <TextField
      className='form_input_data_desc'
        id="outlined-multiline-flexible"
        label="????????????????"
        onChange={(e)=>setnumber_of_visit(e.target.value)}
        multiline
        value={number_of_visit}
        maxRows={4}
      />
      </div>
     
    </div>
    <div className="row mt-2 input_slot_row">
      <div className="col-md-3">
      <span className='label fs-3 form_data_tit'>???????????? ???????????????? ???? ?????????? </span>
      </div>
      <div className="col-md-9 ">
      <TextField
        className='form_input_data_desc'
        id="outlined-multiline-flexible"
        label="???????????? ???????????????? ???? ?????????? ????????????"
        onChange={handleChangeincalender}
        multiline
        value={calender_days}
        maxRows={4}
      />
      </div>
    </div>
    <div className='calender_in_user_reg'>
    <h6>???????????? ???????? ?????? ???????????? ???????? ?????????? ????????????</h6>
    <Calender   UserName = {UserNameShalleh} />
    </div>
    <div className='button_form_user'>
      <Button type='submit' variant="contained" size="medium" className='mt-4'>
        ??????
      </Button>
    </div>
    </form>
    </div>
    
          </div>
        ) : (
          <div>Erorr...</div>
        )}
    </div>
    
  )
}
