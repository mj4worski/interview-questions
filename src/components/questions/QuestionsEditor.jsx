import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from '../common';
import QuestionFormContainer from './QuestionFormContainer';
import QuestionsList from './QuestionsList';
import './QuestionsEditor.css';

const getCategories = questions => {
  const categories = questions.reduce((categories, question) => {
    categories.add(question.category);
    return categories;
  }, new Set());
  return [...categories];
};

class QuestionsEditor extends Component {
  state = {
    addQuestionClicked: false
  };

  static propTypes = {
    questions: PropTypes.array,
    addQuestionRequest: PropTypes.func.isRequired
  };

  static defaultProps = {
    questions: []
  };

  handleButtonClick = () => {
    this.setState(prevState => {
      return { addQuestionClicked: !prevState.addQuestionClicked };
    });
  };

  render() {
    const { questions, addQuestionRequest } = this.props;
    const { addQuestionClicked } = this.state;
    const categories = getCategories(questions);
    return (
      <Box className="questions-editor">
        <Box className="questions-editor-header">
          Below you can see current questions in interview form. You have the
          option of adding new question or current ones.
          <Button onClick={this.handleButtonClick}>Add new question</Button>
        </Box>
        {addQuestionClicked && (
          <QuestionFormContainer
            categories={categories}
            addQuestionRequest={addQuestionRequest}
          />
        )}
        <QuestionsList questions={questions} categories={categories} />
      </Box>
    );
  }
}

export default QuestionsEditor;
