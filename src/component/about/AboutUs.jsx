// import React from "react";
// import { styles } from "../../styles";

// function AboutUs() {
//   return (
//     <div className="min-h-[63vh] my-6 mx-6">
//       <div>
//         <h2 className={styles.heroHeadText}>About <span className="dark:text-green-500 text-red-500">Us</span></h2>
//         <p className={styles.sectionSubText}>
//           LearnInsta Institute was founded with a mission to bridge the gap
//           between aspiring professionals and their dream jobs in the tech
//           industry. Our platform serves as a one-stop destination for mastering
//           in-demand technologies and excelling in technical interviews. With
//           years of expertise, we are dedicated to equipping learners with the
//           knowledge, confidence, and tools they need to thrive in a competitive
//           job market.
//         </p>
//       </div>

//       <div className=" mt-6">
//         <h2 className={`${styles.heroSubText}`}>Our Vision</h2>
//         <p className="mt-2 dark:text-gray-200 text-gray-800text-[17px] max-w-3xl leading-[30px]">
//           To empower every learner to achieve their career aspirations by
//           providing top-quality educational resources and interview preparation
//           strategies.
//         </p>
//       </div>

//       <div className=" mt-6">
//         <h2 className={styles.heroSubText}>Why We Stand Out</h2>
//         <p className="mt-2 dark:text-gray-200 text-gray-800 text-[17px] max-w-3xl leading-[30px]">
//           Experienced Mentors: Our resources are crafted by industry experts
//           with real-world experience.<br/> Comprehensive Materials: Covering
//           everything from basics to advanced topics in trending technologies.<br/>
//           Practical Approach: Hands-on projects, real-world examples, and
//           actionable insights.<br/> Results-Driven: Thousands of learners have
//           successfully achieved their career goals with our guidance.
//         </p>
//       </div>

//       <div className=" mt-6">
//         <h2 className={styles.heroSubText}>Expert Guidance</h2>
//         <p className="mt-2 dark:text-gray-200 text-gray-800 text-[17px] max-w-3xl leading-[30px]">
//           Roadmaps for mastering specific technologies.<br/> Career advice tailored
//           to your goals.<br/> Insights into trends in the tech industry.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default AboutUs;



import React from "react";
import { styles } from "../../styles";
import { motion } from "framer-motion";
import { FaLightbulb, FaUsers, FaChartLine, FaHandsHelping } from "react-icons/fa";

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

function AboutUs() {
  return (
    <motion.div
      className="min-h-[63vh] my-12 mx-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div
        className="text-center mb-12"
        variants={itemVariants}
      >
        <h2 className={styles.heroHeadText}>
          About <span className="bg-gradient-to-r from-red-500 to-green-500 bg-clip-text text-transparent">Us</span>
        </h2>
        <p className={`${styles.sectionSubText} max-w-2xl mx-auto`}>
          LearnInsta Institute was founded with a mission to bridge the gap
          between aspiring professionals and their dream jobs in the tech
          industry. Our platform serves as a one-stop destination for mastering
          in-demand technologies and excelling in technical interviews.
        </p>
      </motion.div>

      {/* Grid Layout for Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Vision Section */}
        <motion.div
          className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          variants={itemVariants}
        >
          <div className="flex items-center mb-4">
            <FaLightbulb className="text-4xl text-yellow-500 mr-4" />
            <h2 className={`${styles.heroSubText} text-2xl font-bold`}>Our Vision</h2>
          </div>
          <p className="dark:text-gray-300 text-gray-700 text-[17px] leading-[30px]">
            To empower every learner to achieve their career aspirations by
            providing top-quality educational resources and interview preparation
            strategies.
          </p>
        </motion.div>

        {/* Why We Stand Out Section */}
        <motion.div
          className="p-6 bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          variants={itemVariants}
        >
          <div className="flex items-center mb-4">
            <FaUsers className="text-4xl text-blue-500 mr-4" />
            <h2 className={`${styles.heroSubText} text-2xl font-bold`}>Why We Stand Out</h2>
          </div>
          <ul className="dark:text-gray-300 text-gray-700 text-[17px] leading-[30px] list-disc list-inside">
            <li><span className="font-semibold">Experienced Mentors:</span> Industry experts with real-world experience.</li>
            <li><span className="font-semibold">Comprehensive Materials:</span> From basics to advanced topics.</li>
            <li><span className="font-semibold">Practical Approach:</span> Hands-on projects and real-world examples.</li>
            <li><span className="font-semibold">Results-Driven:</span> Thousands of successful learners.</li>
          </ul>
        </motion.div>

        {/* Expert Guidance Section */}
        <motion.div
          className="p-6 bg-gradient-to-br from-pink-50 to-red-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          variants={itemVariants}
        >
          <div className="flex items-center mb-4">
            <FaHandsHelping className="text-4xl text-green-500 mr-4" />
            <h2 className={`${styles.heroSubText} text-2xl font-bold`}>Expert Guidance</h2>
          </div>
          <ul className="dark:text-gray-300 text-gray-700 text-[17px] leading-[30px] list-disc list-inside">
            <li><span className="font-semibold">Roadmaps:</span> Master specific technologies.</li>
            <li><span className="font-semibold">Career Advice:</span> Tailored to your goals.</li>
            <li><span className="font-semibold">Industry Insights:</span> Stay updated with trends.</li>
          </ul>
        </motion.div>

        {/* Results Section */}
        <motion.div
          className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          variants={itemVariants}
        >
          <div className="flex items-center mb-4">
            <FaChartLine className="text-4xl text-purple-500 mr-4" />
            <h2 className={`${styles.heroSubText} text-2xl font-bold`}>Proven Results</h2>
          </div>
          <p className="dark:text-gray-300 text-gray-700 text-[17px] leading-[30px]">
            Our learners have successfully landed jobs at top tech companies like
            Google, Amazon, and Microsoft. Join us to achieve your career goals!
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AboutUs;