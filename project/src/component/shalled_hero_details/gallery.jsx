import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './style_gallery.css';
 
import img1 from './test_gallery/1.png'
import img2 from './test_gallery/2.png'
import img3 from './test_gallery/3.png'
import img4 from './test_gallery/4.png'
import ImageGallery from 'react-image-gallery';


export default function gallery(props) {
  const UserName = props.UserName;
  const Link_photo_prim = "http://localhost:5000/uploads/"+UserName+"_prim.jpg";
  const Link_photo_sec1 = "http://localhost:5000/uploads/"+UserName+"_sec1.jpg";
  const Link_photo_sec2 = "http://localhost:5000/uploads/"+UserName+"_sec2.jpg";
  const Link_photo_sec3 = "http://localhost:5000/uploads/"+UserName+"_sec3.jpg";
  const Link_photo_sec4 = "http://localhost:5000/uploads/"+UserName+"_sec4.jpg";
  const Link_photo_sec5 = "http://localhost:5000/uploads/"+UserName+"_sec5.jpg";
  const Link_photo_sec6 = "http://localhost:5000/uploads/"+UserName+"_sec6.jpg";
  const images = [
    {
      original:  Link_photo_prim,
      thumbnail:  Link_photo_prim,
    },
    {
      original:  Link_photo_sec1,
      thumbnail:  Link_photo_sec1,
    },
    {
      original:  Link_photo_sec2,
      thumbnail:  Link_photo_sec2,
    },
    {
      original:  Link_photo_sec3,
      thumbnail: Link_photo_sec3,
    },
    {
      original: Link_photo_sec4,
      thumbnail: Link_photo_sec4,
    },
    {
      original:  Link_photo_sec5,
      thumbnail: Link_photo_sec5,
    },
    {
      original: Link_photo_sec6,
      thumbnail: Link_photo_sec6,
    },
  ];
  return (
    <>
      <ImageGallery className='Image_design_gallery' items={images} />
    </>      
  )
}

