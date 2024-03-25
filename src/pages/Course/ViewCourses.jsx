import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8070/api/courses/getall')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-4 sm:py-15 lg:px-8">
      <h1 className="text-2xl lg:text-4xl font-bold py-6">All Courses</h1>
      <div className="shadow-lg border-2 rounded-lg p-8">
        {courses.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr>
                <th>Category</th>
                <th>Title</th>
                <th>Description</th>
                <th>Resources</th>
                <th>Thumbnail</th>
                <th>Chapters</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {courses.map(course => (
                <tr key={course._id}>
                  <td>{course.category}</td>
                  <td>{course.title}</td>
                  <td>{course.description}</td>
                  <td>{course.resources}</td>
                  <td>
                    <img src={course.thumbnail} alt="Thumbnail" style={{ maxWidth: '100px' }} />
                  </td>
                  <td>{course.chapters}</td>
                  <td>{course.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No courses available</p>
        )}
      </div>
    </div>
  );
}

export default ViewCourses;
