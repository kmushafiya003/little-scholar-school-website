// Button.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick, isActive, className }) => {
  const baseClass = 'flex text-base w-32 rounded-sm h-8 items-center justify-center transition duration-300';
  const activeClass = isActive ? 'bg-dark-blue text-white' : 'bg-off-white-bg text-black';
  const hoverClass = 'hover:bg-blue-700 hover:text-black';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClass} ${activeClass} ${hoverClass} ${className}`}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  isActive: false,
  className: '',
};

export default Button;
