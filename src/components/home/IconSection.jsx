import React from 'react'
import { IconData } from '../../data/Home/icon-data'
import { Link } from 'react-router-dom'

const IconSection = () => {
  
  return (
    
    <section className='w-full bg-white  py-12  '>

    {/* ------------------------- container ------------------------- */}

    <div className='xl:w-10/12 xmd:w-11/12 xs:w-10/12   mx-auto flex flex-col gap-y-8'>


      <div className='grid grid-cols-2 xmd:flex xmd:justify-center   '>
        {
          IconData.map((data)=>{
            return(
              <Link to={data.path} key={data.id} className='xl:w-[80%] xmd:w-[90%] px-4 border border-border-1 transition-all duration-500 ease-in-out py-4  flex flex-col gap-y-2 items-center justify-center  hover:scale-105 group'>
                
                <i className=' xlg:text-[92px] xmd:text-[84px] text-dark-blue text-8xl group-hover:text-red'>{data.icon}</i>
                <p className='text-lg text-center'>{data.text}</p>
              </Link>
            )
          })
        }

      </div>


      </div>
    </section>
  )
}

export default IconSection