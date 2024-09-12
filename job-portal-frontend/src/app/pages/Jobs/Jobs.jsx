import React, { useEffect, useState } from "react";
import Searchbar from "../../../Searchbar";
import JobsCard from "../../../components/Jobs/JobsCard";
import image from "../../../assets/jobbg1.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fetchJobs } from "../../../api_calls/Jobs/api";

const Jobs = () => {
  const [selection, setSelection] = useState({
    experience: "",
    hiringPosition: "",
    workType: "",
    location: "",
  });
  const [jobs, setjobs] = useState([]);

  const navigate = useNavigate();

  const handleSearch = async () => {
    const queryParams = new URLSearchParams({
      workType: selection.workType,
      workMode: selection.location,
      experience: selection.experience,
      position: selection.hiringPosition,
    }).toString();

    console.log("query params---------->", queryParams);
    const job = await fetchJobs(queryParams);
    console.log("jobs from jobs.jsx", job);
    setjobs(job);
    navigate(`/job/get-jobs?${queryParams}`);
  };

  useEffect(() => {
    const getJobs = async() => {
     
      const job = await fetchJobs();
    console.log("jobs from default.jsx", job);
    
    setjobs(job);
    };
    getJobs();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSelection((prevSelection) => ({
      ...prevSelection,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="bg-[#fff] min-h-[45vh] py-12 px-4 md:px-6 md:py-20 flex flex-col md:flex-row gap-5 items-center justify-center">
        <div className="hidden flex-1 md:flex justify-center items-center">
          <motion.img
            initial={{ x: -200, opacity: 0 }} // Start further off-screen and fully transparent
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5, // Delay before the animation starts
              x: { type: "spring", stiffness: 60, damping: 20, duration: 1.5 }, // Slower and less bouncy effect
              opacity: { duration: 1, ease: "easeIn" }, // Smooth fade-in effect
            }}
            src={image}
            alt="Job Search"
            className="w-full h-[70vh] md:max-w-[600px]"
          />
        </div>
        <motion.div
          className="flex-1 flex flex-col gap-5 items-center md:items-start"
          initial={{ x: 200, opacity: 0 }} // Start further off-screen and fully transparent
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.5, // Delay before the animation starts
            x: { type: "spring", stiffness: 60, damping: 20, duration: 1.5 }, // Slower and less bouncy effect
            opacity: { duration: 1, ease: "easeIn" }, // Smooth fade-in effect
          }}
        >
          <h1
            className="text-3xl md:text-5xl font-bold text-center md:text-left"
            //  initial={{ x: 200, opacity: 0 }} // Start further off-screen and fully transparent
            //  animate={{ x: 0, opacity: 1 }}
            //  transition={{
            //    delay: 0.5, // Delay before the animation starts
            //    x: { type: 'spring', stiffness: 60, damping: 20, duration: 1.5 }, // Slower and less bouncy effect
            //    opacity: { duration: 1, ease: 'easeIn' }, // Smooth fade-in effect
            //  }}
          >
            Your Dream Job Awaits, Start Your Job Search
          </h1>
          <p className="text-lg md:text-xl text-center md:text-left">
            Get the latest openings best suited for you!
          </p>
          <Searchbar handleSearch={handleSearch} handleChange={handleChange} selection={selection} setSelection={setSelection}/>
        </motion.div>
      </div>

      <JobsCard jobs={jobs} />
    </div>
  );
};

export default Jobs;
