import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid4';
import Box from '../common/Box';
import Answer from './Answer';
import { QuestionType } from '../types';
import questionMark from './question-mark.svg';
import './InterviewQuestion.css';

class InterviewQuestion extends PureComponent {
  static propTypes = {
    interviewQuestion: QuestionType,
    onAnswerClick: PropTypes.func
  };

  render() {
    const { interviewQuestion, onAnswerClick } = this.props;
    const { question, answers, category } = interviewQuestion;
    const answersGroup = uuid();
    return (
      <Box className="interview-question">
        <img
          src={questionMark}
          className="interview-question__question-mark"
          alt="question-mark"
        />
        <div>{question}</div>
        <div className="interview-question__answers-container">
          {answers.map(({ answer, correct }) => (
            <Answer
              groupName={answersGroup}
              onAnswerClick={onAnswerClick.bind(null, {
                answer,
                question,
                correct,
                category
              })}
              key={answer}
            >
              {answer}
            </Answer>
          ))}
        </div>
      </Box>
    );
  }
}

export default InterviewQuestion;
