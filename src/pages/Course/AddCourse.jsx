import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AddCourse() {







//Add
const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [resources, setResources] = useState("");
  const [image, setImage] = useState("");
  const [chapters, setChapters] = useState("");
  const [price, setPrice] = useState("");



  function onChangeFile(e){
    setImage(e.target.files[0]);
  }
  
  
  
  function changeOnClick(e){
    e.preventDefault();   
  
    const formData = new FormData();
    formData.append("category", category);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("resources", resources);
    formData.append("chapters", chapters);
    formData.append("price", price);
    formData.append("image", image);
  
    axios.post("http://localhost:8070/api/courses", formData, {
      headers: {"Content-Type": "multipart/form-data"},
    }).then(() => {
      alert("Course details added");
      setCategory("");
      setTitle("");
      setDescription("");
      setResources("");
      setChapters("");
      setPrice("");
      window.location.href = "/all";
    }).catch((err) => {
      alert(err);
    });
  }
  

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-4 sm:py-15 lg:px-8 flex items-center">
      <div className="w-2/3 p-8">
        <h1 className="text-2xl lg:text-4xl font-bold py-6">Add Course</h1>
        <div className="shadow-lg border-2 rounded-lg p-8">
          <form   encType="multipart/form-data"  onSubmit={changeOnClick} className="space-y-8">
            <div>
              <label className="block text-lg lg:text-xl mb-2">Category:</label>
              <input
                type="text"
                name="category"
                value={category}
                onChange={(e)=>{setCategory(e.target.value)}}
                className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"/>
            </div>
            <div>
              <label className="block text-lg lg:text-xl mb-2">Title:</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e)=>{setTitle(e.target.value)}}
                className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"/> 
            </div>
            <div>
              <label className="block text-lg lg:text-xl mb-2">Description:</label>
              <textarea
                name="description"
                value={description}
                onChange={(e)=>{setDescription(e.target.value)}}
                className="w-full h-32 border rounded-lg p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"/> 
            </div>
            <div>
              <label className="block text-lg lg:text-xl mb-2">Resources:</label>
              <input
                type="text"
                name="resources"
                value={resources}
                onChange={(e)=>{setResources(e.target.value)}}
                className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-500 focus:border-blue-500 "/>
            </div>

            <div className="mb-4">
              <label className="block text-lg lg:text-xl mb-2">Thumbnail:</label>
              <div className="flex items-center">
                <input
                  type="file"
                  accept="image/*"
                  name="image"
                  onChange={onChangeFile}
                  className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"/>
                
              </div>
            
            </div>    
            <div>

              
              <label className="block text-lg lg:text-xl mb-2">Chapters:</label>
              <input
                type="text"
                name="chapters"
                value={chapters}
                onChange={(e)=>{setChapters(e.target.value)}}
                className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"/>
                 
            </div>
            <div>
              <label className="block text-lg lg:text-xl mb-2">Price:</label>
              <input
                type="text"
                name="price"
                value={price}
                onChange={(e)=>{setPrice(e.target.value)}}
                className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"/>
                

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
