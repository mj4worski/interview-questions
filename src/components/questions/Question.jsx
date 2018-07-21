import React, { PureComponent } from 'react';
import { Button } from '../common';
import QuestionForm from './QuestionForm';
import './Question.css';

class Question extends PureComponent {
  state = {
    isEdited: false
  };

  handleOnEditClick = () => {
    this.setState(prevState => ({ isEdited: !prevState.isEdited }));
  };

  render() {
    const { children, categories } = this.props;
    const { isEdited } = this.state;
    return (
      <li className="question">
        <div className="question__content">
          <span className="question__text">{children}</span>
          <Button
            className="question__edit-button"
            onClick={this.handleOnEditClick}
          >
            Edit
          </Button>
        </div>
        {isEdited && <QuestionForm categories={categories} />}
      </li>
    );
  }
}

export default Question;
