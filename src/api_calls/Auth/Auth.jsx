import axios from "axios";

const server = import.meta.env.VITE_API_URL;

export const register = async (formValues) => {
  try {
    console.log("api calling m details ", formValues);
    const response = await axios.post(
      `${server}/api/user/register`,
      formValues
    );

    return response.data;
  } catch (error) {
    throw new Error("Failed to register");
    console.error(error);
  }
};





export const login = async (formValues) => {
  try {
    console.log("api calling m details ", formValues);
    const response = await axios.post(
      `${server}/api/user/login`,
      formValues
    );

    return response.data;
  } catch (error) {
    throw new Error("Failed to login");
    console.error(error);
  }
};