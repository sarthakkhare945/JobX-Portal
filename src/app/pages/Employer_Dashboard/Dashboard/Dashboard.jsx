import React, { useState, useEffect, useCallback } from "react";
import Sidebar from "../Components/sidebar/Sidebar";
import MainContent from "../Components/MainContent/MainContent";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Adjust threshold as needed

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Conditional Rendering Based on Screen Size */}
      {isMobile ? (
        <div className="flex items-center justify-center h-full bg-blue-100 p-6 rounded-lg shadow-md">
          <div className="text-center">
            <p className="text-blue-700 text-lg font-semibold">
              📱 This app is only applicable for desktop version as of now.
            </p>
          </div>
        </div>
      ) : (
        <>
          {/* Sidebar Section */}
          <div
            className={`fixed top-0 left-0 md:relative w-64 md:w-1/6 h-full bg-gray-800 z-20 transition-transform duration-300 ease-in-out
            ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0`}
          >
            <Sidebar closeSidebar={toggleSidebar} />
          </div>

          {/* Main Content Section */}
          <div className="flex-1 bg-gray-100 p-4">
            {/* <button
              onClick={toggleSidebar}
              className="md:hidden bg-blue-600 text-white p-2 rounded-lg mb-4"
            >
              Toggle Sidebar
            </button> */}

            <MainContent />
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
