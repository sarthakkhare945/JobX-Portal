import customfields from "../models/customfields.js";
import Jobs from "../models/Jobs.js";

export const AddHiringPosition = async (req, res) => {
  try {
    const { hiringPosition } = req.body;
    if (!hiringPosition) {
      res.status(400).json({
        message: "Provide required fields",
      });
    }
    const position = await customfields.create(req.body);

    return res.status(200).json({
      message: "Job role added successfully",
      position,
    });
  } catch (error) {
    console.error("Error", error);
  }
};

export const getAllHiringPosition = async (req, res) => {
  try {
    const hiringpos = await customfields.find({});
    res.status(200).json({
      message: "Job roles fetched successfully",
      hiringpos,
    });
  } catch (error) {}
};

export const deleteHiringPosition = async (req, res) => {
  try {
    const { id } = req.params;
    const hiringpos = await customfields.findOneAndDelete({ _id: id });
    if (!hiringpos) {
      return res.status(404).json({
        message: "Job role not found or already deleted",
      });
    }
    console.log("id-->", id);
    console.log("hiring pos-->", hiringpos);
    res.status(200).json({
      message: "Job role deleted successfully",
      hiringpos,
    });
  } catch (error) {
    console.error("error", error);
  }
};

export const jobSearch = async (req, res) => {
  try {
    console.log("this is called");

    const { jobRole, jobType, location, experience } = req.body;

    let query = {};
    console.log("query hiringpos");
    if (jobRole) query.position = jobRole;
    if (jobType) query.workType = jobType;
    if (location) query.workMode = location;
    if (experience) query.experience = experience;
    const jobs = await Jobs.find(query);

    if (jobs.length === 0) {
      return res
        .status(404)
        .json({ message: "No jobs found with the given filters" });
    }

    res.status(200).json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
