import React from 'react'
import javaQuestions from './javaQuestions'
import QuestionAnswerCard from '../../Interview/QuestionAnswerCard';

function Java() {
  console.log(javaQuestions);

  const {questions}=javaQuestions;
  
  return (
    <div className='text-white'>
        {
          questions.map((ques, index)=> (<QuestionAnswerCard key={index} quesNo={index} question={ques}/>))
        }
    </div>
  )
}

export default Java