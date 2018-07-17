import React, { PureComponent } from 'react';
import { Button } from '../common';
import './QuestionsList.css';

class Question extends PureComponent {
  render() {
    const { children, onEditRequest } = this.props;
    return (
      <li className="questions-list-question">
        <span className="questions-list-question__content">{children}</span>
        <Button className="questions-list-edit-button">Edit</Button>
      </li>
    );
  }
}

const QuestionsList = ({ questions }) => (
  <ul className="questions-list">
    {questions.map(({ question }) => (
      <Question key={question}>{question}</Question>
    ))}
  </ul>
);

export default QuestionsList;
