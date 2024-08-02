import React from 'react';
import { message1 } from "../../../src/data/message-data.js";

function MessageOne() {
  return (
    <section className='relative w-full text-white bg-transparent '>
      <div className='w-10/12 mx-auto'>
        {
          message1.map((data, index) => (
            <div key={index} className='flex flex-col items-center justify-center p-5 my-10 border md:flex-row md:items-start rounded-3xl'>
              <div className='flex flex-col mb-5 text-center md:text-left md:mr-5 md:mb-0'>
                <div className='h-56 bg-center bg-cover w-80 md:w-64 md:h-48 lg:w-72 lg:h-56 ' style={{ backgroundImage: `url(${data.image})` }}></div>
                <p className='pt-5 mt-2 font-bold'>{data.name}</p>
                <p className='text-sm font-bold'>{data.position}</p>
              </div>
              <p className='max-w-60 md:max-w-none'>{data.message1.length > 650 ? data.message.substring(0,650) + "..." : data.message1}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default MessageOne;
