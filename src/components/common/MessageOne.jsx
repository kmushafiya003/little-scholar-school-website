import React from 'react';
import { message1 } from "../../../src/data/message-data.js";

function MessageOne() {
  return (
    <section className='relative w-full text-white bg-transparent '>
      <div className='w-10/12 p-5 mx-auto border rounded-3xl'>
        {
          message1.map((data, index) => (
            <div key={index} className='flex flex-col items-center justify-center my-4 md:flex-row md:items-start'>
              <div className='flex flex-col mb-4 text-center md:text-left md:mr-8 md:mb-0'>
                <div className='h-56 bg-center bg-cover w-80 md:w-64 md:h-48 lg:w-80 lg:h-64 ' style={{ backgroundImage: `url(${data.image})` }}></div>
                <p className='pt-5 mt-2 font-bold'>{data.name}</p>
                <p className='text-sm font-bold'>{data.position}</p>
              </div>
              <p className='max-w-md md:max-w-none'>{data.message > 100 ? data.message.substring(0,100) + "..." : data.message}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default MessageOne;
