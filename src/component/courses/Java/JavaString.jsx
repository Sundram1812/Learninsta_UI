import React from 'react'
import javaStringQuestions from './javaStringQuestions'
import QuestionAnswerCard from '../../Interview/QuestionAnswerCard';
import ScrollToTop from '../../../Utilities/ScrollToTop';


function JavaString() {
    const {questions}=javaStringQuestions;
  return (
    <>
    <div className='text-white'>
    
    {
      questions.map((ques, index)=> (<QuestionAnswerCard key={index} quesNo={index} question={ques}/>))
    }
</div>
</>
  )
}

export default JavaString