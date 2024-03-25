import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AdminDashboard from "./pages/adminDashboard/AdminDashboard";
import AddCourse from "./pages/Course/AddCourse";



function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    {/* add your pages path and link it */}
                    <Route path="/admindashboard" element={<AdminDashboard />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/addcourse" element={<AddCourse />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
