import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { QuestionType } from '../types';
import InterviewQuestion from './InterviewQuestion';
import { Button } from '../common';
import './InterviewForm.css';

class InterviewForm extends Component {
  state = {
    fireRedirect: false
  };

  static propTypes = {
    questions: PropTypes.arrayOf(QuestionType),
    onFormSubmit: PropTypes.func.isRequired
  };

  static defaultProps = {
    questions: []
  };

  collectUserAnswer = questionId => answer => {
    this.testResult[questionId].answer = answer;
  };

  submitForm = () => {
    this.props.onFormSubmit(this.testResult);
    this.setState({ fireRedirect: true });
  };

  createTestResultStructure = questions => {
    this.testResult = questions.reduce((testResult, processedQuestion) => {
      const { id: questionId, question, category } = processedQuestion;
      return {
        ...testResult,
        [questionId]: {
          question,
          category,
          answer: null
        }
      };
    }, {});
  };

  render() {
    const { questions } = this.props;
    const { fireRedirect } = this.state;
    const { from } = this.props.location.state || '/';
    if (questions.length > 0 && !fireRedirect) {
      this.createTestResultStructure(questions);
      return (
        <section className="interview-form">
          <div className="interview-form__questions">
            {questions.map(interviewQuestion => (
              <InterviewQuestion
                interviewQuestion={interviewQuestion}
                key={interviewQuestion.question}
                onAnswerClick={this.collectUserAnswer(interviewQuestion.id)}
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
        </section>
      );
    } else if (fireRedirect) {
      return <Redirect to={from || '/result'} />;
    } else {
      return null;
    }
  }
}

export default InterviewForm;
