import axios from "axios";
import React, { useState } from "react"; 
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function DisplayCourse() {
 

  return (
    <>
       <Header />
       <div className="container px-12 py-8 " style={{ maxWidth: "1425px" }}>

       <h1 className="text-3xl font-bold mb-8">All Courses</h1>
                        <div  style={{ height: "45px", display:"inline-block" , marginLeft:"20px"}}>
                          <input  style={{ width: "500px", height: "40px", color: "", marginTop: "20px",border:"2px solid grey",padding:"10px"}} type="text" className="form-control" placeholder="Search..."
                          />
                          <button style={{ marginTop: "5px", backgroundColor:"#1c4ed8",height:"40px",width:"40px"}}> <FontAwesomeIcon icon={faSearch} size="lg" style={{ color: "white" }} ></FontAwesomeIcon> </button>
                        </div>

     </div>
      <Footer />
    </>
  );
}

export default DisplayCourse;
