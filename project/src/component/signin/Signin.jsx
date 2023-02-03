import React, { Component, useRef ,useState , useEffect } from 'react';
import {Link} from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import './signin.css'
import Logo from './logo1.png'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';
import { useForm } from "react-hook-form";

export default function Signin() {

    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
      setOpen(true);
    };
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
    
    const action = (
      <React.Fragment >
        <Button color="primary" size="small" onClick={handleClose}>
          UNDO
        </Button>
        <IconButton
          size="small"
          aria-label="close"
          color="white"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );   
    const navigate = useNavigate(); 
    const [UserName , setUserName] = useState('');
    const [password ,setPass] = useState ('');
    const [LoginStatus , setLoginStatus] = useState('');

    const [message_alert , setmessage_alert] = useState('');
    const [message_add , setmessage_add] = useState('');
    const [message_error , setmessage_error] = useState('');


    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated_admin")|| false));
    const [authenticated_user, setauthenticated_user] = useState(localStorage.getItem(localStorage.getItem("authenticated_user")|| false));

    const handleSubmit =(e)=>{
      handleClick();
      e.preventDefault();
      axios.post("http://localhost:5000/api/check_admin",{
        UserName:UserName,
        password:password,
      }).then((response)=>{
        if(response.data.message){
          setLoginStatus(response.data.message)
          setUserName("")
          setPass("")
        }
        else{
          setLoginStatus(response.data[0].UserName)
          setauthenticated(true);
          localStorage.setItem("authenticated_admin", true);
          localStorage.setItem("UserName", response.data[0].UserName);
          navigate("/admin_auth");
        }
      })

      axios.post("http://localhost:5000/api/shaleh_user",{
        UserName:UserName,
        password:password,
      }).then((response)=>{
  
        if(response.data.message){
          setLoginStatus(response.data.message)
          setUserName("")
          setPass("")
        }
        else{
          setLoginStatus(response.data[0].UserName)
          setauthenticated_user(true);
          localStorage.setItem("authenticated_user", true);
          localStorage.setItem("UserName", response.data[0].UserName);
          navigate("/shaleh_user");
        }
      })
    }


    //*********************regester**********************/
    const [UserNameReg , setUserNameReg] = useState();
    const [passwordReg ,setPassReg] = useState ();
    const [EmaildReg ,setEmaildReg] = useState ();
    const [PhoneReg ,setPhoneReg] = useState ();
    const handleSubmitReg =(e)=>{
      handleClick()
      e.preventDefault();
      axios.post("http://localhost:5000/api/Insert_new_user",{
        UserNameReg:UserNameReg,
        passwordReg:passwordReg,
        EmaildReg:EmaildReg,
        PhoneReg,PhoneReg
      }).then((response)=>{
          if(response.data.Erorrmessage){
           setmessage_alert(response.data.message_alert) 
           setmessage_add(response.data.Erorrmessage)
            document.getElementById('username_reg').value="";
            document.getElementById('email_reg').value="";
            document.getElementById('password_reg').value="";
            document.getElementById('phoneReg').value="";
            setUserNameReg("");
            setPassReg("");
            setEmaildReg("");
            setPhoneReg("");
          }
          if(response.data.message){
            setmessage_alert(response.data.message_alert) 
            setmessage_add(response.data.message)
            document.getElementById('username_reg').value="";
            document.getElementById('email_reg').value="";
            document.getElementById('password_reg').value="";
            document.getElementById('phoneReg').value="";
            setUserNameReg("");
            setPassReg("");
            setEmaildReg("");
            setPhoneReg("");
          }
      })
    }
    const {register} = useForm();
    return (
      <div className='Ali_dev'>
          <div className="containerr" id='container'>
            <div className="form-container sign-up-container">
              <form onSubmit={handleSubmitReg} >
                <img className='image_sign' src={Logo}></img>
                <h1>انشاء حساب</h1>
                 
                <span>استعمل الايميل الشخصي لتسجيل حساب جديد</span>
                <input {...register("UserNameReg",{required :true})} id='username_reg' required value={UserNameReg} onChange={(e)=>setUserNameReg(e.target.value)} type="text" placeholder="الاسم" />
                <input {...register("EmaildReg",{required :true})}  id='email_reg' required value={EmaildReg} onChange={(e)=>setEmaildReg(e.target.value)} type="email" placeholder="الايميل" />
                <input {...register("PhoneReg",{required :true})}  id='phoneReg' required value={PhoneReg} onChange={(e)=>setPhoneReg(e.target.value)} type="number" placeholder="رقم الهاتف" />
                <input {...register("passwordReg",{required :true})}  id='password_reg' required value={passwordReg} onChange={(e)=>setPassReg(e.target.value)} type="password" placeholder="كلمة المرور" />
                <button className='button_signin' id='button_for_reg_new_client' type='submit' >تسجيل</button>
                
                <div className={"alert alert-"+message_alert+" alert-dismissable"}>
                    <button id='button_for_close_alert'  type="button" className="close button_signin" data-dismiss="alert" aria-hidden="true">x</button>
                      {message_add}
                </div>
              </form>
            </div>
            <div className="form-container sign-in-container">
              <form className='loginform' onSubmit={handleSubmit}>
                <img className='image_sign' src={Logo}></img>
                <h1>دخول</h1>
                <div className="social-container">
                  <a href="" className="social"><i className="fab fa-facebook-f"></i></a>
                  <a href="" className="social"><i className="fab fa-google-plus-g"></i></a>
                  <a href="" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span></span>

                <input required value={UserName} onChange={(e)=>setUserName(e.target.value)} type="" placeholder="اسم المستخدم" />
                <input required value={password} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="كلمة المرور" />

                {/* <p>نسيت كلمة المرور</p> */}
                <button className='button_signin' type='submit'>تسجيل دخول</button>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                  message={LoginStatus}
                  action={action}
                />
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h2 className='sign_text_panel_color'>مرحبا بدك مرة اخرة</h2>
                  <p>لمتابعة رحلتك في موقعنا قم بتسجيل الدخول </p>
                  <button className="ghost button_signin" onClick={fun} id="signIn">تسجيل دخول</button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h2 className='sign_text_panel_color'>مرحبا هل لديك شاليه ؟</h2>
                  <p>قم بتسجيل بياناتك و ابدا رحلتك معنا</p>
                  <button className="ghost button_signin" onClick={fun} id="signUp">تسجيل حساب</button>
                </div>
              </div>
            </div>
          </div>
    </div>
    )
}
function fun(){
 
  const signUpButton = document.getElementById('signUp');
	const signInButton = document.getElementById('signIn');
	const container = document.getElementById('container');

	signUpButton.addEventListener('click', () => {
		container.classList.add("right-panel-active");
    
	});

	signInButton.addEventListener('click', () => {
 
		container.classList.remove("right-panel-active");
	});
}