import { Chip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CompanyAbout from "./CompanyAbout";

const Description = ({ JobDetails }) => {
  return (
    <div className="mt-5">
      <div className="md:w-[40vw] border p-4 rounded-lg shadow-sm">
        <div className="job_description">
          <h2 className="text-lg font-semibold">Job Description</h2>

          <div className="flex items-center space-x-1">
            <span className="text-black pt-3 text-[14px]">
              {JobDetails?.JobdescriptionSummary}
            </span>
          </div>
        </div>

        <div className="job_description mt-4">
          <h2 className="text-lg font-semibold">Required Candidate Profile</h2>

          <div className="flex items-center space-x-1">
            <span className="text-black pt-3">
              <span className="flex gap-2">
                {/* <p className="font-semibold capitalize">Role:</p> {JobDetails?.position} */}
               <p className="font-semibold capitalize">Role:</p>  {JobDetails?.position?.charAt(0).toUpperCase() + JobDetails?.position?.slice(1).toLowerCase()}
              </span>

           
              <span className="flex gap-2">
                <p className="font-semibold capitalize">Employement Type:</p> {JobDetails?.workType?.charAt(0).toUpperCase() + JobDetails?.workType?.slice(1).toLowerCase()}
              </span>



            </span>
          </div>
        </div>

        <div className="education_description mt-4">
          <p className="font-semibold">Education:</p>

          <span className="flex gap-2 pt-2">
            <p className="font-semibold">{JobDetails?.education}:</p> Any Graduate
          </span>
        </div>

        <div className="skills mt-4">
          <p className="font-semibold">Skills:</p>
          <div className="pt-3 flex justify-start space-x-3">
          {JobDetails?.skills?.map((job, index) => (

              <Chip
                className="bg-slate-600"
                label={job}
                size="medium"
                variant="light"
              />

          ))}

            {/* <Chip
              className="bg-slate-600"
              label="Django"
              size="medium"
              variant="light"
            />
            <Chip
              className="bg-slate-600"
              label="MongoDb"
              size="medium"
              variant="light"
            /> */}
          </div>
        </div>
      </div>
      {JobDetails?.companyAbout || JobDetails?.companyAbout === '' ? (
        <CompanyAbout JobDetails={JobDetails}/>

      ):(
        <></>
      )}
    </div>
  );
};

export default Description;
