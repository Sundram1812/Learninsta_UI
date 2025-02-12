import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const footerContent = ["About", "Blog", "Jobs", "Partners"];

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-r from-violet-200 to-pink-200 dark:text-gray-200 dark:from-gray-800 dark:to-gray-900  py-16 mt-20 border-t dark:border-none">
      <div className="container mx-auto px-4">
        {/* Call-to-Action Section */}
        <motion.div
          className="text-center mb-12 "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="dark:text-gray-200 mb-6 text-lg">
            Stay updated with the latest news, tutorials, and resources.
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-l-lg focus:outline-none text-gray-800 w-64 sm:w-80"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-r-lg transition duration-300"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {footerContent.map((content) => (
            <NavLink
              key={content}
              to={`/${content.toLowerCase()}`}
              className="hover:text-blue-300 dark:hover:text-blue-300 dark:text-gray-200 transition duration-300 text-lg"
            >
              {content}
            </NavLink>
          ))}
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          className="flex justify-center gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <NavLink
            to="#"
            className="hover:text-blue-400 dark:text-gray-200 dark:hover:text-blue-400 transition duration-300"
            title="Telegram"
          >
            <i className="fab fa-telegram text-3xl"></i>
          </NavLink>
          <NavLink
            to="#"
            className="hover:text-pink-400 dark:text-gray-200 dark:hover:text-pink-400 transition duration-300"
            title="Instagram"
          >
            <i className="fab fa-instagram text-3xl"></i>
          </NavLink>
          <NavLink
            to="#"
            className="hover:text-black dark:text-gray-200 dark:hover:text-gray-400 transition duration-300"
            title="Twitter"
          >
            <i className="fab fa-x-twitter text-3xl"></i>
          </NavLink>
          <NavLink
            to="#"
            className="hover:text-white hover:bg-black  rounded-full dark:text-gray-200 duration-300 transition-all"
            title="GitHub"
          >
            <i className="fab fa-github text-3xl"></i>
          </NavLink>
          <NavLink
            to="#"
            className="hover:text-red-500 dark:text-gray-200 dark:hover:text-red-500 transition duration-300"
            title="YouTube"
          >
            <i className="fab fa-youtube text-3xl"></i>
          </NavLink>
        </motion.div>

        {/* Copyright Text */}
        <motion.p
          className="text-center text-sm dark:text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          © 2025 Your Company, Inc. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
