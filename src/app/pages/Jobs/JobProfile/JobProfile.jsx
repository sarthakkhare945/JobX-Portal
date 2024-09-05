import { Briefcase, Location, Map } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Description from "./components/Description";
import RecommendedJobs from "./components/RecommendedJobs";
import JobListRight from "./components/JobListRight";

const JobProfile = () => {
  
  return (
    
    <>
      <div className="flex justify-center p-4">
        <div className="w-full md:w-[75vw] p-4 rounded-lg">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <Header />

            <div className="hidden md:block w-full md:w-[28vw] interested_in">

          {/* <RecommendedJobs/> */}
          <JobListRight/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobProfile;
