import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaArrowCircleDown } from 'react-icons/fa';

const Dynamic3dButton = ({ text1, text2, className, showIcon }) => {
    return (
        <div className={`md:p-5 box-container md:w-1/3 sm:w-full dxs:w-full dxs:-inset-1 ${className}`}>
            <div className='box-item'>
                <div className='flip-box'>
                    <div className='text-center flip-box-front'>
                        <div className='inner color-white'>
                            <h3 className='font-bold text-white flip-box-header'>
                                {text1}
                            </h3>
                        </div>
                    </div>
                    <div className='flex text-center flip-box-back'>
                        <div className='flex items-center justify-center h-full inner color-white'>
                            <h3 className='flex items-center space-x-2 flip-box-header'>
                                {showIcon && <FaArrowCircleDown className='text-red' />}
                                <Link to='#' className='font-bold text-white'>
                                    {text2}
                                </Link>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Dynamic3dButton.propTypes = {
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    className: PropTypes.string,
    showIcon: PropTypes.bool,
};

Dynamic3dButton.defaultProps = {
    className: '',
    showIcon: true, // Default to true so the icon is shown unless specified otherwise
};

export default Dynamic3dButton;
