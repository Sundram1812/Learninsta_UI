import React from "react";
import microservicesDesignPatterns from "./questions/microservicesDesignPatterns";
import QuestionAnswerDashboard from "../../QuestionAnswer/QuestionAnswerDashboard";

function MicroservicesDesignPatterns() {

  const{title, questions}=microservicesDesignPatterns;

  return <QuestionAnswerDashboard title={title} questions={questions}/>;
}

export default MicroservicesDesignPatterns;
