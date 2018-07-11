import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../common/Box';
import questionMark from './question-mark.svg';
import Answer from './Answer';
import './InterviewQuestion.css';
import uuid from 'uuid4';

class InterviewQuestions extends PureComponent {
  static propTypes = {
    interviewQuestion: PropTypes.shape({
      question: PropTypes.string,
      answers: PropTypes.arrayOf(
        PropTypes.shape({
          answer: PropTypes.string,
          correct: PropTypes.bool
        })
      ),
      category: PropTypes.string
    }),
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

export default InterviewQuestions;
