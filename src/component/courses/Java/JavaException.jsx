import React from "react";
import javaExceptionQuestions from "./javaExceptionQuestions";
import QuestionAnswerCard from "../../Interview/QuestionAnswerCard";
import { styles } from "../../../styles";

function JavaException() {
  const { questions, title } = javaExceptionQuestions;
  return (
    <section className="relative">
      <div
        className={`${styles.heroSubText} text-center sticky -top-8 z-50 bg-gray-500 dark:bg-gradient-to-r dark:from-fuchsia-600 dark:to-purple-600 bg-gradient-to-r from-violet-200 to-pink-200 rounded-t-md`}
      >
        {title}
      </div>
      <div className="text-white">
        {questions.map((ques, index) => (
          <QuestionAnswerCard key={index} quesNo={index} question={ques} />
        ))}
      </div>
    </section>
  );
}

export default JavaException;
