import React from 'react';
import PropTypes from 'prop-types';
import './Question.css';

const Question = ({children}) => (
    <div className="question">
        {children}
    </div>
);

Question.prototypes = {
    children: PropTypes.string.isRequired,
};

export default Question;