/* eslint-disable */
import React, { useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { NavLink, useLocation } from "react-router-dom";
import AccordionComponent from "../courses/AccordionComponent";
import { motion } from "framer-motion";
import {
  FaJava,
  FaBook,
  FaCode,
  FaMicrochip,
  FaDatabase,
} from "react-icons/fa"; // Icons for languages
import ScrollToTop from "../../Utilities/ScrollToTop";

const languagess = [
  {
    language: "Java",
    icon: <FaJava className="text-orange-500" />,
    topics: [
      "basics",
      "String",
      "Multithreading",
      "Exception",
      "OOP's",
      "Collections",
      "Java8",
    ],
  },
  {
    language: "SpringBoot",
    icon: <FaCode className="text-green-500" />,
    topics: [
      "BootBasics",
      "BootCoreConcepts",
      "BootRESTAPI",
      "BootDataAccess",
      "BootSecurity",
    ],
  },
  {
    language: "Microservices",
    icon: <FaMicrochip className=" text-blue-500" />,
    topics: [
      // "BootBasics",
      // "BootCoreConcepts",
      // "BootRESTAPI",
      // "BootDataAccess",
      // "BootSecurity",
    ],
  },
  {
    language: "MySQL",
    icon: <FaDatabase className=" text-purple-500" />,
    topics: [
      // "BootBasics",
      // "BootCoreConcepts",
      // "BootRESTAPI",
      // "BootDataAccess",
      // "BootSecurity",
    ],
  },
  // Additional languages...
];

function QuestionLayout({ children }) {
  const [isOpenNav, setIsOpenNav] = useState(false);

  return (
    <div className="flex flex-row gap-2 relative transition-all duration-500 py-1 min-h-[63vh] overflow-y-auto no-scrollbar z-0">
      {/* Sidebar Toggle Icon (Mobile Only) */}
      <motion.div
        onClick={() => setIsOpenNav(!isOpenNav)}
        className="fixed top-[4rem] left-1 sm:left-[0.5em] mt-3 z-40 inline cursor-pointer lg:hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {!isOpenNav && (
          <div className="flex justify-center items-center p-[3px] text-white dark:text-black bg-gradient-to-r from-blue-600 to-purple-600 dark:from-purple-500 dark:to-blue-500 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <MenuOpenIcon className="text-xl" />
          </div>
        )}
      </motion.div>

      {/* Sidebar */}
      <motion.div
        className={`fixed lg:relative lg:w-[20vw] h-[100vh] dark:bg-gray-900 bg-white z-[10] lg:z-0 left-0 rounded-md overflow-y-auto no-scrollbar border-r border-gray-800 transition-all duration-500 ease-in-out shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ${
          isOpenNav
            ? "w-[70vw] sm:w-[40vw] md:w-[30vw] opacity-100 translate-x-0"
            : "w-0 opacity-0 lg:opacity-100 lg:w-[20vw] -translate-x-full lg:translate-x-0"
        }`}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Sidebar Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-purple-500 dark:to-blue-500 p-4 rounded-t-md flex items-center justify-between">
          <h2 className="text-white text-xl font-bold flex items-center gap-2">
            <FaBook className="text-white" /> Topics
          </h2>
          <motion.div
            onClick={() => setIsOpenNav(false)}
            className="cursor-pointer lg:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MenuOpenIcon className="text-white" />
          </motion.div>
        </div>

        {/* Sidebar Content */}
        <div className="flex flex-col gap-1 p-4 custom-scrollbar ">
          {languagess.map((lang, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <AccordionComponent
                langContent={lang}
                icon={lang.icon} // Pass icon to AccordionComponent
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Main Content */}

      <motion.div
        className={`h-[90vh] dark:bg-gray-900 bg-white basis-full relative z-0 py-4 pt-8 px-6 overflow-y-auto no-scrollbar overflow-x-hidden rounded-md min-h-[63vh] transition-all duration-500 ease-in-out`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="rounded-md sm:p-4">
          {children || (
            <p className="text-gray-500 dark:text-gray-300 text-center">
              No Content Available
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default QuestionLayout;
