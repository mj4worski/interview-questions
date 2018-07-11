import React from 'react';
import PropTypes from 'prop-types';
import './Box.css';

const Box = ({ children, className }) => (
  <div className={`box ${className}`}>{children}</div>
);

Box.propTypes = {
  className: PropTypes.string
};

export default Box;
