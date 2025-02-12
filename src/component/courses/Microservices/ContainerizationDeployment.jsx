import React from "react";
import containerizationDeployment from "./questions/containerizationDeployment";
import QuestionAnswerDashboard from "../../QuestionAnswer/QuestionAnswerDashboard";

function ContainerizationDeployment() {
  const {title, questions}= containerizationDeployment;
  return <QuestionAnswerDashboard title={title} questions={questions}/>;
}

export default ContainerizationDeployment;
