import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { getAllJobs, getParticularRecruiter } from "../../../../../api_calls/Recruiter_panel/Jobs/api";

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [RecruiterId,setRecruiterId] = useState()

  const navigate = useNavigate();

  useEffect(() => {
    const getJobs = async () => {
      const job = await getAllJobs();
      console.log("jobs from recruiter jobs.jsx", job);

      setJobs(job);
      setRecruiterId(job?.createdBy)
    };
    getJobs();
  }, []);


  useEffect(() => {
    const getParticularUser = async () => {
      const token = localStorage.getItem('token')
      const job = await getParticularRecruiter(RecruiterId,token);
      console.log("particular user details from recruiterjobs.jsx", job);

      // setJobs(job);
      setRecruiterId(job?.createdBy)
    };
    getParticularUser();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-100 to-gray-300">
      <main className="flex-1 shadow-lg rounded-lg p-8 bg-gradient-to-b from-white to-gray-50">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl font-bold text-blue-800">Job Listings</h3>
          <button
            onClick={() => navigate("/jobs-create")}
            className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-md shadow-lg hover:bg-blue-700 transition"
          >
            Create Job
          </button>
        </div>
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full table-auto bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gradient-to-r from-blue-800 to-purple-700 text-white">
                <th className="px-6 py-4 font-semibold text-left">Company</th>
                <th className="px-6 py-4 font-semibold text-left">Position</th>
                <th className="px-6 py-4 font-semibold text-left">Location</th>
                <th className="px-6 py-4 font-semibold text-left">Work Type</th>
                <th className="px-6 py-4 font-semibold text-left">Work Mode</th>
                <th className="px-6 py-4 font-semibold text-left">
                  Uploaded By
                </th>
                <th className="px-6 py-4 font-semibold text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, idx) => (
                <tr
                  key={job.id}
                  className={`border-b border-gray-200 transition hover:bg-gray-100 ${
                    idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="px-6 py-4 text-gray-700 capitalize">
                    {job.company}
                  </td>
                  <td className="px-6 py-4 text-gray-700 capitalize">
                    {job.position}
                  </td>
                  <td className="px-6 py-4 text-gray-700 capitalize">
                    {job.workLocation}
                  </td>
                  <td className="px-6 py-4 text-gray-700 capitalize">
                    {job.workType}
                  </td>
                  <td className="px-6 py-4 text-gray-700 capitalize">
                    {job.workMode}
                  </td>
                  <td className="px-6 py-4 text-gray-700 capitalize">
                    {job.createdBy?.name}
                  </td>
                  <td className="px-6 py-4 flex gap-4">
                    <IconButton
                      onClick={() => navigate(`/edit-job`)}
                      aria-label="edit"
                      className="text-blue-600 hover:text-blue-800 transition"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() =>
                        setJobs(jobs.filter((j) => j.id !== job.id))
                      }
                      aria-label="delete"
                      className="text-red-600 hover:text-red-800 transition"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
