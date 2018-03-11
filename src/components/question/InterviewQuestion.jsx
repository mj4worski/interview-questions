import React from 'react';
import questionMark from './question-mark.svg';
import Question from './Question';
import Answer from './Answer';
import './InterviewQuestion.css';

const InterviewQuestions = () => (
    <div className="interview-question">
        <img src={questionMark} className="interview-question__question-mark" alt="question-mark" />
        <Question />
        <div className="interview-question__answers-container">
            <Answer/>
        </div>
    </div>
);

export default InterviewQuestions;