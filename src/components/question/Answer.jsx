import React, {Children} from 'react';
import PropTypes from 'prop-types';
import {RadioButton} from '../common';
import './Answer.css';

const AnswerItem = ({children}) => (
    <li className="answer__item">
        <RadioButton>{children}</RadioButton>
    </li>
);

AnswerItem.proptypes = {
    children: PropTypes.string.isRequired,
};

const Answer = ({children}) => (
    <ul className="answer">
        {
            Children.map(children, child => <AnswerItem>{child}</AnswerItem>)
        }
    </ul>
);

Answer.proptypes = {
    children: PropTypes.arrayOf(PropTypes.string),
};

export default Answer;
