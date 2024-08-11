import React from 'react'
import '../../index.css'
import { Link } from 'react-router-dom'
import { FaArrowCircleDown } from 'react-icons/fa'

const feestructuredata = {
  title: 'Fee Structure',
  year: [
    {
      session: 'Session 2024-25',
      DownloadAttachment: 'Download Attachment',
      url: '#'
    },
    {
      session: 'Session 2023-24',
      DownloadAttachment: 'Download Attachment',
      url: '#'
    },
    {
      session: 'Session 2022-23',
      DownloadAttachment: 'Download Attachment',
      url: '#'
    }
  ]
}

const FeeStructure = () => {
  return (
    <section className='relative w-full'>
      <div className='flex flex-wrap justify-center w-10/12 pt-10 mx-auto'>
        {feestructuredata.year.map((year, index) => (
          <div
            key={index}
            className='md:p-5 box-container md:w-1/3 sm:w-full dxs:w-full dxs:-inset-1'
          >
            <div className='box-item'>
              <div className='flip-box'>
                <div className='text-center flip-box-front'>
                  <div className='inner color-white'>
                    <h3 className='font-bold text-white flip-box-header'>
                      {year.session}
                    </h3>
                  </div>
                </div>
                <div className='flex text-center flip-box-back'>
                  <div className='flex items-center justify-center h-full inner color-white'>
                    <h3 className='flex items-center space-x-2 flip-box-header'>
                      <FaArrowCircleDown className='text-red' />
                      <Link to={year.url} className='font-bold text-white'>
                        {year.DownloadAttachment}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeeStructure
