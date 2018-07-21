import React from 'react';
import Question from './Question';
import './QuestionsList.css';

const QuestionsList = ({ questions, categories }) => (
  <ul className="questions-list">
    {questions.map(({ question }) => (
      <Question key={question} categories={categories}>
        {question}
      </Question>
    ))}
  </ul>
);

export default QuestionsList;
