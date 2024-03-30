import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ViewCoursesGraph, ViewQuizzesGraph, CommunityManagementPieChart, UserManagementChart } from "../../components/Charts/adminDashboardCharts";

function AdminDashboard() {
  const [selectedAdmin, setSelectedAdmin] = useState("course");

  const handleSidebarSelect = (adminType) => {
    setSelectedAdmin(adminType);
  };

  return (
    <div>
      {/* Header component */}
      <header className="flex items-center justify-between p-4 border-b-2">
        <div>
          <Link to="/admin" className="text-2xl font-semibold text-black ">
            MYSTIC<span className='text-blue-700'>WEB</span>CRAFT
          </Link>
        </div>
      </header>

      <div className="container p-4 mx-auto">
        <h2 className="mb-4 text-2xl font-semibold text-center">
          Admin Dashboard
        </h2>
        <br />
        <br />

        <div className="grid grid-cols-3 ">
          {/* Sidebar */}
          <Sidebar
            selectedAdmin={selectedAdmin}
            onSelect={handleSidebarSelect}
          />

          {/* Content based on selected admin */}
          <section className="w-4/5 p-4 mb-4 bg-white rounded-lg shadow">
            {selectedAdmin === "quiz" && (
              <div>
                <h3 className="mb-4 text-xl font-semibold">
                  Quiz Admin Actions
                </h3>
                <Link to="/addQuestion">
                  <button className="w-full px-4 py-2 mb-2 font-semibold text-black bg-blue-200 rounded-lg hover:bg-blue-300">
                    Add Question
                  </button>
                </Link>
                <Link to="/qadmin">
                  <button className="w-full px-4 py-2 mb-2 font-semibold text-black bg-blue-200 rounded-lg hover:bg-blue-300">
                    View Questions
                  </button>
                </Link>
                <Link to="/addQuiz">
                  <button className="w-full bg-blue-200 hover.bg-blue-300 text-black font-semibold py-2 px-4 rounded-lg mb-2">
                    Add Quiz
                  </button>
                </Link>
                <Link to="/qadminquizview">
                  <button className="w-full px-4 py-2 font-semibold text-black bg-blue-200 rounded-lg hover:bg-blue-300">
                    View Quizzes
                  </button>
                </Link>
                {/* Include the ViewQuizzesGraph component here */}
              </div>
            )}
            {selectedAdmin === "community" && (
              <div>
                <h3 className="mb-4 text-xl font-semibold">
                  Community Question Admin Actions
                </h3>
                <Link to="/community-add">
                  <button className="w-full px-4 py-2 mb-2 font-semibold text-black bg-blue-200 rounded-lg hover:bg-blue-300">
                    Add community Question
                  </button>
                </Link>
                <Link to="/community-view">
                  <button className="w-full px-4 py-2 mb-2 font-semibold text-black bg-blue-200 rounded-lg hover:bg-blue-300">
                    View Community Question
                  </button>
                </Link>
                {/* Include the ViewQuizzesGraph component here */}
              </div>
            )}
            {selectedAdmin === "course" && (
              <div>
                <h3 className="mb-4 text-xl font-semibold ">
                  Courses Admin Actions
                </h3>
                <Link to="/addcourse">
                  <button className="w-full px-4 py-2 mb-2 font-semibold text-black bg-blue-200 rounded-lg hover:bg-blue-300">
                    Create Course
                  </button>
                </Link>
                <Link to="/all">
                  <button className="w-full px-4 py-2 mb-2 font-semibold text-black bg-blue-200 rounded-lg hover:bg-blue-300">
                    Manage Courses
                  </button>
                </Link>
              </div>
            )}
          </section>
          <section className="p-4 bg-white rounded-lg ">
            {selectedAdmin === "quiz" && (
              <div>
                <ViewQuizzesGraph className="mt-5" />
              </div>
            )}
            {selectedAdmin === "course" && (
              <div>
                <ViewCoursesGraph className="mt-5" />
              </div>
            )}
            {selectedAdmin === "community" && (
              <div>
                <CommunityManagementPieChart className="mt-5" />
              </div>
            )}
            {selectedAdmin === "user" && (
              <div>
                <UserManagementChart className="mt-5" />
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

function Sidebar({ selectedAdmin = "", onSelect }) {
  const getButtonStyle = (adminType) => {
    return selectedAdmin === adminType
      ? "bg-blue-500 text-white py-3 px-6"
      : "bg-blue-200 text-black py-2 px-4";
  };

  return (
    <div className="w-2/5 p-4 mb-4 bg-white rounded-lg shadow">
      {" "}
      {/* Adjust width as needed */}
      <h3 className="mb-4 text-xl font-semibold">Admin Actions</h3>
      <button
        onClick={() => onSelect("course")}
        className={`${getButtonStyle(
          "course"
        )} hover:bg-blue-500 font-semibold rounded-lg mb-2 block w-full text-left`}
      >
        Course Management
      </button>
      <button
        onClick={() => onSelect("quiz")}
        className={`${getButtonStyle(
          "quiz"
        )} hover:bg-blue-500 font-semibold rounded-lg mb-2 block w-full text-left`}
      >
        Learning Management
      </button>
      <button
        onClick={() => onSelect("community")}
        className={`${getButtonStyle(
          "community"
        )} hover:bg-blue-500 font-semibold rounded-lg mb-2 block w-full text-left`}
      >
        Community Management
      </button>
      <button
        onClick={() => onSelect("user")}
        className={`${getButtonStyle(
          "user"
        )} hover:bg-blue-500 font-semibold rounded-lg mb-2 block w-full text-left`}
      >
        User Management
      </button>
    </div>
  );
}

export default AdminDashboard;
