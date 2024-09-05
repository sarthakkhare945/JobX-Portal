import React, { useEffect, useState } from "react";
import { Card, CardContent, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Briefcase, Calendar } from "iconsax-react";
import { motion } from "framer-motion";
import { fetchFilteredJobs } from "../../api_calls/Jobs/api";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      const jobsData = await fetchFilteredJobs();
      console.log("jobs data---->", jobsData);
      setJobs(jobsData);
    };
    getJobs();
  }, []);

  return (
    <section className="bg-white-100 py-12 md:py-16 px-4 md:px-6 w-full">
      <div className="container mx-auto">
        <div className="flex justify-center text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured Jobs
          </h2>
        </div>
        <motion.div
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
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-2"
        >
          {jobs?.map((job, index) => (
            <>
              <Card
                key={index}
                className="transition-transform transform hover:scale-105 rounded-lg overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-gray-200 px-4 py-2 rounded-full text-xs font-medium text-gray-700 capitalize">
                      {job.workType}
                    </div>
                    <div className="bg-blue-600 px-4 py-2 rounded-full text-xs font-medium text-white">
                      {job.salary ? (
                        <>
                          ₹<span className="ml-1">{job.salary}</span>
                        </>
                      ) : (
                        "Not Disclosed"
                      )}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2 capitalize">
                    {job.position}
                  </h3>
                  <h3 className="text-md font-semibold text-gray-500 mb-2 capitalize ">
                    {job.company}
                  </h3>
                  <p className="text-gray-600 mb-4">{job.workLocation}</p>
                  <div className="flex items-center gap-3 text-gray-600 text-sm capitalize">
                    <Calendar />
                    <span>{job.createdAt}</span>
                    <span className="mx-2">•</span>
                    <Briefcase />
                    <span>{job.experience}</span>
                  </div>
                </CardContent>
                <footer className="bg-gray-50 px-6 py-4 flex items-center justify-between mb-4">
                  <div className="bg-orange-400 px-4 py-2 rounded-full text-xs font-medium text-white capitalize">
                    {job.workMode}
                  </div>
                  <Button
                    component={Link}
                    to={`/job-list-profile/${job._id}`}
                    variant="contained"
                    color="primary"
                    className="text-sm font-medium"
                  >
                    Apply Now
                  </Button>
                </footer>
              </Card>
            </>
          ))}
        </motion.div>
        <div className="flex justify-center mt-8 mb-4">
          <Button
            component={Link}
            to="/jobs"
            variant="contained"
            color="primary"
            className="text-lg font-medium"
          >
            View More
          </Button>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default FeaturedJobs;
