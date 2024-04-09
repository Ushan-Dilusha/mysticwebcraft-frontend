import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AdminDashboard from "./pages/adminDashboard/AdminDashboard";
import AddCourse from "./pages/Course/AddCourse";
import ViewCourses from "./pages/Course/ViewCourses";
import UpdateCourse from "./pages/Course/UpdateCourse";
import CommunityView from "./pages/communityPage/CommunitiesView";
import UserDashboard from "./pages/userDashboard/userDashboard";
import CommunityAddPage from "./pages/communityPage/CommuityAdd";
import CommunityUpdatePage from "./pages/communityPage/CommuityUpdate";
import ImageToTextConverter from "./pages/Unique/ImageToTextConverter";

import AdminHeader from "./pages/adminDashboard/AdminHeader"

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    {/* add your pages path and link it */}
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/community-view" element={<CommunityView />} />
                    <Route path="/community-add" element={<CommunityAddPage />} />
                    <Route path="/community-update/:id" element={<CommunityUpdatePage />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/addcourse" element={<AddCourse />} />
                    <Route path="/all" element={<ViewCourses />} />
                    <Route path="/update/:id" element={<UpdateCourse />} />
                    <Route path="/user" element={<UserDashboard />} />
                    <Route path="/img" element={<ImageToTextConverter />} />
                    <Route path="/header" element={<AdminHeader />} />

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;