import React from "react";
import java8Questions from "./java8Questions";
import QuestionAnswerCard from "../../Interview/QuestionAnswerCard";

function Java8() {
  const { questions } = java8Questions;
  console.log(questions);

  return (
    <div className="text-white">
      {questions?.map((ques, index) => (
        <QuestionAnswerCard key={index} quesNo={index} question={ques} />
      ))}
    </div>
  );
}

export default Java8;
