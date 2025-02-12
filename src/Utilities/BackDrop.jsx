import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Backdrop = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Button to toggle the sidebar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-blue-500 text-white rounded-lg"
      >
        Toggle Sidebar
      </button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)} // Close sidebar on backdrop click
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && children}
      </AnimatePresence>
    </div>
  );
};

export default Backdrop;


