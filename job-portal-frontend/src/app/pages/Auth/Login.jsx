import React, { useState } from "react";
// import LoginImg from "../../../assets/Login.png";
import { Link, useNavigate } from "react-router-dom";
import LoginImg from "../../../assets/login.png";
import { login } from "../../../api_calls/Auth/Auth";
import { toast, Toaster } from "react-hot-toast";

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { email, password } = formValues;
  
      // } else {
      const { ...submissionData } = formValues; // Exclude confirmPassword
      console.log("Form values to be submitted:", submissionData);
      const res = await login(submissionData);
      console.log('res kya aara --->',res)
      // localStorage.setItem('role',res.role)
      toast.success("Loggedin Successfully");
      localStorage.setItem('token',res.token)
      setFormValues({
        email: "",
        password: "",
      });
      navigate("/");
      window.location.reload()
      
    } catch (error) {
      toast.error('Invalid email and Password')
      
    }
  

    // }
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
            src={LoginImg}
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
            Login
          </p>

          <form
            className="flex flex-col items-stretch pt-3 md:pt-8"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="email"
                  name="email"
                  id="login-email"
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
                  id="login-password"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Enter Your Password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* <div className="flex justify-between"> */}
            <button
              type="submit"
              className="rounded-lg bg-blue-600 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-50"
            >
              Sign in
            </button>
            <p className="mt-6 text-center font-medium md:text-left">
              Already using jobX?
              <Link
                to="/signup"
                className="whitespace-nowrap font-semibold text-blue-700 ml-4"
              >
                Signup here
              </Link>
            </p>
            {/* </div> */}
          </form>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Login;
