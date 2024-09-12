// api.js
import axios from "axios";
import { useParams } from "react-router-dom";

const server = import.meta.env.VITE_API_URL;

export const fetchFilteredJobs = async () => {
  try {
    const response = await axios.get(`${server}/api/job/featured-jobs`);
    return response.data.job; // Adjust this based on the actual structure of your API response
  } catch (error) {
    throw new Error("Failed to fetch jobs");
  }
};

export const fetchJobProfile = async (id) => {
  try {
    const response = await axios.get(`${server}/api/job/get-job/${id}`);
    // api/job/get-job/66ad4851b89d6c636f469f43
    console.log("yha response check--->", response?.data?.getJob);
    return response.data.getJob; // Adjust this based on the actual structure of your API response
  } catch (error) {
    throw new Error("Failed to fetch jobs");
  }
};

export const fetchJobRoles = async () => {
  try {
    const response = await axios.get(`${server}/api/job/job-roles`);
    console.log("yha response check hiringpos--->", response?.data?.hiringpos);
    return response.data.hiringpos; // Adjust this based on the actual structure of your API response
  } catch (error) {
    throw new Error("Failed to fetch jobs");
  }
};

export const fetchJobs = async (queryParams) => {
  try {
    let url = `${server}/api/job/get-jobs`;
    if (queryParams) {
      if (Object.keys(queryParams).length > 0) {
        // Convert queryParams to a query string
        const queryString = new URLSearchParams(queryParams).toString();
        url += `?${queryString}`;
      }
      console.log("Request URL---->:", url);
      // Make the API request with or without query string
      const response = await axios.get(url);
      console.log("Response from fetchJobsasdasd:", response.data);
      // Return the jobs from the API response
      return response.data.jobs || []; // Return empty array if no jobs field in response
    } else {
      // Make the API request with or without query string
      const response = await axios.get(url);
      console.log("Response default jobs:", response.data);
      // Return the jobs from the API response
      return response.data.jobs || []; // Return empty array if no jobs field in response
    }
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    throw new Error("Failed to fetch jobs");
  }
};
