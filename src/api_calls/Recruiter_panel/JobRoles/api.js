// api.js
import axios from "axios";
import { useParams } from "react-router-dom";

const server = import.meta.env.VITE_API_URL;

// Job roles


export const createRole = async (requestdata, token) => {
  try {
    console.log('requestdata check--->',requestdata)
    const response = await axios.post(
      `${server}/api/job/add-job-role`,
      requestdata,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Add the Authorization header
          'Content-Type': 'application/json', // Optional, but ensures the content type
        },
      }
    );
    return response.data?.position; // Adjust this based on the actual structure of your API response
  } catch (error) {
    throw new Error("Failed to create job");
  }
};












export const getAllRoles = async () => {
  try {
    const response = await axios.get(`${server}/api/job/job-roles`);
    console.log("response api--->", response);
    return response.data?.hiringpos; // Adjust this based on the actual structure of your API response
  } catch (error) {
    throw new Error("Failed to fetch jobs");
  }
};




export const DeleteParticularRole= async (id,token) => {
    try {
      const response = await axios.delete(`${server}/api/job/delete-role/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('particular role response--->',response.data)
      return response.data; // Adjust this based on the actual structure of your API response
    } catch (error) {
      throw new Error("Failed to fetch jobs");
    }
  };
  