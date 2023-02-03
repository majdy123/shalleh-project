import React, { useState } from 'react'
import './gallery.css'
import AddImage from './add-image1.svg'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useEffect } from 'react';
import { ImageList } from '@mui/material';
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import axios from "axios";
import ImageDisplay from './ImageDisplay'

function removeimage(){
  document.getElementById("prim_img").value = "";
  document.getElementById("prim_img_render").src = " ";
}
function removeimage_1(){
  document.getElementById("sec_img_1").value = "";
  document.getElementById("prim_img_render_1").src = " ";
}
function removeimage_2(){
  document.getElementById("sec_img_2").value = "";
  document.getElementById("prim_img_render_2").src = " ";
}
function removeimage_3(){
  document.getElementById("sec_img_3").value = "";
  document.getElementById("prim_img_render_3").src = " ";
}
function removeimage_4(){
  document.getElementById("sec_img_4").value = "";
  document.getElementById("prim_img_render_4").src = " ";
}
function removeimage_5(){
  document.getElementById("sec_img_5").value = "";
  document.getElementById("prim_img_render_5").src = " ";
}
function removeimage_6(){
  document.getElementById("sec_img_6").value = "";
  document.getElementById("prim_img_render_6").src = " ";
}
export default function Gallery() {
  const UserName = localStorage.getItem("UserName")
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [images ,setimages] = useState('');
  const [imageURLs , setimageURLs]= useState(' ');

  useEffect(()=>{
    if (images) {
      const reader = new FileReader();
      reader.readAsDataURL(new Blob([images]));
      reader.onload = () => {
        setimageURLs(reader.result);
      };
    }
  }, [images])

  function onImageChange(e){
    setimages(e.target.files[0])
    setState({ ...state, [e.target.name]: e.target.files[0] });
  }
  //******************************coming to 6 sec photos  ***************************/
  //1
  const [images_1 ,setimages_1] = useState('');
  const [imageURLs_1 , setimageURLs_1]= useState(' ');

  useEffect(()=>{
    if (images_1) {
      const reader = new FileReader();
      reader.readAsDataURL(new Blob([images_1]));
      reader.onload = () => {
        setimageURLs_1(reader.result);
      };
    }
  }, [images_1])

  function onImageChange_1(e){
    setimages_1(e.target.files[0])
    setState({ ...state, [e.target.name]: e.target.files[0] });
  }
   //2
   const [images_2 ,setimages_2] = useState( );
   const [imageURLs_2 , setimageURLs_2]= useState(' ');
 
   useEffect(()=>{
    if (images_2) {
      const reader = new FileReader();
      reader.readAsDataURL(new Blob([images_2]));
      reader.onload = () => {
        setimageURLs_2(reader.result);
      };
    }
  }, [images_2])

  function onImageChange_2(e){
    setimages_2(e.target.files[0])
    setState({ ...state, [e.target.name]: e.target.files[0] });
  }
  //3
  const [images_3 ,setimages_3] = useState( );
  const [imageURLs_3 , setimageURLs_3]= useState( ' ');

  useEffect(()=>{
   if (images_3) {
     const reader = new FileReader();
     reader.readAsDataURL(new Blob([images_3]));
     reader.onload = () => {
       setimageURLs_3(reader.result);
     };
   }
 }, [images_3])

 function onImageChange_3(e){
   setimages_3(e.target.files[0])
   setState({ ...state, [e.target.name]: e.target.files[0] });
 }
  //4
  const [images_4 ,setimages_4] = useState( );
  const [imageURLs_4, setimageURLs_4]= useState( ' ');

  useEffect(()=>{
    if (images_4) {
      const reader = new FileReader();
      reader.readAsDataURL(new Blob([images_4]));
      reader.onload = () => {
        setimageURLs_4(reader.result);
      };
    }
  }, [images_4])
 
  function onImageChange_4(e){
    setimages_4(e.target.files[0])
    setState({ ...state, [e.target.name]: e.target.files[0] });
  }
  //5
  const [images_5 ,setimages_5] = useState( );
  const [imageURLs_5 , setimageURLs_5]= useState(' ');

  useEffect(()=>{
    if (images_5) {
      const reader = new FileReader();
      reader.readAsDataURL(new Blob([images_5]));
      reader.onload = () => {
        setimageURLs_5(reader.result);
      };
    }
  }, [images_5])
 
  function onImageChange_5(e){
    setimages_5(e.target.files[0])
    setState({ ...state, [e.target.name]: e.target.files[0] });
  }
  //6
  const [images_6 ,setimages_6] = useState( );
  const [imageURLs_6 , setimageURLs_6]= useState( ' ');

  useEffect(()=>{
    if (images_6) {
      const reader = new FileReader();
      reader.readAsDataURL(new Blob([images_6]));
      reader.onload = () => {
        setimageURLs_6(reader.result);
      };
    }
  }, [images_6])
 
  function onImageChange_6(e){
    setimages_6(e.target.files[0])
    setState({ ...state, [e.target.name]: e.target.files[0] });
    console.log(state)
  }

  //**************************************************Load Photos**************** "http://localhost:5000/uploads/${}_prim.jpg" */
  
  const [photos, setPhotos] = useState([]);
  const [prim_img , setprim_img] = useState(`http://localhost:5000/uploads/${UserName}_prim.jpg`);
  const [sec1_img , setsec1_img] = useState(`http://localhost:5000/uploads/${UserName}_sec1.jpg`);
  const [sec2_img , setsec2_img] = useState(`http://localhost:5000/uploads/${UserName}_sec2.jpg`);
  const [sec3_img , setsec3_img] = useState(`http://localhost:5000/uploads/${UserName}_sec3.jpg`);
  const [sec4_img , setsec4_img] = useState(`http://localhost:5000/uploads/${UserName}_sec4.jpg`);
  const [sec5_img , setsec5_img] = useState(`http://localhost:5000/uploads/${UserName}_sec5.jpg`);
  const [sec6_img , setsec6_img] = useState(`http://localhost:5000/uploads/${UserName}_sec6.jpg`);  
  
  const [prim_img_obj , setprim_img_obj] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:5000/api/serving_photo/${UserName}`);
      setPhotos(response.data);
    }
    fetchData();
    //******************************************************************************** */
    //******************************************************************************** */
  
    //setState({ ...state, ["Prim_img"]: prim_img_obj}); 
    console.log(state) 
    //array ready to shows photo based on profile now we need to load this array from server
  }, []);

  console.log(state)

  //**************************************************Load Photos**************** */
  const handleimg_upload = async (e)=>{
    e.preventDefault();
    setLoading(true)
    const formData = new FormData();
    formData.append("UserName" ,UserName);
    Object.values(state).forEach((value , index) => {
      formData.append(`photos`, value);
    });
    // console.log(formData)
    try{
      const response = await axios.post(`http://localhost:5000/api/upload`,formData,{
        headers: {
              'Content-Type': 'multipart/form-data'
        }
      });
      alert(response.data.message)
    }catch(error){
      //console.error(error);
    }finally {
      setLoading(false);
    }
  };
 
  return (
    <div>
      <form onSubmit={handleimg_upload} encType='multiple/form-data'>
        <h6 className='note'>لتعديل او اضافة صورة الرجاء الضغط على ايقونة الكميرا واختيار الصورة المناسبة </h6>
        <p className='note'><FiberManualRecordIcon  style={{ color: 'green', fontSize: '15px' }} />يمكن اضافة صورة واحدة لعرضها بشكل اساسي لكافة زوار الموقع و مجموعة محددة من الصور الثانوية لعرضها في معرض الصور </p>
        <div className=" gallery pb-2">
            <div className="col-md-3">
                <h2>صورة الشاليه الرئيسية</h2>
            </div>
            <div className="col-md-9 class_for_image_adjust">
            <span className='span_containerr'>
              <IconButton color="primary" aria-label="upload picture" component="label" className='uplode-button'>
                <input   name='Prim_img' id='prim_img' multiple accept="image/*" onChange={onImageChange} hidden  type="file" />
                <PhotoCamera />
              </IconButton>
              <a onClick={removeimage}><ImageNotSupportedIcon></ImageNotSupportedIcon> </a>
              {imageURLs ? (
                <div className='imagecontainer_render'><img id='prim_img_render' className='myimage_render' src={prim_img}  srcset={imageURLs}  /> </div>):(<p>No image selected</p>)}
            </span>
          </div>
           
        </div>
    <div className="row second-title"> 
        <div className="sec_shalleh_photo">
          <h4>صور الشاليه الثانوية</h4>
        </div>
    </div>
   
        <div className="row second-row class_row_adjust_cl">
            <div className="col-md-4 class_adjust_sec_photo">
            <span className='span_containerr'>
            <IconButton color="primary" aria-label="upload picture" component="label" className='uplode-button'>
              <input name='sec_1' id='sec_img_1' onChange={onImageChange_1}   hidden accept="image/*" type="file" />             
              <PhotoCamera />
            </IconButton>
              <a onClick={removeimage_1}><ImageNotSupportedIcon></ImageNotSupportedIcon> </a>
              {imageURLs_1 ? (
                <div className='imagecontainer_render'><img id='prim_img_render_1' className='myimage_render' src={sec1_img}  srcset={imageURLs_1} /></div>):(<p>No image selected</p>)}
            </span>
            </div>
            <div className="col-md-4 class_adjust_sec_photo">
            <span className='span_containerr'>
            <IconButton color="primary" aria-label="upload picture" component="label" className='uplode-button'>
              <input name='sec_2' id='sec_img_2'  onChange={onImageChange_2} hidden accept="image/*" type="file" />
              <PhotoCamera />
            </IconButton>
              <a onClick={removeimage_2}><ImageNotSupportedIcon></ImageNotSupportedIcon> </a>
              {imageURLs_2 ? (
                <div className='imagecontainer_render'><img id='prim_img_render_2' className='myimage_render'  src={sec2_img} srcset={imageURLs_2} /></div>):(<p>No image selected</p>)}
            </span>
            </div>
            <div className="col-md-4 class_adjust_sec_photo"> 
            <span className='span_containerr'>
            <IconButton color="primary" aria-label="upload picture" component="label" className='uplode-button'>
              <input name='sec_3'  id='sec_img_3' onChange={onImageChange_3}  hidden accept="image/*" type="file" />
              <PhotoCamera />
            </IconButton>
            <a onClick={removeimage_3}><ImageNotSupportedIcon></ImageNotSupportedIcon> </a>
            {imageURLs_3 ? (
                <div className='imagecontainer_render'><img id='prim_img_render_3' className='myimage_render'  src={sec3_img} srcset={imageURLs_3} /></div>):(<p>No image selected</p>)}
            </span>
            </div>
        </div>
        <div className="row second-row class_row_adjust_cl">
            <div className="col-md-4 class_adjust_sec_photo"> 
            <span className='span_containerr'>
            <IconButton color="primary" aria-label="upload picture" component="label" className='uplode-button'>
              <input name='sec_4'  id='sec_img_4' onChange={onImageChange_4}  hidden accept="image/*" type="file" />
              <PhotoCamera />
            </IconButton>
            <a onClick={removeimage_4}><ImageNotSupportedIcon></ImageNotSupportedIcon> </a>
            {imageURLs_4 ? (
                <div className='imagecontainer_render'><img id='prim_img_render_4' className='myimage_render'  src={sec4_img} srcset={imageURLs_4} /></div>):(<p>No image selected</p>)}
            </span>
            </div>
            <div className="col-md-4 class_adjust_sec_photo"> 
            <span className='span_containerr'>
            <IconButton color="primary" aria-label="upload picture" component="label" className='uplode-button'>
              <input name='sec_5'  id='sec_img_5'  onChange={onImageChange_5}  hidden accept="image/*" type="file" />
              <PhotoCamera />
            </IconButton>
            <a onClick={removeimage_5}><ImageNotSupportedIcon></ImageNotSupportedIcon> </a>
            {imageURLs_5 ? (
                <div className='imagecontainer_render'><img id='prim_img_render_5' className='myimage_render' src={sec5_img} srcset={imageURLs_5} /></div>):(<p>No image selected</p>)}
            </span>
            </div>
            <div className="col-md-4 class_adjust_sec_photo"> 
            <span className='span_containerr'>
            <IconButton color="primary" aria-label="upload picture" component="label" className='uplode-button'>
              <input name='sec_6'  id='sec_img_6' onChange={onImageChange_6}  hidden accept="image/*" type="file" />
              <PhotoCamera />
            </IconButton>
            <a onClick={removeimage_6}><ImageNotSupportedIcon></ImageNotSupportedIcon> </a>
            {imageURLs_6 ? (
                <div className='imagecontainer_render'><img id='prim_img_render_6' className='myimage_render'  src={sec6_img} srcset={imageURLs_6} /></div>):(<p>No image selected</p>)}
            </span>
            </div>
        </div>
        <div className="row save-btn">
            <div className="col-md-9">
              <Button type='submit' variant="contained" size="medium" className='mt-4 fs-3'>
                {loading ? 'يتم الحفظ...' : 'حفظ'}
              </Button>
            </div>
        </div>
      </form>
    </div>

  )
}
