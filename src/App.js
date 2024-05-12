import "./App.css";
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
import CommunityUserHomePage from "./pages/CommunityUserPage/CommunityUserHomePage";
import CommunityAddUserPage from "./pages/communityPage/CommuityAddUser";
import CodeComplexityAnalyzer from "./pages/codeComplexity/codeComplexityPage";
import AddQuiz from "./pages/Quiz/AddQuiz";
import ViewQuizList from "./pages/Quiz/ViewQuizList";
import QuizOverview from "./pages/Quiz/QuizOverview";
import Qadminquizview from "./pages/Quiz/Qadminquizview";
import Question from "./components/question/Question";
import QuestionView from "./components/QuestionView";
import AddQuestion from "./pages/questionBank/AddQuestion";
import QuestionOverview from "./pages/Qadmin/QuestionOverview";
import UpdateQuestion from "./pages/questionBank/UpdateQuestion";
function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    {/* add your pages path and link it */}
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/community-view" element={<CommunityView />} />
                    <Route path="/community-add" element={<CommunityAddPage />} />
                    <Route path="/community-add-user" element={<CommunityAddUserPage />} />
                    <Route path="/community-update/:id" element={<CommunityUpdatePage />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/addcourse" element={<AddCourse />} />
                    <Route path="/courses" element={<ViewCourses />} />
                    <Route path="/update/:id" element={<UpdateCourse />} />
                    <Route path="/user" element={<UserDashboard />} />
                    <Route path="/img" element={<ImageToTextConverter />} />
                    <Route path="/community-home" element={<CommunityUserHomePage />} />
                    <Route path="/code-complexity" element={<CodeComplexityAnalyzer />} />
                    <Route path="/addQuiz" element={<AddQuiz/>} />
                    <Route path="/quizlist" element={<ViewQuizList/>} />
                    <Route path="/quiz/:quizSetId" element={<QuizOverview/>} />
                    <Route path="/qadminquizview" element={<Qadminquizview/>} />
                    <Route path="/qadmin" element={<QuestionOverview/>} />
                    <Route path="/questions" element={<Question/>} />
                    <Route path="/question/:questionId" element={<QuestionView/>} />
                    <Route path="/addQuestion" element={<AddQuestion/>} />
                    <Route path="/qadmin/updateQuestion/:questionId" element={<UpdateQuestion/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;