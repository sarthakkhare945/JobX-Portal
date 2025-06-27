import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../../pages/Homepage/Homepage";
import RecruiterJobs from "../../pages/RecruiterJobPage/RecruiterJobs";
import Create from "../../pages/RecruiterJobPage/create_job/Create";
import Edit from "../../pages/RecruiterJobPage/edit_job/Edit";
import Profile from "../../pages/profile/Profile";
import JobRole from "../../pages/JobRole/JobRole";

const SettingsPage = () => <div>Settings Content</div>;

const MainContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/jobs/list" element={<RecruiterJobs />} />
      <Route path="/jobs-create" element={<Create />} />
      <Route path="/edit-job/:id" element={<Edit />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/job-role" element={<JobRole />} />

      {/* Add more routes as needed */}
    </Routes>
  );
};

export default MainContent;
