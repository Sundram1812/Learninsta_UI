import eventDrivenMicroservices from "./questions/eventDrivenMicroservices";
import QuestionAnswerDashboard from "../../QuestionAnswer/QuestionAnswerDashboard";

function EventDrivenMicroservices() {
  const {title, questions}= eventDrivenMicroservices;
  return (
    <QuestionAnswerDashboard title={title} questions={questions}/>
  );
}

export default EventDrivenMicroservices;
