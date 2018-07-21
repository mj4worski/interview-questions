import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import uniqBy from 'lodash/unionBy';
import InterviewQuestion from './InterviewQuestion';
import { Button } from '../common';
import './InterviewForm.css';

class InterviewForm extends Component {
  state = {
    fireRedirect: false
  };

  static propTypes = {
    questions: PropTypes.array,
    onFormSubmit: PropTypes.func.isRequired
  };

  static defaultProps = {
    questions: []
  };

  userAnswers = [];

  collectUserAnswer = answer => {
    this.userAnswers.push(answer);
  };

  submitForm = () => {
    this.props.onFormSubmit(
      uniqBy(this.userAnswers.reverse(), answer => answer.question)
    );
    this.setState({ fireRedirect: true });
  };

  render() {
    const { questions } = this.props;
    const { fireRedirect } = this.state;
    const { from } = this.props.location.state || '/';
    if (questions.length > 0) {
      return (
        <section className="interview-form">
          <div className="interview-form__questions">
            {questions.map(interviewQuestion => (
              <InterviewQuestion
                interviewQuestion={interviewQuestion}
                key={interviewQuestion.question}
                onAnswerClick={this.collectUserAnswer}
              />
            ))}
          </div>
          <div className="interview-from-sub">
            <span className="interview-from-sub__text">
              Yeeeaaa...!! You go to end. After pressing the button you will not
              be able to return to the test.
            </span>
            <Button onClick={this.submitForm}>Confirm your results</Button>
          </div>
          {fireRedirect && <Redirect to={from || '/result'} />}
        </section>
      );
    }
    return null;
  }
}

export default InterviewForm;
