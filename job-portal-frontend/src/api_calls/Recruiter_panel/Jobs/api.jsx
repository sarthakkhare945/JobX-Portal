// api.js
import axios from "axios";
import { useParams } from "react-router-dom";

const server = import.meta.env.VITE_API_URL;



export const createjobs = async (requestdata, token) => {
  try {
    console.log('requestdata check--->',requestdata)
    const response = await axios.post(
      `${server}/api/job/create-job`,
      requestdata,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Add the Authorization header
          'Content-Type': 'application/json', // Optional, but ensures the content type
        },
      }
    );
    return response.data; // Adjust this based on the actual structure of your API response
  } catch (error) {
    throw new Error("Failed to create job");
  }
};



export const updatejobs = async (requestdata,id, token) => {
  try {
    console.log('requestdata check--->',requestdata)
    const response = await axios.patch(
      `${server}/api/job/update-job/${id}`,
      requestdata,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Add the Authorization header
          'Content-Type': 'application/json', // Optional, but ensures the content type
        },
      }
    );
    return response.data; // Adjust this based on the actual structure of your API response
  } catch (error) {
    console.log('error-->',error)
    // return error?.response?.data?.message
    throw new Error(error?.response?.data?.message);

  }
};




export const getAllJobs = async () => {
  try {
    const response = await axios.get(`${server}/api/job/get-jobs`);
    return response.data.jobs; // Adjust this based on the actual structure of your API response
  } catch (error) {
    throw new Error("Failed to fetch jobs");
  }
};


export const DeleteParticularJob = async (id,token) => {
  try {
    const response = await axios.delete(`${server}/api/job/delete-job/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('particular recruiter response--->',response.data?.jobs)
    return response.data?.jobs; // Adjust this based on the actual structure of your API response
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


export const getParticularJob = async (id,token) => {
  try {
    const response = await axios.get(`${server}/api/job/get-job/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('particular job response--->',response.data)
    return response.data.getJob
    ; // Adjust this based on the actual structure of your API response
  } catch (error) {
    throw new Error("Failed to fetch jobs");
  }
};





