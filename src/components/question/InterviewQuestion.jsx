import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import questionMark from './question-mark.svg';
import Answers from './Answers';
import './InterviewQuestion.css';

class InterviewQuestions extends PureComponent {
  static propTypes = {
    question: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.shape({
      answer: PropTypes.string,
      correct: PropTypes.bool,
    })),
  };

  render() {
    const {question, answers} = this.props;
    return (
      <div>
        <div className="interview-question">
          <img src={questionMark} className="interview-question__question-mark" alt="question-mark"/>
          <div>
            {question}
          </div>
          <div className="interview-question__answers-container">
            <Answers answers={answers} />
          </div>
        </div>
      </div>
    );
  }
}

export default InterviewQuestions;