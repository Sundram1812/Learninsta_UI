import React from "react";
import { styles } from "../../styles";
import CodeSnippet from "../code-/CodeSnippet";
import ComparisonTable from "../hero/ComparisonTable";
import { FaQuestionCircle, FaLightbulb, FaCode } from "react-icons/fa"; // Import icons
import { motion } from "framer-motion"; // Import motion from framer-motion for animations

function QuestionAnswerCard({ question, quesNo }) {
  return (
    <motion.div
      className="mb-6 py-6 px-2 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
      // whileHover={{ scale: 1.02 }} // Add a slight scale effect on hover
      // whileTap={{ scale: 0.98 }} // Add a slight scale effect on tap
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Question Section */}
      <div className={`${styles.questionText} flex gap-2 items-center mb-4`}>
        <FaQuestionCircle className="text-blue-500 dark:text-blue-400 hidden md:block text-2xl" />
        <p className="font-semibold text-xl dark:text-white">
          {quesNo + 1}.{" "}
          {question?.content?.question || question?.comparision?.question}
        </p>
      </div>

      {/* Answer Section */}
      <div className="ml-2 mb-4 ">
        <div className="dark:text-gray-300 text-gray-700">
          {question?.content?.answer ||
            (question?.comparision && (
              <ComparisonTable format={question?.comparision} />
            ))}
        </div>
      </div>

      {/* Explanation and Code Snippet Section */}
      {question?.content?.explanation || question?.content?.codeSnippet ? (
        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg ]">
          {question?.content?.explanation && (
            <div className="flex gap-2 items-start mb-4">
              <FaLightbulb className="text-yellow-500 hidden md:block dark:text-yellow-400 text-2xl mt-1" />
              <div className="dark:text-gray-300 text-gray-700 italic text-left overflow-x-scroll no-scrollbar">
                {/* {question?.content?.explanation} */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: question?.content?.explanation,
                  }}
                />
              </div>
            </div>
          )}

          {question?.content?.codeSnippet && (
            <div className=" ">
              {/* <FaCode className="text-green-500 dark:text-green-400 text-2xl mt-1" /> */}
              <CodeSnippet
                language="java"
                code={question?.content?.codeSnippet}
              />
            </div>
          )}
        </div>
      ) : null}
    </motion.div>
  );
}

export default QuestionAnswerCard;
