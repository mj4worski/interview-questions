import React, {Component} from 'react';
import {getQuestions} from '../../api';
import InterviewQuestion from './InterviewQuestion';
import {Button} from '../common';
import './InterviewForm.css'

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
        <div className="interview-form">
          <div className="interview-form__questions">
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
          <div className="interview-from-sub">
            <span className="interview-from-sub__text">Yeeeaaa...!! You go to end. After pressing the button you will not be able to return to the test.</span>
            <Button>Confirm your results</Button>
          </div>
        </div>
      )
    }
    return null;
  }
}

export default InterviewForm;