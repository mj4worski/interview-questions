import React, { Component } from 'react';
import Box from '../common/Box';
import { getQuestions } from '../../api';
import './QuestionsProvider.scss';

class QuestionsProvider extends Component {
  render() {
    const questions = getQuestions();
    return (
      <Box>
        <ul>{questions.map(({ question }) => <li>{question}</li>)}</ul>
      </Box>
    );
  }
}

export default QuestionsProvider;
