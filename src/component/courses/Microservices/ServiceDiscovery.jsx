import React from 'react'
import {motion} from "framer-motion"
import { styles } from "../../../styles.js";
import QuestionAnswerCard from "../../Interview/QuestionAnswerCard.jsx";
import serviceDiscovery from './questions/serviceDiscovery.js';

function ServiceDiscovery() {
  const { questions, title } = serviceDiscovery;
  
  return (
    <section className="relative">
      <motion.div
        className={`${styles.heroSubText} text-center sticky -top-8 z-50 bg-gray-500 dark:bg-gradient-to-r dark:from-fuchsia-600 dark:to-purple-600 bg-gradient-to-r from-violet-200 to-pink-200 rounded-t-md`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 1}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {title}
      </motion.div>

      <div className="text-white">
        {questions?.map((ques, index) => (
          <QuestionAnswerCard key={index} quesNo={index} question={ques} />
        ))}
      </div>
    </section>
  );
}

export default ServiceDiscovery