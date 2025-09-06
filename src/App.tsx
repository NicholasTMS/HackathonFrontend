import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Course from "./pages/Course"

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/course" element={<Course />} />
            </Routes>
        </>
    )
}

export default App


// pnpm run dev - run in developer mode
// pnpm build - build in production mode when we want to push
// pnpm start - to view the built production build
