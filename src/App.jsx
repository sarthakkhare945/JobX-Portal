import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LandingPage from "./app/pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jobs from "./app/pages/Jobs/Jobs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JobProfile from "./app/pages/Jobs/JobProfile/JobProfile";
import Signup from "./app/pages/Auth/Signup";
import Login from "./app/pages/Auth/Login";
import Dashboard from "./app/pages/Employer_Dashboard/Dashboard/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {localStorage.getItem("token") ? (
            <Route path="/*" element={<Dashboard />} />
          ) : (
            <Route path="/" element={<LandingPage />} />
          )}

          <Route path="/job/get-jobs" element={<Jobs />} />
          <Route path="/job-list-profile/:id" element={<JobProfile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/employer/dashboard" element={<Dashboard/>} /> */}
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
