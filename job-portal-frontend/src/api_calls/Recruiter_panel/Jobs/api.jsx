// api.js
import axios from "axios";
import { useParams } from "react-router-dom";

const server = import.meta.env.VITE_API_URL;

export const getAllJobs = async () => {
  try {
    const response = await axios.get(`${server}/api/job/get-jobs`);
    return response.data.jobs; // Adjust this based on the actual structure of your API response
  } catch (error) {
    throw new Error("Failed to fetch jobs");
  }
};



export const getParticularRecruiter = async (id,token) => {
  try {
    const response = await axios.get(`${server}/api/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('particular recruiter response--->',response.data)
    return response.data; // Adjust this based on the actual structure of your API response
  } catch (error) {
    throw new Error("Failed to fetch jobs");
  }
};

