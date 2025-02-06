import React from 'react'
import javaOopsQuestions from "./javaOopsQuestions.js"
import QuestionAnswerCard from '../../Interview/QuestionAnswerCard.jsx';

function JavaOops() {

  const {questions} = javaOopsQuestions;
  return (
    <div className='text-white'>
    {
      questions.map((ques, index)=> (<QuestionAnswerCard key={index} quesNo={index} question={ques}/>))
    }
</div>
  )
}

export default JavaOops