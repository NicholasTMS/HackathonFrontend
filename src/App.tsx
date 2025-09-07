import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Course from "./pages/Courses.tsx"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Roadmaps from "./pages/Roadmaps"
import Teach from "./pages/Teach"
import TutorDashboard from "./pages/TutorDashboard"
import StudentDashboard from "./pages/StudentDashboard"
import CourseCreationForm from "./pages/CourseCreationForm"

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Course />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/roadmaps" element={<Roadmaps />} />
                <Route path="/teach" element={<Teach />} />
                <Route path="/tutordashboard" element={<TutorDashboard />} />
                <Route path="/coursecreationform" element={<CourseCreationForm />} />
                <Route path="/studentdashboard" element={<StudentDashboard />} />
            </Routes>
        </>
    )
}

export default App


// pnpm run dev - run in developer mode
// pnpm build - build in production mode when we want to push
// pnpm start - to view the built production build
