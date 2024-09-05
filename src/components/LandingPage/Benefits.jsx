import React from "react";
import { Briefcase, SearchNormal } from "iconsax-react";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import {motion} from 'framer-motion'

const Benefits = () => {
  return (
    <section className="bg-white-100 py-12 md:py-20 px-4 md:px-6 w-full">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Benefits of Using JobX
          </h2>
        </div>
        
        <motion.div 
         initial={{y:100,opacity:0}}
         whileInView={{y:0,opacity:1}}
         viewport={{ once: true }}
         transition={{
           delay: 0.2,
           y:{
             type: 'spring',
             stiffness: 60
           },
           opacity:{
             duration: 0.2,
           },
           ease: 'easeIn',
           duration: 1,
         }}
        
        
        
        
        
        
        
        
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
            <SearchNormal className="text-blue-500 h-8 8w-8 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
              Comprehensive Job Search
            </h3>
            <p className="text-gray-500 text-center">
              Search through thousands of job listings across various industries and locations.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
            <Briefcase className="text-green-500 h-8 w-8 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
               Job Recommendations
            </h3>
            <p className="text-gray-500 text-center">
              Get tailored job recommendations based on your skills, experience, and preferences.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
            <RocketLaunchIcon className="text-purple-500 h-8 w-8 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Easy Application Process
            </h3>
            <p className="text-gray-500 text-center">
              Apply for jobs with a few clicks, and track your application status.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
