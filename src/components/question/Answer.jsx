import React from 'react';
import { RadioButton }from '../common';
import './Answer.css';

const AnswerItem = ({children}) => (
    <li className="answer__item">
        <RadioButton>{children}</RadioButton>
    </li>
);

const Answer = () => (
    <ul className="answer">
        <AnswerItem>Answer 1</AnswerItem>
        <AnswerItem>Answer 2</AnswerItem>
        <AnswerItem>Answer 3</AnswerItem>
    </ul>
);

export default Answer;
