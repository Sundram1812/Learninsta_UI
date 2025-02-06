import React from "react";
import { styles } from "../styles";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function PageNotFound() {
  return (
    <div className=" min-h-[63vh] flex flex-col gap-10 justify-center items-center">
      <div>
        <span className="lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600 dark:from-secondry dark:to-pink-500 text-4xl font-extrabold text-center ">
          Page Not Found
        </span>
      </div>
      {/* Start Button */}
      <motion.div variants={itemVariants}>
        <NavLink
          to="/"
          className="flex items-center justify-center gap-2 px-12 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold uppercase hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <span>Go to Home page</span>
          <FaArrowRight className="w-5 h-5" />
        </NavLink>
      </motion.div>
    </div>
  );
}

export default PageNotFound;
