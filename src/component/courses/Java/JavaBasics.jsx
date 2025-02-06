import React from 'react'
import basics from './basics.js'
import QuestionAnswerCard from '../../Interview/QuestionAnswerCard.jsx';
import ScrollToTop from '../../../Utilities/ScrollToTop.jsx';

function JavaBasics() {
  const {questions}= basics;
  return (
    <div className='text-white'>
        {
          questions.map((ques, index)=> (<QuestionAnswerCard key={index} quesNo={index} question={ques}/>))
        }
    </div>
  )
}

export default JavaBasics