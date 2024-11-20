import { Typography, Chip, TextField, Button, IconButton } from "@mui/material";
import { useState } from "react";
import { createjobs } from "../../../../../../api_calls/Recruiter_panel/Jobs/api";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { enqueueSnackbar, SnackbarProvider } from "notistack";

const CreateJobForm = () => {
  const [newJob, setNewJob] = useState({
    company: "",
    position: "",
    location: "",
    jobUrl: "",
    // description: "",
    workMode: "onsite",
    salary: "",
    experienceLevel: "Entry-Level",
    workType: "Full-Time",
    skills: [],
    qualifications: [""],
    education: "Bachelors",
    companyAbout: "",
    JobdescriptionSummary: "",
  });

  const [skillInput, setSkillInput] = useState("");
  const [errors, setErrors] = useState({});

  // Handle adding skills
  const handleAddSkill = () => {
    if (skillInput && !newJob.skills.includes(skillInput)) {
      setNewJob({ ...newJob, skills: [...newJob.skills, skillInput] });
      setSkillInput(""); // Clear input after adding
    }
  };

  // Handle removing skills
  const handleRemoveSkill = (skillToDelete) => {
    setNewJob({
      ...newJob,
      skills: newJob.skills.filter((skill) => skill !== skillToDelete),
    });
  };

  // Handle adding qualifications
  const handleAddQualification = () => {
    setNewJob({
      ...newJob,
      qualifications: [...newJob.qualifications, ""],
    });
  };

  // Handle changing qualifications
  const handleQualificationChange = (index, value) => {
    const newQualifications = [...newJob.qualifications];
    newQualifications[index] = value;
    setNewJob({ ...newJob, qualifications: newQualifications });
  };

  // Handle removing qualifications
  const handleRemoveQualification = (index) => {
    const newQualifications = newJob.qualifications.filter(
      (_, i) => i !== index
    );
    setNewJob({ ...newJob, qualifications: newQualifications });
  };

  // Validate form inputs
  const validateForm = () => {
    const validationErrors = {};
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/; // URL regex pattern
    const salaryPattern = /^\d+(\-\d+)?$/; // Salary range regex pattern

    if (!newJob.company) validationErrors.company = "Company is required.";
    if (!newJob.position) validationErrors.position = "Position is required.";
    if (!newJob.location) validationErrors.location = "Location is required.";
    if (!newJob.jobUrl) {
      validationErrors.jobUrl = "Job URL is required.";
    } else if (!urlPattern.test(newJob.jobUrl)) {
      validationErrors.jobUrl = "Invalid URL format.";
    }
    if (!newJob.salary) {
      validationErrors.salary = "Salary range is required.";
    } else if (!salaryPattern.test(newJob.salary)) {
      validationErrors.salary =
        "Invalid salary range format (e.g., 50000-70000).";
    }
    if (newJob.skills.length === 0)
      validationErrors.skills = "At least one skill is required.";
    if (newJob.qualifications.filter((q) => q).length === 0)
      validationErrors.qualifications =
        "At least one qualification is required.";

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Stop submission if validation fails

    const token = localStorage.getItem("token");

    const requestdata = {
      company: newJob.company,
      workLocation: newJob.location,
      jobUrl: newJob.jobUrl,
      position: newJob.position,
      skills: newJob.skills,
      workMode: newJob.workMode,
      salary: newJob.salary,
      JobdescriptionSummary: newJob.JobdescriptionSummary,
      companyAbout: newJob.companyAbout,
      experience: newJob.experience,
      workType: newJob.workType,
      education: newJob.education,
      miniMumQualification: newJob.qualifications,
    };

    const response = await createjobs(requestdata, token);
    console.log("response--->", response);
    enqueueSnackbar("Job Created Successfully!", {
      variant: "success",
    });
    setNewJob({
      company: "",
      position: "",
      location: "",
      jobUrl: "",
      workMode: "onsite",
      salary: "",
      experienceLevel: "Entry-Level",
      workType: "Full-Time",
      skills: [],
      qualifications: [""],
      education: "Bachelors",
      companyAbout: "",
      JobdescriptionSummary: "",
    });

    // Clear skill input field
    setSkillInput("");

    // Clear any form errors
    setErrors({});
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full mx-auto">
      <div className="mb-6">
        <Typography
          variant="h4"
          sx={{ marginBottom: "20px", color: "#3f51b5", fontWeight: "600" }}
        >
          Create Job
        </Typography>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-1">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Company
            </label>
            <input
              type="text"
              value={newJob.company}
              onChange={(e) =>
                setNewJob({ ...newJob, company: e.target.value })
              }
              required
              className={`w-full border ${
                errors.company ? "border-red-500" : "border-gray-300"
              } p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.company && (
              <p className="text-red-500 text-sm">{errors.company}</p>
            )}
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
              className={`w-full border ${
                errors.position ? "border-red-500" : "border-gray-300"
              } p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.position && (
              <p className="text-red-500 text-sm">{errors.position}</p>
            )}
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
              className={`w-full border ${
                errors.location ? "border-red-500" : "border-gray-300"
              } p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.location && (
              <p className="text-red-500 text-sm">{errors.location}</p>
            )}
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
              className={`w-full border ${
                errors.jobUrl ? "border-red-500" : "border-gray-300"
              } p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.jobUrl && (
              <p className="text-red-500 text-sm">{errors.jobUrl}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Job Description
          </label>
          <textarea
            value={newJob.JobdescriptionSummary}
            onChange={(e) =>
              setNewJob({ ...newJob, JobdescriptionSummary: e.target.value })
            }
            rows={4}
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Company About
          </label>
          <textarea
            value={newJob.companyAbout}
            onChange={(e) =>
              setNewJob({ ...newJob, companyAbout: e.target.value })
            }
            rows={4}
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Education
          </label>
          <select
            value={newJob.education}
            onChange={(e) =>
              setNewJob({ ...newJob, education: e.target.value })
            }
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="Bachelors">Bachelors</option>
            <option value="Masters">Masters</option>
            <option value="PhD">PhD</option>
            <option value="Diploma">Diploma</option>
            <option value="ITI">ITI</option>
          </select>
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
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="onsite">Onsite</option>
              <option value="remote">Remote</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Salary Range (e.g., 50000-70000)
            </label>
            <input
              type="text"
              value={newJob.salary}
              onChange={(e) => setNewJob({ ...newJob, salary: e.target.value })}
              required
              className={`w-full border ${
                errors.salary ? "border-red-500" : "border-gray-300"
              } p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.salary && (
              <p className="text-red-500 text-sm">{errors.salary}</p>
            )}
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
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="Entry-Level">Entry-Level</option>
              <option value="Mid-Level">Mid-Level</option>
              <option value="Senior-Level">Senior-Level</option>
              <option value="Lead">Lead</option>
            </select>
          </div>
        </div>

        <div className="flex justify-between gap-4 mb-4">
          <div className="flex-1">
            <label className="block text-gray-700 font-medium mb-1">
              Work Type
            </label>
            <select
              value={newJob.workType}
              onChange={(e) =>
                setNewJob({ ...newJob, workType: e.target.value })
              }
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
               <option>Select Work Type</option>
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-gray-700 font-medium mb-1">
              Skills
            </label>
            <div className="flex items-center">
              <input
                type="text"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
              />
              <IconButton
                onClick={handleAddSkill}
                color="primary"
                className="ml-2"
              >
                <AddIcon />
              </IconButton>
            </div>

            {/* Displaying Selected Skills */}
            <div className="flex flex-wrap mt-2">
              {newJob.skills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  onDelete={() => handleRemoveSkill(skill)}
                  className="mr-2 mb-2"
                />
              ))}
            </div>

            {/* Error Message for Skills */}
            {errors.skills && (
              <p className="text-red-500 text-sm">{errors.skills}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Qualifications
          </label>
          {newJob.qualifications.map((qualification, index) => (
            <div key={index} className="flex items-center mb-4">
              <input
                type="text"
                value={qualification}
                onChange={(e) =>
                  handleQualificationChange(index, e.target.value)
                }
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                required
              />
              <IconButton
                onClick={() => handleRemoveQualification(index)}
                color="secondary"
                className="ml-2"
              >
                <RemoveIcon />
              </IconButton>
            </div>
          ))}
          <IconButton onClick={handleAddQualification} color="primary">
            <AddIcon />
          </IconButton>
          {errors.qualifications && (
            <p className="text-red-500 text-sm">{errors.qualifications}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="w-full mt-6"
        >
          Create Job
        </Button>
      </form>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        autoHideDuration={3000}
        classes={{
          variantSuccess: "custom-snackbar",
        }}
      />
    </div>
  );
};

export default CreateJobForm;
