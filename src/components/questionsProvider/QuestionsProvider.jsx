import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from '../common';
import AddQuestion from './AddQuestion';
import QuestionsList from './QuestionsList';
import './QuestionsProvider.css';

const getCategories = questions => {
  const categories = questions.reduce((categories, question) => {
    categories.add(question.category);
    return categories;
  }, new Set());
  return [...categories];
};

class QuestionsProvider extends Component {
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
      <Box>
        <Box className="questions-provider-header">
          Below you can see current questions in interview form. You have the
          option of adding new question or current ones.
          <Button onClick={this.handleButtonClick}>Add new question</Button>
        </Box>
        {addQuestionClicked && (
          <AddQuestion
            categories={categories}
            addQuestionRequest={addQuestionRequest}
          />
        )}
        <QuestionsList questions={questions} />
      </Box>
    );
  }
}

export default QuestionsProvider;
