import React from 'react'
import { session_23_24 } from '../../../data/StudentLife/topper-data'

function TopperAlbumTamplate() {
  return (
    <section className="relative w-full">
      <div className="grid w-10/12 grid-cols-1 pt-20 mx-auto gap-y-6 gap-x-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {session_23_24.map((data, index) => (
          <div key={index} className="flex flex-col items-center transition duration-300 transform border border-none rounded-3xl shadow1 hover:scale-105">
            <img 
              src={data.image} 
              alt={data.title} 
              className="object-cover w-full h-[100%] mb-4 border border-black rounded-lg"
            />
            <h1 className="mt-2 text-lg font-semibold text-center">{data.title}</h1>
            <p className="mt-1 text-center">{data.percentage}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TopperAlbumTamplate
