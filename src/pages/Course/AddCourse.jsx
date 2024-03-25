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

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Add any initialization logic here if needed
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear errors when input changes
    setErrors({
      ...errors,
      [name]: null,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Add your validation logic here
    if (!formData.category.trim()) {
      newErrors.category = 'Category is required';
      valid = false;
    }

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
      valid = false;
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
      valid = false;
    }

    if (!formData.resources.trim()) {
      newErrors.resources = 'Resources is required';
      valid = false;
    }

    if (!formData.thumbnail.trim()) {
      newErrors.thumbnail = 'Thumbnail is required';
      valid = false;
    }

    if (!formData.chapters.trim()) {
      newErrors.chapters = 'Chapters is required';
      valid = false;
    }

    if (!formData.price.trim()) {
      newErrors.price = 'Price is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    axios
      .post('http://localhost:8070/api/courses', formData)
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
                className={`w-full border rounded-lg p-2 focus:ring focus:ring-blue-500 focus:border-blue-500 ${errors.category ? 'border-red-500' : ''}`}
              />
              {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
            </div>
            <div>
              <label className="block text-lg lg:text-xl mb-2">Title:</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={`w-full border rounded-lg p-2 focus:ring focus:ring-blue-500 focus:border-blue-500 ${errors.title ? 'border-red-500' : ''}`}
              />
              {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
            </div>
            <div>
              <label className="block text-lg lg:text-xl mb-2">Description:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className={`w-full h-32 border rounded-lg p-2 focus:ring focus:ring-blue-500 focus:border-blue-500 ${errors.description ? 'border-red-500' : ''}`}
              />
              {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
            </div>
            <div>
              <label className="block text-lg lg:text-xl mb-2">Resources:</label>
              <input
                type="text"
                name="resources"
                value={formData.resources}
                onChange={handleChange}
                className={`w-full border rounded-lg p-2 focus:ring focus:ring-blue-500 focus:border-blue-500 ${errors.resources ? 'border-red-500' : ''}`}
              />
              {errors.resources && <p className="text-red-500 text-sm">{errors.resources}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-lg lg:text-xl mb-2">Thumbnail:</label>
              <div className="flex items-center">
                <input
                  type="file"
                  accept="image/*"
                  name="thumbnail"
                  onChange={handleChange}
                  className={`w-full border rounded-lg p-2 focus:ring focus:ring-blue-500 focus:border-blue-500 ${errors.thumbnail ? 'border-red-500' : ''}`}
                />
              </div>
              {errors.thumbnail && <p className="text-red-500 text-sm">{errors.thumbnail}</p>}
            </div>    
            <div>
              <label className="block text-lg lg:text-xl mb-2">Chapters:</label>
              <input
                type="text"
                name="chapters"
                value={formData.chapters}
                onChange={handleChange}
                className={`w-full border rounded-lg p-2 focus:ring focus:ring-blue-500 focus:border-blue-500 ${errors.chapters ? 'border-red-500' : ''}`}
              />
              {errors.chapters && <p className="text-red-500 text-sm">{errors.chapters}</p>}
            </div>
            <div>
              <label className="block text-lg lg:text-xl mb-2">Price:</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className={`w-full border rounded-lg p-2 focus:ring focus:ring-blue-500 focus:border-blue-500 ${errors.price ? 'border-red-500' : ''}`}
              />
              {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
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
