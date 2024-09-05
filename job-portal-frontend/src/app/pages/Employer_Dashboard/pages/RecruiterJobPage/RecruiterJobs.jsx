import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function JobList() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      company: "Acme Inc.",
      position: "Software Engineer",
      location: "San Francisco, CA",
      jobUrl: "https://acme.com/careers/software-engineer",
      description: "We are looking for an experienced software engineer to join our team.",
      workMode: "remote",
      skills: ["JavaScript", "React", "Node.js"],
      salaryRange: "80k - 120k",
      experienceLevel: "Mid-Level",
      workType: "Full-Time",
    },
    {
      id: 2,
      company: "Globex Corp",
      position: "UI/UX Designer",
      location: "New York, NY",
      jobUrl: "https://globex.com/careers/ui-ux-designer",
      description: "Seeking a talented UI/UX designer to create visually stunning and user-friendly interfaces.",
      workMode: "hybrid",
      skills: ["Figma", "Adobe Creative Suite", "User Research"],
      salaryRange: "60k - 90k",
      experienceLevel: "Senior",
      workType: "Full-Time",
    },
    {
      id: 3,
      company: "Stark Industries",
      position: "Data Analyst",
      location: "Remote",
      jobUrl: "https://stark.com/careers/data-analyst",
      description: "Analyze complex data sets and provide insights to drive business decisions.",
      workMode: "remote",
      skills: ["SQL", "Python", "Power BI"],
      salaryRange: "50k - 80k",
      experienceLevel: "Entry-Level",
      workType: "Part-Time",
    },
  ]);

  const navigate = useNavigate();

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
                  <td className="px-6 py-4 text-gray-700">{job.company}</td>
                  <td className="px-6 py-4 text-gray-700">{job.position}</td>
                  <td className="px-6 py-4 text-gray-700">{job.location}</td>
                  <td className="px-6 py-4 flex gap-4">
                    <IconButton
                      onClick={() => navigate(`/edit-job`)}
                      aria-label="edit"
                      className="text-blue-600 hover:text-blue-800 transition"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => setJobs(jobs.filter((j) => j.id !== job.id))}
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
