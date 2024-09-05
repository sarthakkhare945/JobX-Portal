import React from 'react';
import { Link } from 'react-router-dom';

const RecommendedJobs = ({ position, company, rating, workLocation, createdAt, reviews ,_id}) => {
  const handleClick = () => {
    window.location.href = `/job-list-profile/${_id}`;
  };

  return (
    <>
    <div onClick={handleClick} className='cursor-pointer'>
    <div className="border p-4 rounded-md  bg-white mb-4 hover:shadow-sm">
      <h2 className="text-lg font-bold">{position}</h2>
      {console.log('title--->',position)}
      <p className="text-gray-600">{company}</p>
     
      {/* {rating && ( */}
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">5 ⭐</span>
          <span className="ml-2 text-gray-500">4 reviews</span>
        </div>
      {/* // )} */}
      <p className="text-gray-500 mt-2">{workLocation}</p>
      <p className="text-gray-400 text-sm mt-1">{createdAt}</p>
    </div>
    </div>
    </>
  );
};

export default RecommendedJobs;
