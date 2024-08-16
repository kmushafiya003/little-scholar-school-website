import React from 'react'
import PropTypes from 'prop-types'

const FlipCard = ({
  text1,
  text2,
  className,
  handlar,
  frontImage,
  backImage,
  useBgImage
}) => {
  return (
    <div className={` w-full relative ${className}`} onClick={handlar}>
      <div className=' box-container md:w-full sm:w-full dxs:-inset-1'>
        <div className='box-item'>
          <div className='flip-box'>
            <div className='text-center flip-box-front'>
              <div
                className='inner color-white'
                style={
                  useBgImage && frontImage
                    ? {
                        backgroundImage: `url(${frontImage})`,
                        backgroundSize: 'cover'
                      }
                    : {}
                }
              >
                <h3 className='font-bold text-white flip-box-header'>
                  {text1}
                </h3>
              </div>
            </div>
            <div className='flex text-center flip-box-back'>
              <div
                className='flex items-center justify-center h-full inner color-white'
                style={
                  useBgImage && backImage
                    ? {
                        backgroundImage: `url(${backImage})`,
                        backgroundSize: 'cover'
                      }
                    : {}
                }
              >
                <h3 className='flex items-center space-x-2 text-white flip-box-header'>
                  {text2}
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
  frontImage: PropTypes.string,
  backImage: PropTypes.string,
  useBgImage: PropTypes.bool
}

FlipCard.defaultProps = {
  className: '',
  frontImage: '',
  backImage: '',
  useBgImage: false
}

export default FlipCard
