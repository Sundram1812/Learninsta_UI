import distributedLogging from "./questions/distributedLogging";
import QuestionAnswerDashboard from "../../QuestionAnswer/QuestionAnswerDashboard";

function DistributedLogging() {
  const { questions, title } = distributedLogging;
  return (
    <>
      <QuestionAnswerDashboard title={title} questions={questions} />
    </>
  );
}

export default DistributedLogging;
