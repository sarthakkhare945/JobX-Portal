import Jobs from "../models/Jobs.js";
import mongoose from "mongoose";
import moment from "moment";
import { formatDistanceToNow, parseISO } from "date-fns";
import customfields from "../models/customfields.js";

export const CreateJobController = async (req, res, next) => {
  try {
    const { company, workLocation, jobUrl, description, workMode, skills, salary, JobdescriptionSummary, position } = req.body;

    // Debugging log: Print request body
    console.log('Request Body:', req.body);

    if (!company || !workLocation || !jobUrl || !description || !workMode || !skills || !salary || !JobdescriptionSummary) {
      return res.status(400).json({
        success: false,
        error: "Please Provide All Required Fields",
      });
    }

    // Fetch the hiringPosition from CustomFields
    const CustomField = await customfields.findOne().exec();
    if (!CustomField || !CustomField.hiringPosition) {
      return res.status(500).json({
        success: false,
        error: "Hiring position not found in custom fields",
      });
    }

    // Debugging log: Print hiringPosition and position from request body
    console.log('Custom Hiring Position:', CustomField.hiringPosition);
    console.log('Request Position:', position);
    // console.log('Request user idd---->',req.user._id)

    // Prepare job data with position from request body if provided, otherwise use hiringPosition from CustomFields
    const jobData = {
      ...req.body,
      position: position ||CustomField.hiringPosition // Use position from request body if available
    };

    // Debugging log: Print jobData before creating the job
    console.log('Job Data:', jobData);

    // Create the job with the modified data
    const job = await Jobs.create(jobData);

    let formattedDate;
    if (typeof job.createdAt === "string") {
      // Assuming the date is an ISO string
      formattedDate = formatDistanceToNow(new Date(job.createdAt), {
        addSuffix: true,
      });
    } else if (job.createdAt instanceof Date) {
      // Assuming the date is a JavaScript Date object
      formattedDate = formatDistanceToNow(job.createdAt, { addSuffix: true });
    } else {
      formattedDate = "Invalid Date";
    }

    res.status(200).json({
      success: true,
      message: "Job Created Successfully",
      job: {
        ...job.toObject(),
        createdAt: formattedDate, // Add the formatted date to the response
      },
    });
  } catch (error) {
    console.error("Error:", error);
    next(error);
  }
};


export const getAllJobs = async (req, res, next) => {
  try {
    const { workType, search, sort, workMode, experience, hiringPosition } = req.query;

    // Base query object with creator filter
    const queryObject = {
      createdBy: req.User?._id,
    };

    // Filters
    if (workType && workType !== "all") {
      queryObject.workType = workType;
    }

    if (workMode && workMode !== "all") {
      queryObject.workMode = workMode;
    }

    if (experience && experience !== "all") {
      queryObject.experience = experience;
    }

    if (search) {
      queryObject.position = { $regex: search, $options: "i" };
    }

    // Fetch hiringPosition values from CustomFields if needed
    let hiringPositions = [];
    if (hiringPosition && hiringPosition !== "all") {
      // Fetch CustomFields where hiringPosition matches the query
      const customFields = await customfields.find({ hiringPosition: { $regex: new RegExp(`^${hiringPosition}$`, 'i') } }).exec();

      // Extract hiringPositions from the results
      hiringPositions = customFields.map(field => field.hiringPosition);

      if (hiringPositions.length > 0) {
        // Adjust the filter to include any of the hiringPositions
        queryObject.position = { $in: hiringPositions };
      } else {
        // If no hiringPositions matched, set to an impossible value or handle as needed
        queryObject.position = ""; // This avoids returning results by mistake
      }
    }

    // Debugging log: Print the queryObject
    console.log('Query Object:', queryObject);

    // Initial query with filters
    let queryResult = Jobs.find(queryObject);

    // Sorting
    if (sort === "latest") {
      queryResult = queryResult.sort("-createdAt");
    } else if (sort === "oldest") {
      queryResult = queryResult.sort("createdAt");
    } else if (sort === "a-z") {
      queryResult = queryResult.sort("position");
    } else if (sort === "z-a") {
      queryResult = queryResult.sort("-position");
    }

    // Pagination
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    queryResult = queryResult.skip(skip).limit(limit);

    // Jobs count
    const totalJobs = await Jobs.countDocuments(queryObject);
    const numOfPage = Math.ceil(totalJobs / limit);

    // Fetch the filtered, sorted, and paginated jobs
    const jobs = await queryResult;

    // Format the createdAt field
    const formattedJobs = jobs.map((job) => {
      const createdAt = job.createdAt;
      let formattedDate;

      if (typeof createdAt === "string") {
        try {
          formattedDate = formatDistanceToNow(parseISO(createdAt), {
            addSuffix: true,
          });
        } catch (error) {
          formattedDate = "Invalid Date";
        }
      } else if (createdAt instanceof Date) {
        formattedDate = formatDistanceToNow(createdAt, { addSuffix: true });
      } else {
        formattedDate = "Invalid Date";
      }

      return {
        ...job.toObject(),
        createdAt: formattedDate, // Add the formatted date to the response
      };
    });

    res.status(200).json({
      totalJobs,
      jobs: formattedJobs,
      numOfPage,
    });
  } catch (error) {
    console.error("Error fetching Jobs", error);
    res.status(400).json({
      message: "Error Fetching Jobs",
    });
  }
};



export const getParticularJob = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the ID is a valid MongoDB ObjectID format
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res
        .status(400)
        .json({ message: "Invalid Job ID format or Job Doesn't Exist" });
    }

    const getJob = await Jobs.findById(id);

    if (!getJob) {
      return res.status(404).json({ message: "Job Not Found" });
    }

    const formatJobDate = (job) => {
      const createdAt = job.createdAt;
      let formattedDate;

      if (typeof createdAt === 'string') {
        // Assuming the date is an ISO string
        try {
          formattedDate = formatDistanceToNow(parseISO(createdAt), {
            addSuffix: true,
          });
        } catch (error) {
          formattedDate = 'Invalid Date';
        }
      } else if (createdAt instanceof Date) {
        // Assuming the date is a JavaScript Date object
        formattedDate = formatDistanceToNow(createdAt, { addSuffix: true });
      } else {
        formattedDate = 'Invalid Date';
      }

      return {
        ...job.toObject(),
        createdAt: formattedDate, // Add the formatted date to the response
      };
    };

    const formattedJob = formatJobDate(getJob);

    console.log("Job details", formattedJob);
    res.status(200).json({
      message: "Job details fetched successfully",
      getJob: formattedJob,
    });
  } catch (error) {
    console.error("Error fetching job details:", error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Update Jobs

export const updateJobs = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { company, position, workLocation,JobdescriptionSummary } = req.body;
    console.log('company,role,position',req.body)
    console.log('company,pos,worklocation',company,position,workLocation,JobdescriptionSummary)

    // if (!company || !position || !workLocation) {
    //   next("!Please Provide All Fields");
    // }
    //find job
    const job = await Jobs.findOne({ _id: id });
    //validation
    if (!job) {
      next(`No jobs found with this id ${id}`);
    }

    const updateJob = await Jobs.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Jobs Updated Successfully",
      updateJob,
    });
  } catch (error) {
    console.log("error", error);
  }
};

// Delete Particular Job
export const DeleteParticularJob = async (req, res, next) => {
  const { id } = req.params;
  try {
    // Finding job of particular id
    const job = await Jobs.findOneAndDelete({ _id: id });

    if (!job) {
      return next("Job not found");
    }

    // Verifying the logged-in Recruiter is deleting the job
    if (req.User?.UserId !== job.createdBy?.toString()) {
      return next("You do not have permission to delete this job");
    }

    res.status(200).json({
      message: "Job Deleted Successfully",
      job,
    });
  } catch (err) {
    next(err); // Pass any error to the error handler middleware
  }
};

// Stats and Filtering Jobs
export const jobsStatsController = async (req, res, next) => {
  const stats = await Jobs.aggregate([
    //search by Recruiter jobs
    {
      $match: {
        createdBy: new mongoose.Types.ObjectId(req.User?.UserId),
      },
    },
    {
      $group: {
        _id: "$status",
        count: { $sum: 1 },
      },
    },
  ]);

  //   Default stats

  const defaultStats = {
    pending: stats.pending || 0,
    reject: stats.reject || 0,
    interview: stats.interview || 0,
  };

  // monthly or year stats
  let MonthlyApplications = await Jobs.aggregate([
    {
      $match: {
        createdBy: new mongoose.Types.ObjectId(req?.User?.UserId),
      },
    },
    {
      $group: {
        _id: {
          year: { $year: "$createdAt" },
          month: { $month: "$createdAt" },
        },
        count: {
          $sum: 1,
        },
      },
    },
  ]);

  MonthlyApplications = MonthlyApplications.map((item) => {
    const {
      _id: { year, month },
      count,
    } = item;
    const date = moment()
      .month(month - 1)
      .year(year)
      .format("MMM Y");
    return { date, count };
  }).reverse();

  res.status(200).json({
    totalJobs: stats.length,
    defaultStats,
    MonthlyApplications,
  });
};


export const featuredJobs = async(req,res) =>{
  try {
    const featuredJob = await Jobs.find({}).sort({createdAt:-1}).limit(4)
    console.log('featured job-->',featuredJob)

    const formattedJobs = featuredJob.map((job) => {
      const createdAt = job.createdAt;
      let formattedDate;

      if (typeof createdAt === "string") {
        // Assuming the date is an ISO string
        try {
          formattedDate = formatDistanceToNow(parseISO(createdAt), {
            addSuffix: true,
          });
        } catch (error) {
          formattedDate = "Invalid Date";
        }
      } else if (createdAt instanceof Date) {
        // Assuming the date is a JavaScript Date object
        formattedDate = formatDistanceToNow(createdAt, { addSuffix: true });
      } else {
        formattedDate = "Invalid Date";
      }
      console.log('formatted date check000>',formattedDate)

      return {
        ...job.toObject(),
        createdAt: formattedDate, // Add the formatted date to the response
      };
    });

    res.status(200).json({
      job:formattedJobs

    }
    )
    
  } catch (error) {
    console.log('Error',error)
    
  }
  

}


export const getJobsByMode = async (req, res) => {
  try {
    // Extract the workMode from request query
    const { workMode } = req.query;

    // Log the received workMode for debugging
    console.log('Received workMode:', workMode);

    // Create a filter object for the query
    let filter = {};

    // If workMode is provided, add it to the filter object
    if (workMode) {
      filter.workMode = workMode;
    }

    // Log the filter to ensure it's correctly formed
    console.log('Filter object:', filter);

    // Fetch jobs based on the filter criteria, sort them by creation date, and limit to 4 results
    const jobs = await Jobs.find(filter).sort({ createdAt: -1 }).limit(4);

    // Log the results for debugging
    console.log('Filtered jobs:', jobs);

    // Respond with the filtered jobs
    res.status(200).json({ jobs });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

