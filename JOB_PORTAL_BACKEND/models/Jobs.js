import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Company is required"],
    },
    position: {
      type: String,
      required: [true, "Position is required"],
      maxlength: 100,
    },
    description: {
      type: [String],
      required: [true, "Description is required"],
    },

    JobdescriptionSummary: {
      type: String,
      required: [true, "Job Description is required"],
    },
    experience: {
      type: String,
      enum: ["fresher", "junior-level", "mid-level", "senior-level"],
      default: "fresher",
    },
    skills: {
      type: [String],
    },
    education: {
      type: String,
    },

    salary: {
      type: Number,
    },
    workType: {
      type: String,
      enum: ["full-time", "part-time", "internship", "contract"],
      default: "full-time",
    },
    workMode: {
      type: String,
      enum: ["onsite", "remote", "hybrid", "freelance", "shift"],
      default: "onsite",
    },
    workLocation: {
      type: String,
      required: [true, "Work location is required"],
    },
    jobUrl: {
      type: String,
      required: [true, "Job Url is required"],
    },
    companyAbout: {
      type: String,
    },

    companyAddress: {
      type: String,
    },

    customField: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CustomFields", // Reference to CustomFields model
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", JobSchema);
