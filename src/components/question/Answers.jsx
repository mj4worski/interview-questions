import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid4';
import {RadioButton} from '../common';
import './Answers.css';

const Answers = ({answers}) => {
  const id = uuid();
  return (
    <ul className="answer">
      {
        answers.map(({answer}, idx) => (
            <li className="answer__item" key={answer}>
              <RadioButton
                name={id}
              >
                {answer}
              </RadioButton>
            </li>
          )
        )
      }
    </ul>
  )
};

Answers.proptypes = {
  answers: PropTypes.arrayOf(PropTypes.shape({
    answer: PropTypes.string,
    correct: PropTypes.bool,
  })),
};

export default Answers;
