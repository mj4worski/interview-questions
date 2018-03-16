import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { uniqBy }from 'lodash';
import {getQuestions} from '../../api';
import InterviewQuestion from './InterviewQuestion';
import {Button} from '../common';
import './InterviewForm.css'

class InterviewForm extends Component {
  state = {
    questions: [],
    fireRedirect: false,
  };

  componentDidMount() {
    this.setState({questions: getQuestions()})
  }

  userAnswers = [];

  collectUserAnswer = (answer) => {
    this.userAnswers.push(answer);
  };

  submitForm = () => {
    this.userAnswers = uniqBy(this.userAnswers.reverse(), (answer) => answer.question);
    this.setState({ fireRedirect: true })
  };

  render() {
    const {questions, fireRedirect} = this.state;
    const { from } = this.props.location.state || '/';
    if (questions.length > 0) {
      return (
        <section className="interview-form">
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
            <Button onClick={this.submitForm}>Confirm your results</Button>
          </div>
          {fireRedirect && (
            <Redirect to={from || '/result'}/>
          )}

        </section>
      )
    }
    return null;
  }
}

export default InterviewForm;