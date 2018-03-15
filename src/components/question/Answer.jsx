import React from 'react';
import PropTypes from 'prop-types';
import {RadioButton} from '../common';
import './Answer.css';

const Answer = ({children, onAnswerClick, groupName}) => {
  return (
    <div className="answer">
      <RadioButton
        name={groupName}
        onClick={onAnswerClick}
      >
        {children}
      </RadioButton>
    </div>
  )
};

Answer.proptypes = {
  correct: PropTypes.bool,
  children: PropTypes.string,
  onAnswerClick: PropTypes.func,
  groupName: PropTypes.string,
};

export default Answer;
