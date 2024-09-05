import React from "react";

const CompanyAbout = ({ JobDetails }) => {
  return (
    <div className="mt-5">
      <div className="md:w-[40vw] border p-4 rounded-lg shadow-sm">
        <div className="job_description">
          <h2 className="text-lg font-semibold">About Company</h2>

          <div className="flex items-center space-x-1 mt-3">
            <span className="text-black pt-3 text-[14px]">
              {JobDetails?.companyAbout}
            </span>
          </div>

          {JobDetails?.address ? (
            <span>
              <h2 className="font-semibold mt-3">Company Info</h2>

              <div className="address flex gap-5 pt-1">
                <p className="font-semibold text-slate-600">Address:</p>
                <p> {JobDetails?.address}</p>
              </div>
            </span>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyAbout;
