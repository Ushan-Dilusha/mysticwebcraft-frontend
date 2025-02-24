import axios from "axios";
import React, { useState } from "react";
import AdminHeader from "../../components/header/AdminHeader";
import AdminSideNav from "../../components/AdminSideNav/SideNav";
import Footer from "../../components/footer/Footer";
import swal from 'sweetalert';

function AddCourse() {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [resources, setResources] = useState("");
  const [image, setImage] = useState("");
  const [chapters, setChapters] = useState("");
  const [price, setPrice] = useState("");

  function onChangeFile(e) {
    setImage(e.target.files[0]);
  }

  function changeOnClick(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("category", category);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("resources", resources);
    formData.append("chapters", chapters);
    formData.append("price", price);
    formData.append("image", image);

    axios
      .post("http://localhost:8070/api/courses", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        swal({
          title: "Course Added Successfully",
          text: " ",
          icon: "success",
          buttons: false, // Hide the "OK" button
        });
        setCategory("");
        setTitle("");
        setDescription("");
        setResources("");
        setChapters("");
        setTimeout(() => {
          window.location.href = "/courses"; // Redirect after a short delay
        }, 2500); // Adjust the delay as needed
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <>
       <AdminHeader />
      <AdminSideNav />
      <div className="flex justify-center pl-48" style={{ backgroundImage: "url('https://i.ibb.co/d2zHgWW/community.jpg')", // Set background image
        backgroundSize: "cover",
        backgroundPosition: "center",}}>
        <div className="w-full max-w-xl mt-10 mb-12">
          <h1 className="mb-4 text-3xl font-bold">Add Course</h1>
          <div className="shadow-lg border-2 rounded-lg p-8">
            <form
              encType="multipart/form-data"
              onSubmit={changeOnClick}
              className="space-y-8"
            >
              <div>
                <label className="block text-lg lg:text-xl mb-2">
                  Category:
                  <input
                    type="text"
                    name="category"
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                    className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"
                    required // Add required attribute
                  />
                </label>
              </div>
              <div>
                <label className="block text-lg lg:text-xl mb-2">
                  Title:
                  <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"
                    required // Add required attribute
                  />
                </label>
              </div>
              <div>
                <label className="block text-lg lg:text-xl mb-2">
                  Description:
                  <textarea
                    name="description"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    className="w-full h-32 border rounded-lg p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"
                    required // Add required attribute
                  />
                </label>
              </div>
              {/* <div>
                <label className="block text-lg lg:text-xl mb-2">
                  Link:
                  <input
                    type="text"
                    name="link"
                    // value={link}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"
                    required // Add required attribute
                  />
                </label>
              </div> */}
              <div>
                <label className="block text-lg lg:text-xl mb-2">
                  Resources:
                  <input
                    type="text"
                    name="resources"
                    value={resources}
                    onChange={(e) => {
                      setResources(e.target.value);
                    }}
                    className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"
                    required // Add required attribute
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="block text-lg lg:text-xl mb-2">
                  Thumbnail:
                  <div className="flex items-center">
                    <input
                      type="file"
                      accept="image/*"
                      name="image"
                      onChange={onChangeFile}
                      className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"
                      required // Add required attribute
                    />
                  </div>
                </label>
              </div>
              <div>
                <label className="block text-lg lg:text-xl mb-2">
                  Chapters:
                  <input
                    type="text"
                    name="chapters"
                    value={chapters}
                    onChange={(e) => {
                      setChapters(e.target.value);
                    }}
                    className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"
                    required // Add required attribute
                  />
                </label>
              </div>
              <div>
                <label className="block text-lg lg:text-xl mb-2">
                  Price:
                  <input
                    type="text"
                    name="price"
                    value={price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"
                    required // Add required attribute
                  />
                </label>
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
      <Footer />
    </>
  );
}

export default AddCourse;
