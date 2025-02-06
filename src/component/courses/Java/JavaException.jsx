import React from "react";
import javaExceptionQuestions from "./javaExceptionQuestions";
import QuestionAnswerCard from "../../Interview/QuestionAnswerCard";

function JavaException() {
  const { questions } = javaExceptionQuestions;
  return (
    <div className="text-white">
      {questions.map((ques, index) => (
        <QuestionAnswerCard key={index} quesNo={index} question={ques} />
      ))}
    </div>
  );
}

export default JavaException;
