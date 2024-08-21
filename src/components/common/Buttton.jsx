import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick, isActive, className }) => {
  const baseClass = 'flex text-base w-32 rounded-md py-3 font-semibold items-center justify-center transition duration-300';
  const activeClass = isActive ? 'bg-dark-blue text-white' : 'bg-off-white-bg text-black';
  
  // This will apply hover styles only if the button is not active
  const hoverClass = !isActive ? 'hover:text-red' : '';

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
  onClick: PropTypes.func.isRequired, // Updated prop name to match the usage
  isActive: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  isActive: false,
  className: '',
};

export default Button;
