import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AdminDashboard from "./pages/adminDashboard/AdminDashboard";
import AddCourse from "./pages/Course/AddCourse";
import ViewCourses from "./pages/Course/ViewCourses";



function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    {/* add your pages path and link it */}
                    <Route path="/admindashboard" element={<AdminDashboard />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/addcourse" element={<AddCourse />} />
                    <Route path="/all" element={<ViewCourses />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
