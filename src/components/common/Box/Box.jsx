import React from 'react';
import PropTypes from 'prop-types';
import './Box.css';

const Box = ({ children, className, innerRef }) => (
  <div className={`box ${className}`} ref={innerRef}>
    {children}
  </div>
);

Box.propTypes = {
  className: PropTypes.string,
  innerRef: PropTypes.func
};

export default Box;
