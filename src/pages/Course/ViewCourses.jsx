import React, { useEffect, useState } from 'react';
import axios from 'axios';



//....Delete Course....//

const DeleteCourse = ({ courseId, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState(null);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await axios.delete(`http://localhost:8070/api/courses/${courseId}`);
      onDelete(courseId); // Notify parent component about the deletion
      console.log('Course deleted successfully');
    } catch (error) {
      setDeleteError(error.response.data.message || 'An error occurred while deleting the course');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div>
      {deleteError && <p>Error: {deleteError}</p>}
      <button onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
    </div>
  );
};

//.....ViewCourses...//

function ViewCourses() {
  const [courses, setCourses] = useState([]);

   
  useEffect(() => {
     fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
        const response = await axios.get("http://localhost:8070/api/courses/getall");
        if (response && response.data) {
            setCourses(response.data);
        } else {
            console.error("Empty response or missing data:", response);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};


  

  const handleDelete = (deletedCourseId) => {
    setCourses(prevCourses => prevCourses.filter(course => course._id !== deletedCourseId));
  };


  const handleViewOrder = (_id) => {
    // Construct the URL with the orderId
    const viewUpdatePageURL = `/update/${_id}`;
    // Navigate to the constructed URL
    window.location.href = viewUpdatePageURL;
  };
  const addNavigation = () => {
    // Construct the URL with the orderId
    const viewAddPageURL = `/addcourse`;
    // Navigate to the constructed URL
    window.location.href = viewAddPageURL;
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-4 sm:py-15 lg:px-8">
      <h1 className="text-3xl lg:text-4xl font-bold mb-8">All Courses</h1>
      <button onClick={addNavigation} style={{marginLeft:"1100px"}} type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">Add Course</button>
      <br></br> <br></br>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.length > 0 ? (
          courses.map((course) => {
            // Handle potential null or undefined values
            const base64String = course.image && course.image.data ? btoa(
              String.fromCharCode(...new Uint8Array(course.image.data.data))
            ) : '';
            return (
              <div key={course._id} className="relative bg-white rounded-lg shadow-md overflow-hidden">
                <div className="absolute top-0 right-0 z-10">
                  <button onClick={() => { console.log(course._id); handleViewOrder(course._id); }}  className ="text-blue-500 hover:text-blue-600 mr-2">
                    Edit 
                  </button>
                  <button className="text-red-500 hover:text-red-600">
                    <DeleteCourse courseId={course._id} onDelete={handleDelete}/>
                  </button>
                </div>
                <img src={`data:image/png;base64,${base64String}`} alt="Thumbnail"  className="w-full h-40 object-cover" />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-700">Category: {course.category}</p>
                    <p className="text-blue-500 font-bold">{course.price}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-lg text-center">No courses available</p>
        )}
      </div>
    </div>
  );
}
export default ViewCourses;
