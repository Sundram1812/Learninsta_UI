import React, { useEffect, useState } from "react";
import "../../App.css";
import { styles } from "../../styles";
import HomeSectionCard from "./HomeSectionCard";
import {
  FaCode,
  FaDatabase,
  FaMicrochip,
  FaReact,
  FaJava,
  FaArrowRight,
} from "react-icons/fa"; // Icons for visual appeal
import { motion } from "framer-motion"; // For animations
import SectionWrapper from "../HOC/SectionWrapper";
import { NavLink } from "react-router-dom";
import Backdrop from "../../Utilities/BackDrop";

const languages = [
  {
    name: "Java Development",
    desc: "Core Java, OOP concepts, multithreading, exception handling.",
    icon: <FaJava className="text-4xl text-orange-500" />,
  },
  {
    name: "Spring Boot",
    desc: "Dependency injection, microservices, REST APIs.",
    icon: <FaCode className="text-4xl text-green-500" />,
  },
  {
    name: "Microservices",
    desc: "Architecture patterns, scalability, and best practices.",
    icon: <FaMicrochip className="text-4xl text-blue-500" />,
  },
  {
    name: "MySQL",
    desc: "Advanced queries, optimization techniques, and database design.",
    icon: <FaDatabase className="text-4xl text-purple-500" />,
  },
  {
    name: "React JS",
    desc: "Building modern, responsive user interfaces.",
    icon: <FaReact className="text-4xl text-cyan-500" />,
  },
];

function Home() {
  const [headLength, setHeadLength] = useState(0);

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="dark:bg-main-bg bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 min-h-screen">
      <div className="px-6 py-12 mx-auto text-black dark:text-white max-w-7xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className={`${styles.heroHeadText} mb-4`}>
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600 dark:from-secondry dark:to-pink-500">
              LearnInsta Institute
            </span>
          </h1>
          <h2 className={styles.heroSubText}>
            Empower Your Career with Expert Interview Preparation
          </h2>
          <p className="mt-4 text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            At LearnInsta Institute, we are committed to helping you excel in
            your career by providing comprehensive resources and guidance for
            acing technical interviews. Whether you are a fresh graduate, a
            professional looking for a career switch, or someone aiming to
            sharpen your technical skills, we have you covered.
          </p>
        </motion.div>

        <div className="mt-10 max-w-[25rem] mx-auto">
          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <NavLink
              to="/interviews"
              className="flex items-center justify-center gap-2 px-12 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold uppercase hover:from-blue-700 hover:to-purple-700 transition-all duration-300  hover:shadow-xl transform hover:scale-105 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
            >
              <span className="flex gap-1">
                <span className="hidden md:block">Start</span> Interview Prep
              </span>
              <FaArrowRight className="w-5 h-5" />
            </NavLink>
          </motion.div>
        </div>

        {/* What We Offer Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-16"
        >
          <h2 className={styles.sectionHeadText}>What We Offer</h2>
          <h3 className={styles.sectionSubText}>Interview Question Bank</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <HomeSectionCard content={language} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
