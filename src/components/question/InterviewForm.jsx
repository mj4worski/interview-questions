import React, {Component} from 'react';
import {getQuestions} from '../../api';
import InterviewQuestion from './InterviewQuestion';

class InterviewForm extends Component {
  state = {
    questions: [],
  };

  componentDidMount() {
    this.setState({questions: getQuestions()})
  }

  userAnswers = [];

  collectUserAnswer = (answer) => {
    this.userAnswers.push(answer);
  };

  render() {
    const {questions} = this.state;
    if (questions.length > 0) {
      return (
        <div>
          {
            questions.map(({question, answers}) => (
              <InterviewQuestion
                question={question}
                answers={answers}
                key={question}
                onAnswerClick={this.collectUserAnswer}
              />
            ))
          }
        </div>
      )
    }
    return null;
  }
}

export default InterviewForm;