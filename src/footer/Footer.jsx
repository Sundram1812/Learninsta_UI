import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";

const footerContent = ["About", "Blog", "Jobs", "Partners"];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gray-800 dark:to-gray-900 text-white py-12 mt-20 z-20 border-t dark:border-none">
      <div className="container mx-auto px-4 ">
        {/* Call-to-Action Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
          <p className="text-gray-200 mb-6">
            Stay updated with the latest news, tutorials, and resources.
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-0 rounded-l-lg focus:outline-none text-gray-800"
            />
            <button className="z-30 bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white  text-center  ease-in-out   transform hover:scale-105 px-6 py-3 rounded-r-lg transition duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center space-x-6 mb-6">
          {footerContent.map((content) => (
            <NavLink
              key={content}
              to={`/${content.toLowerCase()}`}
              className="hover:text-blue-300 dark:hover:text-blue-300 text-gray-200 transition duration-300"
            >
              {content}
            </NavLink>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <NavLink
            to="#"
            className="hover:text-blue-400 text-gray-200 dark:hover:text-blue-400 transition duration-300"
            title="Telegram"
          >
            <i className="fab fa-telegram text-2xl"></i>
          </NavLink>
          <NavLink
            to="#"
            className="hover:text-pink-400 text-gray-200 dark:hover:text-pink-400 transition duration-300"
            title="Instagram"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </NavLink>
          <NavLink
            to="#"
            className="hover:text-black text-gray-200 dark:hover:text-gray-400 transition duration-300"
            title="Twitter"
          >
            <i className="fab fa-x-twitter text-2xl"></i>
          </NavLink>
          <NavLink
            to="#"
            className="hover:text-white hover:bg-black px-2 py-1 rounded-full text-gray-200 transition duration-300"
            title="GitHub"
          >
            <i className="fab fa-github text-2xl"></i>
          </NavLink>
          <NavLink
            to="#"
            className="hover:text-red-500 text-gray-200 dark:hover:text-red-500 transition duration-300"
            title="YouTube"
          >
            <i className="fab fa-youtube text-2xl"></i>
          </NavLink>
        </div>

        {/* Copyright Text */}
        <p className="text-center text-sm text-gray-200">
          © 2025 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
