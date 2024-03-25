import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AddCourse() {

  const [formData, setFormData] = useState({
    category: '',
    title: '',
    description: '',
    resources: '',
    thumbnail: '',
    chapters: '',
    price: ''
  });

  useEffect(() => {
    // Add any initialization logic here if needed
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:1337/courses/add', formData)
      .then((response) => {
        console.log('Course added successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error adding course:', error);
      });
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-4 sm:py-15 lg:px-8 flex items-center">
      <div className="w-2/3 p-8">
        <h1 className="text-2xl lg:text-4xl font-bold py-6">Add Course</h1>
        <div className="shadow-lg border-2 rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-lg lg:text-xl mb-2">Category:</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-lg lg:text-xl mb-2">Title:</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-lg lg:text-xl mb-2">Description:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full h-32 border rounded-lg p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-lg lg:text-xl mb-2">Resources:</label>
              <input
                type="text"
                name="resources"
                value={formData.resources}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-lg lg:text-xl mb-2">Thumbnail:</label>
              <input
                type="text"
                name="thumbnail"
                value={formData.thumbnail}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-lg lg:text-xl mb-2">Chapters:</label>
              <input
                type="text"
                name="chapters"
                value={formData.chapters}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-lg lg:text-xl mb-2">Price:</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCourse;
