import React from "react";
import { Link } from "react-router-dom";
import { RiDashboard3Line } from "react-icons/ri";
import { PiStudentBold } from "react-icons/pi";
import { GiBookshelf } from "react-icons/gi";
import { MdOutlineForum, MdOutlineSettings } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

function AdminSideNav() {
  return (
      <div class="fixed flex flex-col top-0 pt-4 left-0 w-64 bg-white h-full border-r">
        <div class="flex items-center justify-center h-14 border-b">
          <div>
            <Link to="/admin" className="text-2xl font-semibold text-black ">
              MYSTIC<span className="text-blue-700">WEB</span>CRAFT
            </Link>
          </div>
        </div>
        <div class="overflow-y-auto overflow-x-hidden flex-grow">
          <ul class="flex flex-col py-4 space-y-1">
            <li class="px-5">
              <div class="flex flex-row items-center h-8">
                <div class="text-sm font-light tracking-wide text-gray-500">
                  Admin Dashboard
                </div>
              </div>
            </li>
            <li>
            <Link to="/admin"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4"><RiDashboard3Line /></span>
                <span class="ml-2 text-sm tracking-wide truncate">
                  Dashboard
                </span>
              </Link>
            </li>
            <li class="px-5">
              <div class="flex flex-row items-center h-8">
                <div class="text-sm font-light tracking-wide text-gray-500">
                  Course Mangement
                </div>
              </div>
            </li>
            <li>
            <Link to="/courses"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4"><PiStudentBold /></span>
                <span class="ml-2 text-sm tracking-wide truncate">Courses</span>
              </Link>
            </li>
            <li>
            <Link to="/quiz"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4"><GiBookshelf /></span>
                <span class="ml-2 text-sm tracking-wide truncate">
                  Quiz
                </span>
              </Link>
            </li>
            <li class="px-5">
              <div class="flex flex-row items-center h-8">
                <div class="text-sm font-light tracking-wide text-gray-500">
                Community Mangement
                </div>
              </div>
            </li>
            <li>
            <Link to="/community-view"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4"><MdOutlineForum/></span>
                <span class="ml-2 text-sm tracking-wide truncate">
                  Community Details
                </span>
              </Link>
            </li>
            <li class="px-5">
              <div class="flex flex-row items-center h-8">
                <div class="text-sm font-light tracking-wide text-gray-500">
                User Management
                </div>
              </div>
            </li>
            <li>
            <Link to="/Profile"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4"><FaRegUserCircle/></span>
                <span class="ml-2 text-sm tracking-wide truncate">Profile</span>
              </Link>
            </li>
            <li>
            <Link to="/Setting"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4"><MdOutlineSettings/></span>
                <span class="ml-2 text-sm tracking-wide truncate">
                  Settings
                </span>
              </Link>
            </li>
            <li>
              <Link to='/logout'
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4"><FiLogOut/></span>
                <span class="ml-2 text-sm tracking-wide truncate">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
  );
}

export default AdminSideNav;
