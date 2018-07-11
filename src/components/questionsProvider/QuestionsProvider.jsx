import React, { Component } from 'react';
import { Box, Button } from '../common';
import { getQuestions } from '../../api';
import './QuestionsProvider.css';

const AddQuestion = () => <Box>Bla bla bla</Box>;

class QuestionsProvider extends Component {
  state = {
    addQuestionClicked: false
  };

  handleButtonClick = () => {
    this.setState(prevState => {
      return { addQuestionClicked: !prevState.addQuestionClicked };
    });
  };

  render() {
    const { addQuestionClicked } = this.state;
    const questions = getQuestions();
    return (
      <Box>
        <Box className="questions-provider-header">
          Below you can see current questions in interview form. You have the
          option of adding new question or current ones.
          <Button onClick={this.handleButtonClick}>Add new question</Button>
        </Box>
        {addQuestionClicked && <AddQuestion />}
        <ul className="questions-provider-list">
          {questions.map(({ question }) => (
            <li className="questions-provider-list">{question}</li>
          ))}
        </ul>
      </Box>
    );
  }
}

export default QuestionsProvider;
