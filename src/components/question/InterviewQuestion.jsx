import React, {PureComponent} from 'react';
import questionMark from './question-mark.svg';
import Question from './Question';
import Answer from './Answer';
import {getQuestions} from '../../api';
import './InterviewQuestion.css';

class InterviewQuestions extends PureComponent {
  state = {
    questions: []
  };

  componentDidMount() {
    this.setState({questions: getQuestions()})
  }

  render() {
    const {questions} = this.state;
    if (questions.length > 0) {
      return [
        questions.map(({question, answers}, idx) => {
          return (
            <div
              className="interview-question"
              key={`${question.substring(0, 2)}+${idx}`}
            >
              <img src={questionMark} className="interview-question__question-mark" alt="question-mark"/>
              <Question>
                {question}
              </Question>
              <div className="interview-question__answers-container">
                <Answer>
                  {answers}
                </Answer>
              </div>
            </div>
          )
        })
      ]
    }
    return null;
  }
}

export default InterviewQuestions;