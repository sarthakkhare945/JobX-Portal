import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { fetchFilteredJobs, fetchJobs } from "../../api_calls/Jobs/api";
import { useEffect, useState } from "react";
import { Briefcase } from "iconsax-react";

const JobsList = ({jobs}) => {
  // const [jobs, setJobs] = useState([]);

  // useEffect(() => {
  //   const getJobs = async () => {
  //     const jobsData = await fetchJobs();

  //     console.log("jobs data now check bro---->", jobsData);
  //     setJobs(jobsData);
  //   };
  //   getJobs();
  // }, []);




  return (
    <div className="w-[80%] mx-auto">
      <h3 className="flex justify-start ml-2 font-bold text-lg md:text-xl py-8 text-[#000000]">
        3979 Jobs Found
      </h3>

      <div className="flex flex-col justify-center place-items-center mb-8">
        <div>
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                y: {
                  type: "spring",
                  stiffness: 60,
                },
                opacity: {
                  duration: 0.2,
                },
                ease: "easeIn",
                duration: 1,
              }}
              className="border p-4 rounded-lg shadow-sm mb-4"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold capitalize">
                    {job.position}
                  </h2>
                  <div className="flex items-center space-x-6 mt-2">
                    <div className="flex items-center space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                        />
                      </svg>
                      <span className="capitalize">{job.company}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                      <span>{job.workLocation}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                        />
                      </svg>
                      <span className="capitalize">{job.experience}</span>
                      <Briefcase />
                      <span className="capitalize">{job.workMode}</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-6 m-2">
                  <Button
                    component={Link}
                    to={`/job-list-profile/${job._id}`} // Replace `id` with the actual variable or state containing the ID
                    variant="contained"
                    target="__blank"
                    color="primary"
                    className="text-sm font-medium"
                  >
                    View
                  </Button>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium">Minimum qualifications</h3>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    Bachelor’s degree in Computer Science, a related field, or
                    equivalent practical experience.
                  </li>
                  <li>
                    Candidates will typically have 5 years of experience with
                    software development in one or more programming languages.
                  </li>
                  <li>
                    Typically 5 years of experience with data structures or
                    algorithms.
                  </li>
                  <li>
                    Typically 3 years of experience in designing, analyzing, and
                    troubleshooting large-scale distributed systems, and 2 years
                    of experience leading projects and providing technical
                    leadership.
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <Button variant="outline">Learn more</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsList;
