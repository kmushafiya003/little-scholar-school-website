import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FaArrowCircleDown } from 'react-icons/fa'

const Dynamic3dButton = ({
  text1,
  text2,
  className,
  showIcon,
  hasLink,
  link,
  handler
}) => {
  return (
    <div className={`box-container w-full  ${className}`} onClick={handler}>
      <div className='p-2 box-item'>
        <div className='cursor-pointer flip-box'>
          <div className='text-center flip-box-front'>
            <div className='p-4 inner color-white'>
              <h3 className='font-bold text-white flip-box-header'>{text1}</h3>
            </div>
          </div>
          <div className='flex text-center flip-box-back'>
            <div className='flex items-center justify-center h-full p-4 inner color-white'>
              <h3 className='flex items-center space-x-2 flip-box-header'>
                {showIcon && <FaArrowCircleDown className='text-red' />}
                {hasLink ? (
                  <Link to={link} className='text-lg text-white'>
                    {text2}
                  </Link>
                ) : (
                  text2
                )}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Dynamic3dButton.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  className: PropTypes.string,
  showIcon: PropTypes.bool,
  hasLink: PropTypes.bool,
  link: PropTypes.string
}

// Dynamic3dButton.defaultProps = {
//   className: '',
//   showIcon: true,
//   hasLink: false,
//   link: '#'
// }

export default Dynamic3dButton
