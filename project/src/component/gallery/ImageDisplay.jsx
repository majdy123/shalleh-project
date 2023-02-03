import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageDisplay = ({ src }) => {
  const [file, setFile] = useState(null);

  useEffect(() => {
    axios
      .get(src, { responseType: 'blob' })
      .then((response) => {
        setFile(new File([response.data], 'image.jpg'));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [src]);

  return file ? (
    <img src={URL.createObjectURL(file)} alt="Image from server" />
  ) : (
    <p>Loading...</p>
  );
};

export default ImageDisplay;
