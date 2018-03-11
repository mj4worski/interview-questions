import React, {Children} from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid4';
import {RadioButton} from '../common';
import './Answer.css';

const Answer = ({children}) => {
  const id = uuid();
  return (
    <ul className="answer">
      {
        Children.map(children, (child, idx) => (
            <li className="answer__item">
              <RadioButton
                name={id}
              >
                {child}
              </RadioButton>
            </li>
          )
        )
      }
    </ul>
  )
};

Answer.proptypes = {
  children: PropTypes.arrayOf(PropTypes.string),
};

export default Answer;
