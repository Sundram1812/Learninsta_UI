import React from "react";
import QuestionAnswerCard from "../../Interview/QuestionAnswerCard";
import javaMultithreadingQuestions from "./javaMultithreadingQuestions";

function JavaMultithreading() {
  const { questions } = javaMultithreadingQuestions;
  return (
    <div className="text-white">
      {questions.map((ques, index) => (
        <QuestionAnswerCard key={index} quesNo={index} question={ques} />
      ))}
    </div>
  );
}

export default JavaMultithreading;
