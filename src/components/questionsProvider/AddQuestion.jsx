import React, { PureComponent } from 'react';
import { Box, Button } from '../common';
import './AddQuestion.css';

export default class AddQuestion extends PureComponent {
  componentDidMount() {
    window.requestAnimationFrame(() => {
      this.boxRef.classList.add('add-question--show');
    });
  }

  takeBoxRef = element => {
    this.boxRef = element;
  };

  render() {
    return (
      <Box className="add-question" innerRef={this.takeBoxRef}>
        <label className="add-question__label">
          New Question
          <input
            className="add-question__input"
            type="text"
            placeholder="Provide new question"
          />
        </label>
        <Button className="add-question__button">Submit</Button>
      </Box>
    );
  }
}
