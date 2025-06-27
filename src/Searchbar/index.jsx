import { MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchJobRoles, fetchJobs } from "../api_calls/Jobs/api";
import { useNavigate } from "react-router-dom";

const Searchbar = ({ handleSearch, handleChange, selection, setSelection }) => {
  const [jobs, setJobs] = useState([]);
  const queryParams = new URLSearchParams(location.search);
  // const [selection, setSelection] = useState({
  //   experience: "",
  //   jobRole: "",
  //   workType: "",
  //   location: "",
  // });

  const navigate = useNavigate();

  useEffect(() => {
    const getJobs = async () => {
      try {
        const jobsData = await fetchJobRoles();
        console.log("jobs data---->", jobsData);
        setJobs(jobsData);
      } catch (error) {
        console.error("Failed to fetch job roles:", error);
      }
    };
    getJobs();
  }, []);

  const handleClearFilters = () => {
    setSelection({
      experience: "",
      hiringPosition: "",
      workType: "",
      location: "",
    });
    navigate(`/job/get-jobs`);
    window.location.reload();
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
    {/* Job Role Select */}
    <Select
    name="hiringPosition"
    value={selection.hiringPosition}
    onChange={handleChange}
    className="w-[350px] h-[60px] pl-6 bg-white font-bold rounded-lg text-black text-lg outline-none capitalize"
    displayEmpty
  >
    <MenuItem value="" disabled>
      Job Role
    </MenuItem>
    {jobs.map((job) => (
      <MenuItem
        className="capitalize"
        key={job.id}
        value={job.hiringPosition}
      >
        {job.hiringPosition}
      </MenuItem>
    ))}
  </Select>

    {/* Job Type Select */}
    <Select
      name="workType"
      value={selection.workType}
      onChange={handleChange}
      className="w-[350px] h-[60px] pl-4 bg-white font-bold rounded-md text-black outline-none"
      displayEmpty
    >
      <MenuItem value="" disabled>
        Work Type
      </MenuItem>
      <MenuItem value="part-time">Part Time</MenuItem>
      <MenuItem value="full-time">Full Time</MenuItem>
      <MenuItem value="contract-based">Contract-Based</MenuItem>
    </Select>

    {/* Location Select */}
    <Select
      name="location"
      value={selection.location}
      onChange={handleChange}
      className="w-[350px] h-[60px] pl-4 bg-white font-bold rounded-md text-black outline-none"
      displayEmpty
    >
      <MenuItem value="" disabled>
        Location
      </MenuItem>
      <MenuItem value="remote">Remote</MenuItem>
      <MenuItem value="onsite">Onsite</MenuItem>
      <MenuItem value="hybrid">Hybrid</MenuItem>
      <MenuItem value="freelance">Freelance</MenuItem>
      <MenuItem value="shift">Shift</MenuItem>
    </Select>

    {/* Experience Select */}
    <Select
      name="experience"
      value={selection.experience}
      onChange={handleChange}
      className="w-[350] h-[60px] pl-4 bg-white font-bold rounded-md text-black outline-none"
      displayEmpty
    >
      <MenuItem value="" disabled>
        Experience
      </MenuItem>
      <MenuItem value="fresher">Fresher</MenuItem>
      <MenuItem value="junior-level">Junior Level</MenuItem>
      <MenuItem value="mid-level">Mid Level</MenuItem>
      <MenuItem value="senior-level">Senior Level</MenuItem>
    </Select>

    {/* Search Button */}
    <button
      onClick={handleSearch}
      className="w-[350px] h-[60px] bg-blue-500 rounded-md p-2 font-bold hover:bg-blue-700 text-white"
    >
      Search
    </button>

    <button
      onClick={handleClearFilters}
      className="w-[350px] h-[60px] bg-blue-500 rounded-md p-2 font-bold hover:bg-blue-700 text-white"
    >
      Clear Filters
    </button>
  </div>
  );
};

export default Searchbar;
