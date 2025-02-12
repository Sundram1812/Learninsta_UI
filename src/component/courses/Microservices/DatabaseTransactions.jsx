import React from "react";
import databaseTransactions from "./questions/databaseTransactions";
import QuestionAnswerDashboard from "../../QuestionAnswer/QuestionAnswerDashboard";

function DatabaseTransactions() {
  const {title, questions}=databaseTransactions;
  return <QuestionAnswerDashboard title={title} questions={questions}/>
}

export default DatabaseTransactions;
