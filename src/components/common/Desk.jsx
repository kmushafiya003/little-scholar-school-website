import React from 'react'
import deskbackground from '../../images/Common/desk-background.png'

function Desk({ data }) {
  return (
    <section className='relative w-full' style={{ backgroundImage: `url(${deskbackground})` }}>
      <div className="w-10/12 mx-auto flex flex-col-reverse xmd:pt-14 pt-24 pb-24  xmd:flex-row flex-wrap  xmd:flex-nowrap items-center xmd:gap-6 gap-y-14 ">
        {/* Left Section */}
        <div className="flex flex-col md-gap-x-4   md:items-start  ">
          <h3 className="text-dark-grey text-2xl font-medium mb-1">Welcome To</h3>
          <h2 className="text-red-600 text-4xl mb-6 font-semibold">Little Scholars</h2>
          <p className="text-black font-semibold leading-7 font-sm text-justify mb-8 ">{data[0].slogan}</p>
          <p className="text-black font-thin leading-7 text-justify text-base">{data[0].message2} </p>
        </div>

        {/* Right Section */}
        <div className="flex align-center  justify-center  sm:justify-end flex-shrink-0 xmd:w-[40%] ">
          <img src={data[0].image2} alt='desk' className="w-full h-auto object-fit outline-none  border-4 border-border-black" />
        </div>
      </div>
    </section>
  )
}

export default Desk
