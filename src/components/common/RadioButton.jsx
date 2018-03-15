import React from 'react';
import PropTypes from 'prop-types';
import './RadioButton.css';
import uuid from 'uuid4';

const RadioButton = ({children, name, onClick, defaultChecked}) => {
  const id = uuid();
  return (
    <div className="radio-button">
      <input
        className="radio-button__input"
        type="radio" id={id}
        name={name}
        onClick={onClick}
        defaultChecked={defaultChecked}
      />
      <label
        className="radio-button__label"
        htmlFor={id}
      >
        {children}
      </label>
    </div>
  )
};

RadioButton.propTypes = {
  children: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  defaultChecked: PropTypes.bool,
};

export default RadioButton;
