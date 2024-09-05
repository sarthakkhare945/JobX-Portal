import React, { useEffect, useState } from "react";
import { Briefcase, DocumentCopy, Location, Map } from "iconsax-react";
import { Link, useParams } from "react-router-dom";
import Description from "./Description";
import { Button } from "@mui/material";
import { fetchJobProfile } from "../../../../../api_calls/Jobs/api";


const Header = () => {
  const {id} = useParams()


  const [JobDetails, setJobDetails] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      const jobsData = await fetchJobProfile(id);
      console.log("jobs data---->", jobsData);
      setJobDetails(jobsData);
    };
    getJobs();
  }, []);






  return (
    <div>
      <div className="md:w-[40vw] h-[auto] border p-4 rounded-lg shadow-sm">
        <h2 className="text-lg capitalize" style={{ fontWeight: "700" }}>
          {/* Senior Software Engineer, Site Reliability Engineering, Google Cloud */}
          {JobDetails?.position}
        </h2>

        <div className="flex items-center justify-between">
          <span className="text-gray-500 font-semibold capitalize">{JobDetails?.company}</span>
          <div className="bg-black px-4 py-2 rounded-full text-xs font-medium text-white capitalize">
                    {JobDetails.workMode}
                  </div>
        </div>

        <div className="flex items-center space-x-2 mt-2">
          <div className="flex items-center space-x-1">
            <Briefcase size="16" />
            {/* <span>{2 - 4 years}</span> */}
            <span className="capitalize">{JobDetails?.experience}</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            {/* <span>4.5-6 Lac PA</span> */}
            <span>{JobDetails?.salary}</span>
          </div>

          <div className="flex items-center space-x-1">

            <DocumentCopy/>
            <span className="capitalize">{JobDetails?.workType}</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 mt-2 mb-4">
          <div className="flex items-center space-x-1">
            <Location size="18" />
            <span>{JobDetails?.workLocation}</span>
          </div>
        </div>

        <hr className="mt-2" />

        <div className="mt-4 flex justify-between">
          <span className="flex gap-2">
            <p className="text-gray-500">Posted:</p>{JobDetails?.createdAt}
          </span>
          {/* <Link
            to="/job-list-profile"
            className="bg-black text-white py-2 px-5 rounded-xl hover:bg-slate-600"
            // prefetch={false}
          >
            Apply
          </Link> */}
         <Button
                  component={Link}
                  to={JobDetails?.jobUrl}
                  target="__blank"
                  variant="contained"
                  color="primary"
                  className="text-sm font-medium"
                >
                  Apply
                </Button>
        </div>
      </div>
      {/* Description */}
      <Description JobDetails={JobDetails}/>
    </div>
  );
};

export default Header;
