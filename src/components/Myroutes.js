import Login from "./forms/Login";
import Signup from "./forms/Signup";
import Courses from "./Courses";
import Home from "./Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function Myroutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Courses" element={<Courses />} />
            </Routes>

        </Router>
    );
}

export default Myroutes;