import React, { useState } from "react";
import SignupImg from "../../../assets/Signup.png";
import { Link } from "react-router-dom";
import { register } from "../../../api_calls/Auth/Auth";
import { toast,Toaster } from 'react-hot-toast';


const Signup = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    if (name === "password" || name === "confirmPassword") {
      if (name === "password" && value.length < 8) {
        setPasswordError("Password must be at least 8 characters");
      } else if (name === "confirmPassword" && value !== formValues.password) {
        setPasswordError("Passwords do not match");
      } else {
        setPasswordError("");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, name } = formValues;

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      const { confirmPassword, ...submissionData } = formValues; // Exclude confirmPassword
      console.log("Form values to be submitted:", submissionData);
      const res = await register(submissionData);
      console.log("User registered successfully");
      toast.success('Registered Successfully')
      setFormValues({
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
      });
    }
  };

  return (
    <div className="flex flex-wrap text-slate-800 h-screen">
      <div className="relative hidden h-screen select-none flex-col justify-center bg-blue-600 text-center md:flex md:w-1/2">
        <div className="mx-auto px-8 text-white xl:w-[40rem]">
          <p className="my-6 text-5xl font-semibold leading-10">
            <span className="mt-4 block pb-2">Connecting You</span>
            <span className="mt-4 block pb-6">With</span>
            <span className="py-5">Top Talent.</span>
          </p>

          <img
            className="mx-auto w-11/12 max-w-lg rounded-lg object-cover"
            src={SignupImg}
            alt="Signup"
          />

          <p className="mb-6">
            Browse over 130K jobs at top companies and fast-growing startups.
          </p>
          <a
            href="#"
            className="font-semibold tracking-wide text-white underline underline-offset-4"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="flex w-full flex-col md:w-1/2">
        <div className="mx-auto w-full max-w-md rounded-lg bg-white p-8 mt-20 shadow-md lg:max-w-lg">
          <p className="text-center text-3xl font-bold md:text-left md:leading-tight">
            Create your free account
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-stretch pt-3 md:pt-8"
          >
            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="text"
                  name="name"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Name"
                  value={formValues.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="email"
                  name="email"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="password"
                  name="password"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Password (minimum 8 characters)"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>
              {passwordError && (
                <p className="text-red-500 text-sm mt-2">{passwordError}</p>
              )}
            </div>

            <div className="mb-4 flex flex-col">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="password"
                  name="confirmPassword"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Confirm Password"
                  value={formValues.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              {passwordError && (
                <p className="text-red-500 text-sm mt-2">{passwordError}</p>
              )}
            </div>

            <button
              type="submit"
              className="rounded-lg bg-blue-600 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-50"
            >
              Sign Up
            </button>
            <p className="mt-6 text-center font-medium md:text-left">
              Already using jobX?
              <Link
                to="/login"
                className="whitespace-nowrap font-semibold text-blue-700 ml-4"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
  );
};

export default Signup;
