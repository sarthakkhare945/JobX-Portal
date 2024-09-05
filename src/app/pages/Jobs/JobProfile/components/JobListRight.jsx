import React, { useEffect,useState } from 'react';
import RecommendedJobs from './RecommendedJobs';
import { fetchFilteredJobs } from '../../../../../api_calls/Jobs/api';

const JobList = () => {

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
    <div className="max-w-md mx-auto">
      {jobs.map((job, index) => (
        <>
        <RecommendedJobs key={index} {...job} />
        {console.log('jobs right page',jobs)}
        </>
    ))}
    {/* {console.log('jobs aari h statis-->',jobs)} */}
    </div>
  );
};

export default JobList;
