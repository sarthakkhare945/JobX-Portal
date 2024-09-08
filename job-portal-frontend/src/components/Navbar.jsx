import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Notifications as NotificationsIcon,
  ExitToApp as ExitToAppIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { Badge } from "@mui/material";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleNotificationsToggle = () =>
    setNotificationsOpen(!notificationsOpen);
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
  };

  return (
    <header className="w-full bg-white text-black py-4 px-6 flex items-center justify-between shadow-md z-50">
      <Link to="/" className="flex items-center gap-2 text-blue-800">
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
        <span className="text-xl font-bold text-blue-700">JobX</span>
      </Link>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-6">
        {localStorage.getItem("token") ? (
          <Link to="/"
          className={`hover:underline ${location.pathname === "/" ? "text-blue-600 font-bold" : ""}`}>
            Home
          </Link>
        ) : (
          <></>
        )}
        {/* <Link to="/job/get-jobs" className="hover:underline">
          Find Jobs
        </Link> */}
        <Link
  to="/job/get-jobs"
  className={`hover:underline ${location.pathname === "/job/get-jobs" ? "text-blue-600 font-bold" : ""}`}
>
  Find Jobs
</Link>

        <Link to="#" className="hover:underline">
          For Recruiters
        </Link>
        <Link to="#" className="hover:underline">
          About
        </Link>
        <Link to="#" className="hover:underline">
          Contact
        </Link>
      </nav>

      {/* Mobile Hamburger Menu */}
      <div className="flex items-center md:hidden">
        <button onClick={handleMenuToggle} className="focus:outline-none">
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Right Side: Profile or Login/Signup */}
      <div className="hidden md:flex items-center gap-4">
        {localStorage.getItem("token") ? (
          <>
            <div className="relative mr-[10px]">
              <button onClick={handleMenuToggle} className="focus:outline-none">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-20">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={handleMenuToggle}
                  >
                    Your Profile
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={handleMenuToggle}
                  >
                    Settings
                  </Link>
                  <button
                    onClick={() => {
                      handleMenuToggle();
                      handleLogout();
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <ExitToAppIcon className="mr-2" />
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="rounded-lg bg-blue-600 py-2 px-4 text-center text-base font-semibold text-white shadow-md transition hover:bg-blue-700 focus:ring-2"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="rounded-lg bg-blue-600 py-2 px-4 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 transition hover:bg-blue-700 focus:ring-2"
            >
              Post a Job
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu Content */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white z-10 md:hidden flex flex-col items-center shadow-lg py-4">
          {localStorage.getItem("token") ? (
            <Link to="/" className="py-2 text-gray-700 hover:underline">
              Home
            </Link>
          ) : (
            <></>
          )}

          <Link
            to="/job/get-jobs"
            className="py-2 text-gray-700 hover:underline"
          >
            Find Jobs
          </Link>
          <Link to="#" className="py-2 text-gray-700 hover:underline">
            For Recruiters
          </Link>
          <Link to="#" className="py-2 text-gray-700 hover:underline">
            About
          </Link>
          <Link to="#" className="py-2 text-gray-700 hover:underline">
            Contact
          </Link>

          {localStorage.getItem("token") ? (
            <>
              <Link
                to="/profile"
                className="py-2 text-gray-700 hover:underline"
              >
                Your Profile
              </Link>
              <button
                onClick={handleLogout}
                className="py-2 text-gray-700 hover:underline"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="w-full rounded-lg bg-blue-600 py-2 text-center text-white hover:bg-blue-700"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="w-full rounded-lg bg-blue-600 py-2 text-center text-white hover:bg-blue-700"
              >
                Post a Job
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
