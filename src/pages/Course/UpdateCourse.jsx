import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function UpdateCourse() {

    const { id } = useParams();
    const [formData, setFormData] = useState({
        category: "",
        title: "",
        description: "",
        resources: "",
        chapters: "",
        price: "",
        image: null
    });

    useEffect(() => {
        axios.get(`http://localhost:8070/api/courses/${id}`)
            .then(response => {
                const courseData = response.data; // Renamed from shopData to courseData
                setFormData({
                    ...courseData, // Renamed from shopData to courseData
                    image: null
                });
            })
            .catch(error => {
                console.error('Error fetching course details:', error);
                alert("Error fetching course details. Please try again.");
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append("category", formData.category);
        formDataToSend.append("title", formData.title);
        formDataToSend.append("description", formData.description);
        formDataToSend.append("resources", formData.resources);
        formDataToSend.append("chapters", formData.chapters);
        formDataToSend.append("price", formData.price);
        formDataToSend.append("image", formData.image);

        axios.put(`http://localhost:8070/api/courses/update/${id}`, formDataToSend, {
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(() => {
                alert("Course details updated");
                window.location.href = "/all";
            })
            .catch((err) => {
                alert(err);
            });
    };

    return (
        <>
            <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-4 sm:py-15 lg:px-8 flex items-center">
                <div className="w-2/3 p-8">
                    <h1 className="text-2xl lg:text-4xl font-bold py-6">Update Course</h1>
                    <div className="shadow-lg border-2 rounded-lg p-8">
                        <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-8">
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
                                    className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-500 focus:border-blue-500 "
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-lg lg:text-xl mb-2">Thumbnail:</label>
                                <div className="flex items-center">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        name="image"
                                        onChange={handleFileChange}
                                        className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
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
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpdateCourse;
