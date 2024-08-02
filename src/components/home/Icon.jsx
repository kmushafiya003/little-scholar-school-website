import React from 'react'
import { IconData } from '../../data/icon-data'

const Icon = () => {
  
  return (
    
    <section className='w-full bg-bg-light pt-24 pb-28 '>

    {/* ------------------------- container ------------------------- */}

    <div className='xlg:w-10/12 sm:w-max  xs:w-[88%] w-11/12  mx-auto flex flex-col gap-y-8 border-2 border-red'>
      

      <div className='grid grid-cols-2 lg:flex lg:justify-center   '>
        {
          IconData.map((data)=>{
            return(
              <div key={data.id} className='border border-light-black transition-all duration-500 ease-in-out py-2 px-3 lg:py-4 lg:px-8 xlg:px-10 flex flex-col items-center justify-center  hover:scale-105 group'>
                <i className='text-8xl group-hover:text-red'>{data.icon}</i>
                <p className='text-lg'>{data.text}</p>
              </div>
            )
          })
        }

      </div>


      </div>
    </section>
  )
}

export default Icon