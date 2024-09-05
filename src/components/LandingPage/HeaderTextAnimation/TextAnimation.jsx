import React from "react";
import { motion } from "framer-motion";

const TextAnimation = () => {
  return (
    <div>
      <motion.div
        initial={{ x: -200, opacity: 0 }} // Start further off-screen and fully transparent
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.5, // Delay before the animation starts
          x: { type: "spring", stiffness: 60, damping: 20, duration: 1.5 }, // Slower and less bouncy effect
          opacity: { duration: 1, ease: "easeIn" }, // Smooth fade-in effect
        }}
      >
        <h1 className="text-3xl font-bold md:text-left md:text-5xl text-gray-800 text-center max-w-[80vw]">
          Connecting{" "}
          <motion.span
            initial={{ color: "#1E3A8A" }} // Initial color (blue)
            animate={{
              color: ["#1E3A8A", "#6D28D9", "#059669", "#DC2626", "#1E3A8A"],
            }} // Cycle through colors
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          >
            Talent
          </motion.span>{" "}
          with{" "}
          <motion.span
            initial={{ color: "#6D28D9" }} // Initial color (purple)
            animate={{
              color: ["#6D28D9", "#059669", "#DC2626", "#1E3A8A", "#6D28D9"],
            }} // Cycle through colors
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          >
            Opportunity
          </motion.span>
          . Your{" "}
          <motion.span
            initial={{ color: "#059669" }} // Initial color (green)
            animate={{
              color: ["#059669", "#DC2626", "#1E3A8A", "#6D28D9", "#059669"],
            }} // Cycle through colors
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          >
            Future
          </motion.span>{" "}
          Starts{" "}
          <motion.span
            initial={{ color: "#DC2626" }} // Initial color (red)
            animate={{
              color: ["#DC2626", "#1E3A8A", "#6D28D9", "#059669", "#DC2626"],
            }} // Cycle through colors
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          >
            Here!
          </motion.span>
        </h1>
      </motion.div>
    </div>
  );
};

export default TextAnimation;
