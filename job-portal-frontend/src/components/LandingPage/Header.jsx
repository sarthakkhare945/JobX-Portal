import React from "react";
import Button from "@mui/material/Button";
import landingimage from "../../assets/landingbg.jpg";
import landingimagebg from "../../assets/handsome-man-pointing-lateral.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TextAnimation from "./HeaderTextAnimation/TextAnimation";

const Header = () => {
  return (
    <section id="hero" className="bg-red-100">
      {/* Flex Container */}
      <div className="flex items-center justify-center md:min-h-[91vh] h-[40vh] p-4">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl space-y-6 md:space-y-0 md:space-x-6">
          {/* Text and Button for All Devices */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:w-1/2">
            {/* <div className="bg-white p-6 rounded-lg shadow-lg md:hidden w-full"> */}
            <TextAnimation />
            {/* </div> */}
            <button className="relative px-8 py-2 rounded-md bg-white font-bold isolation-auto z-10 border-2 border-blue-600 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 hover:text-white before:rounded-full before:bg-blue-600 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">
              Explore
            </button>
          </div>
          {/* Image for Medium and Large Devices */}
          <motion.div
            className="hidden md:flex md:w-1/2 justify-center"
            initial={{ x: 200, opacity: 0 }} // Start further off-screen and fully transparent
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5, // Delay before the animation starts
              x: { type: "spring", stiffness: 60, damping: 20, duration: 1.5 }, // Slower and less bouncy effect
              opacity: { duration: 1, ease: "easeIn" }, // Smooth fade-in effect
            }}
          >
            <img
              src={landingimagebg}
              alt="Landing"
              className="w-full h-[80vh] max-w-full object-contain rounded-md md:mt-[100px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Header;
