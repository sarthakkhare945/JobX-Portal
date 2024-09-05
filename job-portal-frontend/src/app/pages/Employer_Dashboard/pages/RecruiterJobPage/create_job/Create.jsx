import { Typography } from "@mui/material";
import { useState } from "react";

const CreateJobForm = ({ onCreate, onCancel }) => {
  const [newJob, setNewJob] = useState({
    company: "",
    position: "",
    location: "",
    jobUrl: "",
    description: "",
    workMode: "onsite",
    salaryRange: "",
    experienceLevel: "Entry-Level",
    workType: "Full-Time",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(newJob);
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full mx-auto">
      <div className="mb-6">
        <Typography
          variant="h4"
          sx={{
            marginBottom: '20px',
            color: '#3f51b5', // Blue color
            fontWeight: '600',
          }}
        >
          Create Job
        </Typography>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Company
            </label>
            <input
              type="text"
              value={newJob.company}
              onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Position
            </label>
            <input
              type="text"
              value={newJob.position}
              onChange={(e) =>
                setNewJob({ ...newJob, position: e.target.value })
              }
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Location
            </label>
            <input
              type="text"
              value={newJob.location}
              onChange={(e) =>
                setNewJob({ ...newJob, location: e.target.value })
              }
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Job URL
            </label>
            <input
              type="url"
              value={newJob.jobUrl}
              onChange={(e) => setNewJob({ ...newJob, jobUrl: e.target.value })}
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Description
          </label>
          <textarea
            value={newJob.description}
            onChange={(e) =>
              setNewJob({ ...newJob, description: e.target.value })
            }
            rows={4}
            required
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Work Mode
            </label>
            <select
              value={newJob.workMode}
              onChange={(e) =>
                setNewJob({ ...newJob, workMode: e.target.value })
              }
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="onsite">Onsite</option>
              <option value="remote">Remote</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Salary Range
            </label>
            <input
              type="text"
              value={newJob.salaryRange}
              onChange={(e) =>
                setNewJob({ ...newJob, salaryRange: e.target.value })
              }
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Experience Level
            </label>
            <select
              value={newJob.experienceLevel}
              onChange={(e) =>
                setNewJob({ ...newJob, experienceLevel: e.target.value })
              }
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="Entry-Level">Entry-Level</option>
              <option value="Mid-Level">Mid-Level</option>
              <option value="Senior">Senior</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Work Type
          </label>
          <select
            value={newJob.workType}
            onChange={(e) =>
              setNewJob({ ...newJob, workType: e.target.value })
            }
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Internship">Internship</option>
            <option value="Contract">Contract</option>
          </select>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          {/* <button
            type="button"
            onClick={onCancel}
            className="px-12 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Cancel
          </button> */}
          <button
            type="submit"
            className="px-[6rem] py-4 text-xl bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateJobForm;
