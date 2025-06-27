import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { Briefcase, Hospital, Setting } from "iconsax-react";
import LayersOutlined from "@mui/icons-material/LayersOutlined";

const Sidebar = () => {
  return (
    <Box className="h-full mt-8 ml-4">
      <Link to="/" className="flex items-center gap-2 ml-4 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
          />
        </svg>
        <span className="text-xl font-bold text-white">JobX</span>
      </Link>
      {/* Sidebar Navigation */}
      <Box className="mt-4">
        <nav className="flex flex-col space-y-2">
          
          <Link
            to="/"
            className="flex items-center gap-3 p-3 rounded-md text-gray-300 transition-all hover:bg-gray-800 hover:text-white"
          >
            <LayersOutlined className="h-5 w-5 text-blue-400" />
            <span className="text-md font-medium">Dashboard</span>
          </Link>

          <Link
            to="/jobs/list"
            className="flex items-center gap-3 p-3 rounded-md text-gray-300 transition-all hover:bg-gray-800 hover:text-white"
          >
            <Briefcase className="h-5 w-5 text-green-400" />
            <span className="text-md font-medium">Jobs</span>
          </Link>

          <Link
            to="/job-role"
            className="flex items-center gap-3 p-3 rounded-md text-gray-300 transition-all hover:bg-gray-800 hover:text-white"
          >
            <Briefcase className="h-5 w-5 text-green-400" />
            <span className="text-md font-medium">Job Role</span>
          </Link>

          <Link
            to="/settings"
            className="flex items-center gap-3 p-3 rounded-md text-gray-300 transition-all hover:bg-gray-800 hover:text-white"
          >
            <Setting className="h-5 w-5 text-green-400" />
            <span className="text-md font-medium">Settings</span>
          </Link>
        </nav>
      </Box>
    </Box>
  );
};

export default Sidebar;
