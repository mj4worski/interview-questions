import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../common';
import QuestionForm from './QuestionForm';
import { QuestionType } from './types';
import './Question.css';

class Question extends PureComponent {
  state = {
    isEdited: false
  };

  static propTypes = {
    categories: PropTypes.array,
    question: QuestionType
  };
  handleOnEditClick = () => {
    this.setState(prevState => ({ isEdited: !prevState.isEdited }));
  };

  render() {
    const { categories, question: questionObject } = this.props;
    const { question, category, answers } = questionObject;
    const { isEdited } = this.state;
    return (
      <li className="question">
        <div className="question__content">
          <span className="question__text">{question}</span>
          <Button
            className="question__edit-button"
            onClick={this.handleOnEditClick}
          >
            Edit
          </Button>
        </div>
        {isEdited && (
          <QuestionForm
            categories={categories}
            questionValue={question}
            categoryValue={category}
            answersValue={answers}
          />
        )}
      </li>
    );
  }
}

export default Question;
