import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import { Typography, Button, Upload, message } from 'antd';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const { Title, Paragraph } = Typography;

const ImageToTextConverter = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const extractText = async () => {
    if (image) {
      const result = await Tesseract.recognize(
        image,
        'eng', // Language code for English
        { logger: m => console.log(m) }
      );
      setText(result.data.text);
    } else {
      message.error('Please upload an image first');
    }
  };

  return (
    <><Header />
    <div style={{ padding: '20px' }}>
    <Title level={2} align="center">Image to Text Converter</Title>


     
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      
      {image && <img src={image} alt="Uploaded" style={{ maxWidth: '100%' }} />}

      <Button type="default" onClick={extractText} style={{ marginTop: '20px' }}>Extract Text</Button>
      <div style={{ marginTop: '20px' }}>
      <Title level={4}>Extracted Text:</Title>
        <Paragraph>{text}</Paragraph>
      </div>
       <Footer />
    </div></>
    
  );
};

export default ImageToTextConverter;
