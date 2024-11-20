import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { Briefcase, Hospital, Setting } from "iconsax-react";
import LayersOutlined from "@mui/icons-material/LayersOutlined";

const Sidebar = () => {
  return (
    <Box className="h-full mt-20">
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
