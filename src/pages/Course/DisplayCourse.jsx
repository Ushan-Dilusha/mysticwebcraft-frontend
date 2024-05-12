import axios from "axios";
import React, { useState,useEffect } from "react"; 
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import "./display.css"
import "./model.css"

function DisplayCourse() {
    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCourse, setSelectedCourse] = useState(null);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8070/api/courses/getall"
        );
        if (response && response.data) {
          setCourses(response.data);
        } else {
          console.error("Empty response or missing data:", response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCourseClick = (course) => {
        console.log(selectedCourse)
        setSelectedCourse(course);
    };

    const closeModal = () => {
        setSelectedCourse(null);
    };
 
    

  return (
    <>
       <Header />
       <div className="container px-12 py-8 " style={{ maxWidth: "1800px" , backgroundImage: "url('https://i.ibb.co/d2zHgWW/community.jpg')", // Set background image
        backgroundSize: "cover",
        backgroundPosition: "center",}}>

       <h1 className="text-3xl font-bold mb-8">Available Courses</h1>
                        <div  style={{ height: "45px", display:"inline-block" , marginLeft:"20px"}}>
                          <input value={searchTerm} onChange={handleSearchChange} style={{ width: "500px", height: "40px", color: "", marginTop: "20px",border:"2px solid grey",padding:"10px"}} type="text" className="form-control" placeholder="Search..."
                          />
                          <button  style={{ marginTop: "5px", backgroundColor:"#1c4ed8",height:"40px",width:"40px"}}> <FontAwesomeIcon icon={faSearch} size="lg" style={{ color: "white" }} ></FontAwesomeIcon> </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" style={{marginTop:"50px"}}>
                        {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => {
              // Handle potential null or undefined values
              const base64String =
                course.image && course.image.data
                  ? btoa(
                      String.fromCharCode(
                        ...new Uint8Array(course.image.data.data)
                      )
                    )
                  : "";
              return (
                <div
                  key={course._id}
                  className="relative bg-white rounded-lg shadow-md overflow-hidden zoom-effect"
                  onClick={() => handleCourseClick(course)} 
                >
                  <img
                    src={`data:image/png;base64,${base64String}`}
                    alt="Thumbnail"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2">
                      {course.title}
                    </h2>
                   
                    <div className="flex justify-between items-center">
                      <p className="text-blue-500 font-bold">{course.price}</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-lg text-center loading-message">Loading...</p>
          )}
        </div>

     </div>
     {selectedCourse && (
  <div className="modal-overlay">
    <div className="modal">
      <button className="close-button" style={{color:"#1c4ed8"}} onClick={closeModal}>
        <FontAwesomeIcon icon={faClose} size="xl"/>
      </button>
      <h3 style={{marginTop:"20px"}} className="text-2xl font-bold mb-8"><b>{selectedCourse.title}</b></h3>
      {selectedCourse.image && selectedCourse.image.data && (
        <div style={{display:"flex"}}>
          <div>
            <img
              src={`data:image/png;base64,${btoa(
                String.fromCharCode(
                  ...new Uint8Array(selectedCourse.image.data.data)
                )
              )}`}
              alt="Thumbnail"
              style={{width: "400px", height: "auto"}}
            />
          </div>
         <div style={{width:"300px", marginLeft:"20px"}}>
          <h3 style={{color:"green"}}> <h2  style={{color:"black"}} ><b>CATEGORY :</b></h2><b>{selectedCourse.category}</b></h3>
          <br></br>
          {selectedCourse.description && (
  <>
    {selectedCourse.description.split(/(?=\n🚀|\n📕)/).map((line, index) => (
      <p key={index} dangerouslySetInnerHTML={{ __html: line.replace(
        /(https?:\/\/[^\s]+)/g,
        '<a href="$1" target="_blank" style="color: blue; text-decoration: underline;">$1</a>'
      )}}></p>
    ))}
   
  </>
)}

          <br></br>
          <p style={{color:"green"}}>Price: {selectedCourse.price}</p>
          </div>
        </div>
      )}
     
     
    </div>
  </div>
)}
      <Footer />
    </>
  );
}

export default DisplayCourse;
