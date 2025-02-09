import { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

function HomeSectionCard({ content }) {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div
      className="flex flex-col items-start gap-4 w-auto overflow-x-hidden dark:bg-gray-800 bg-white font-semibold text-gray-700 dark:text-white py-4 px-6 rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer transition-all duration-300 hover:shadow-lg no-scrollbar"
      onClick={toggleDescription}
    >
      <div className=" flex w-full justify-between items-center">
        <div className="flex items-center gap-4">
          <span>{content?.icon}</span>
          <span>{content?.name}</span>
        </div>

        <div>
          {isDescriptionVisible ? (
            <ChevronDownIcon className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronRightIcon className="h-5 w-5 text-gray-500 font-bold" />
          )}
        </div>
      </div>

      {/* Description */}
      <AnimatePresence>
        {isDescriptionVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2 text-sm text-gray-600 dark:text-gray-300 border-t pt-2 border-gray-600"
          >
            {content?.desc}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default HomeSectionCard;
