import React from "react";
import microservicesTesting from "./questions/microservicesTesting";
import QuestionAnswerDashboard from "../../QuestionAnswer/QuestionAnswerDashboard";

function MicroservicesTesting() {
  const {title, questions} = microservicesTesting;
  return <QuestionAnswerDashboard title={title} questions={questions}/>;
}

export default MicroservicesTesting;
