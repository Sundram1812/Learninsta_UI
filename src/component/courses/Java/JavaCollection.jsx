import React from 'react'
import javaCollectionQuestions from './javaCollectionQuestions';
import QuestionAnswerCard from '../../Interview/QuestionAnswerCard';

function JavaCollection() {
  const {questions}= javaCollectionQuestions;
  return (
    <div className='text-white'>
        {
          questions.map((ques, index)=> (<QuestionAnswerCard key={index} quesNo={index} question={ques}/>))
        }
    </div>
  )
}

export default JavaCollection