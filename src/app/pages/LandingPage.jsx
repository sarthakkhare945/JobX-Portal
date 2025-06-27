import React from "react";

import Header from "../../components/LandingPage/Header";
import FeaturedJobs from "../../components/LandingPage/FeaturedJobs";
import Benefits from "../../components/LandingPage/Benefits";
import JobsForYour from "../../components/LandingPage/JobsForYour";
import TopFeatureCompanies from "../../components/LandingPage/TopFeatureCompanies";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <div className="w-[80%] mx-auto flex flex-col justify-center place-items-center">
        <FeaturedJobs />
        <JobsForYour/>
        <TopFeatureCompanies/>
        <Benefits />
      </div>
    </div>
  );
};

export default LandingPage;
