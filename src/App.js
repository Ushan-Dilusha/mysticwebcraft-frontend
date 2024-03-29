import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AdminDashboard from "./pages/adminDashboard/AdminDashboard";
import CommunityPage from "./pages/communityPage/CommunityPage";
import UserDashboard from "./pages/userDashboard/userDashboard";


function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    {/* add your pages path and link it */}
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/community" element={<CommunityPage />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/user" element={<UserDashboard />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
