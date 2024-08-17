import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FaArrowCircleDown } from 'react-icons/fa'

const FlipCard = ({
  text1,
  text2,
  className,
  handlar,
  showIcon,
  hasLink,
  link,
  frontImage,
  backImage,
  useBgImage
}) => {
  return (
    <div className={`w-full relative  ${className}`} onClick={handlar}>
      <div className='box-container md:w-full sm:w-full dxs:-inset-1'>
        <div className='box-item'>
          <div className='cursor-pointer flip-box'>
            <div
              className='text-center flip-box-front'
              style={
                useBgImage && frontImage
                  ? {
                      backgroundImage: `url(${frontImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }
                  : {}
              }
            >
              <div className='inner color-white'>
                <h3 className='font-bold text-white flip-box-header'>
                  {text1}
                </h3>
              </div>
            </div>
            <div
              className='flex text-center flip-box-back'
              style={
                useBgImage && backImage
                  ? {
                      backgroundImage: `url(${backImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }
                  : {}
              }
            >
              <div className='flex items-center justify-center h-full inner color-white'>
                <h3 className='flex items-center gap-4 space-x-2 text-white flip-box-header'>
                {showIcon && <FaArrowCircleDown className='text-red' />}
                {hasLink ? (
                  <Link to={link} className='text-lg text-white '>
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
    </div>
  )
}

FlipCard.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  className: PropTypes.string,
  handlar: PropTypes.func,
  frontImage: PropTypes.string,
  backImage: PropTypes.string,
  useBgImage: PropTypes.bool,
  showIcon: PropTypes.bool,
  hasLink: PropTypes.bool,
  link: PropTypes.string
}

FlipCard.defaultProps = {
  className: '',
  frontImage: '',
  backImage: '',
  useBgImage: false,
  showIcon: true,
  hasLink: false,
  link: '#',
  
}

export default FlipCard
