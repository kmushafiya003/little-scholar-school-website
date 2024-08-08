import React from 'react'
import { Link } from 'react-router-dom'


const MessageTemplate = ({ data, cardIndex }) => {


 
  return (                      //EDITED BY ME FOR THE LEARNIGN PURPOSE--Pankaj
    <section className='relative w-full text-black bg-transparent '>
      <div className='w-11/12 mx-auto'>

        <div

          className='flex flex-col items-center justify-center p-5 my-5 border md:flex-row md:items-start rounded-xl '>
          <div className='flex flex-col mb-5 text-center md:text-left md:mr-5 md:mb-0'>
            <div
              className='h-56 bg-center bg-cover w-80 md:w-64 md:h-48 lg:w-72 lg:h-56 dxs:w-52 dxs:h-32 xsm:h-48 xsm:w-64'
              style={{ backgroundImage: `url(${data[0].image})` }}
            ></div>
            <p className='pt-5 mt-2 font-bold'>{data[0].name}</p>
            <p className='text-sm font-bold'>{data[0].position}</p>
          </div>
          <div className='max-w-60 md:max-w-none'>
            {
              cardIndex === 1 ? (
                <div>
                  {data[0].message1} 
                  <Link className='text-red' to='#'>
              read more.
            </Link>
                </div>
              )
                : (
                  <div>
                    <p>Dear Parents and Students,</p>
                    <p>{data[0].message1}  <Link className='text-red' to='#'>
                      read more.
                    </Link></p>
                  </div>
                )
            }

          </div>
        </div>

      </div>
    </section>
  )
}

export default MessageTemplate