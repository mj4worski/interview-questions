import React from 'react';
import PropTypes from 'prop-types';
import './RadioButton.css';

const RadioButton = ({children, name}) => (
    <label className="radio-button">
        <div className="button-container">
            <input className="radio-button__native" type="radio" defaultChecked name={name}/>
            <span className="radio-button__button"/>
        </div>
        <span className="radio-button__label">{children}</span>
    </label>
);

RadioButton.propTypes = {
    children: PropTypes.string,
    name: PropTypes.string,
};

export default RadioButton;