import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, onClick, className }) => (
  <button className={`button ${className}`} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default Button;
