import React from 'react'
import deskbackground from '../../images/Common/desk-background.png'

function Desk({data}) {
  return (
    <section className='relative h-full w-full bg-contain bg-center' style={{ backgroundImage: `url(${deskbackground})`}}>
           <div className="flex flex-col-reverse my-20  sm:flex-row flex-wrap  sm:flex-nowrap items-center px-2 md:py-8 md:px-10  lg:px-20 md:gap-6 ">
                {/* Left Section */}
        <div className="flex flex-col md:items-start md:m-4 md:mt-9 ">
          <h3 className="text-dark-grey text-2xl font-medium mb-1">Welcome To</h3>
          <h2 className="text-red-600 text-4xl mb-8 font-semibold">Little Scholars</h2>
          <p className="text-black font-semibold leading-7 font-sm text-justify mb-10">{data[0].slogan}</p>
          <p className="text-black font-thin leading-7 text-justify text-base">{data[0].message2} </p>
        </div>
             
             {/* Right Section */}
             <div className="flex align-center  justify-center  sm:justify-end flex-shrink-0 sm:w-1/3">
          <img src={data[0].image}  className="w-full h-auto object-contain  sm:mt-24 mb-10 sm:mb-0 border-4 border-resp-black" />
        </div>
           </div>
    </section>
  )
}

export default Desk
