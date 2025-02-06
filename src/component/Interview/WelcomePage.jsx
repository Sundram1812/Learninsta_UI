// import React from 'react'
// import { styles } from '../../styles'
// import { NavLink } from 'react-router-dom'

// function WelcomePage() {
//   return (
//     <div className=' min-h-[63vh] flex flex-col items-center'>
//         <h2 className={`${styles.heroHeadText} dark:text-gray-700  text-center`}><span className='dark:text-gray-300 text-gray-700'>Welcome To Interview Page</span></h2>
//         <h3 className={`${styles.sectionHeadText} mt-6 text-center `}><span className='text-gray-500'>Please select Subjects</span> </h3>
//         <NavLink to="/interviews/java/basics" className="dark:text-white text-gray-800  font-extrabold px-16 py-6 rounded-sm dark:bg-gray-900 hover:bg-gray-300 bg-gray-200  mt-10 dark:hover:bg-gray-950 transition-all duration-300 uppercase shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">Start</NavLink>
//     </div>
//   )
// }

// export default WelcomePage


import React from "react";
import { styles } from "../../styles";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

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

function WelcomePage() {
  return (
    <motion.div
      className="min-h-[63vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Heading */}
      <motion.h2
        className={`${styles.heroHeadText} text-center mb-4`}
        variants={itemVariants}
      >
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Welcome To Interview Prep
        </span>
      </motion.h2>

      {/* Subheading */}
      <motion.h3
        className={`${styles.sectionHeadText} text-center mb-8`}
        variants={itemVariants}
      >
        <span className="text-gray-500 dark:text-gray-400">
          Master your skills and ace your interviews
        </span>
      </motion.h3>

      {/* Start Button */}
      <motion.div variants={itemVariants}>
        <NavLink
          to="/interviews/java/basics"
          className="flex items-center justify-center gap-2 px-12 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold uppercase hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <span>Get Started</span>
          <FaArrowRight className="w-5 h-5" />
        </NavLink>
      </motion.div>

      {/* Additional Features Section */}
      <motion.div
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {/* Feature 1 */}
        <motion.div
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          variants={itemVariants}
        >
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Comprehensive Topics
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Cover all essential topics from basics to advanced concepts.
          </p>
        </motion.div>

        {/* Feature 2 */}
        <motion.div
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          variants={itemVariants}
        >
          <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-4">
            Expert Guidance
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Learn from industry experts with real-world experience.
          </p>
        </motion.div>

        {/* Feature 3 */}
        <motion.div
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          variants={itemVariants}
        >
          <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-4">
            Practical Approach
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Hands-on projects and real-world examples to boost your skills.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default WelcomePage;