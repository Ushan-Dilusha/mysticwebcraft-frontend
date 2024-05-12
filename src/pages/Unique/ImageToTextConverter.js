import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import { Typography, Button, Upload, message } from 'antd';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import headerImageURL from './logo.png';
import headerImageURL2 from './logo2.png';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const { Title, Paragraph } = Typography;

const ImageToTextConverter = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [extractButtonVisible, setExtractButtonVisible] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setExtractButtonVisible(true);
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

  const generatePDF = () => {
    const pdf = new jsPDF();
    const imgWidth = 150;
    const imgHeight = 100;
    pdf.addImage(headerImageURL2, 'PNG', 25, 5, 10, 10);
    pdf.addImage(headerImageURL, 'PNG', 35, 0, 50, 20);
   
    
    // Add image
    if (image) {
      pdf.addImage(image, 'JPEG', 15, 30, imgWidth, imgHeight);
    }
  
    // Add mall name
   
    
const heading="Extracted Text : "
pdf.setFontSize(13);
pdf.text(heading, 25, 140);
    
    // Add extracted text
    pdf.setFontSize(10);
    pdf.text(text, 25, 155);
  
    pdf.save('MYSTRICWEBCRAFT_Extracted_Text.pdf');
  };

  return (
    <>
      <Header />
      <div style={{ padding: '20px' }}>
        <Title level={2} align="center">Image to Text Converter</Title>
        <div>
          <button style={{marginLeft:"1070px", display: extractButtonVisible ? 'block' : 'none'}} className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200" onClick={generatePDF} > <FontAwesomeIcon icon={faDownload}/> Extract Text</button>
        </div>  
        <input style={{marginTop:"20px",marginBottom:"20px"}} type="file" accept="image/*" onChange={handleImageUpload} />
        {image && <img src={image} alt="Uploaded" style={{ maxWidth: '100%' }} />}
        {image && <Button type="default" onClick={extractText} style={{ marginTop: '20px' }}>Extract Text</Button>}
        <div style={{ marginTop: '20px' }}>
          <Title level={4}>Extracted Text:</Title>
          <Paragraph>{text}</Paragraph>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ImageToTextConverter;
