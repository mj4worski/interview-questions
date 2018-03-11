import React from 'react';
import './RadioButton.css';

const RadioButton = ({children}) => (
    <label className="radio-button">
        <input className="radio-button__native" type="radio" checked="checked" name="radio"/>
        <span className="radio-button__button"/>
        <span className="radio-button__content">{children}</span>
    </label>
);

export default RadioButton;