import React from 'react'
import GoBackBtn from '../../common/GoBackBtn';

function CabinetStudent ({ cabinetYear, setCabinetYear }) {
  const goBackHandler = () => {
    setCabinetYear(null);
  }

  return (
    <section className='relative w-full pt-20'>
       <GoBackBtn handler={goBackHandler} />
      <div className='grid grid-cols-1 mx-auto mb-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6'>
     
        {cabinetYear.pictures.map((data, index) => (
          <div
            key={index}
            className='gap-5 p-5 transition duration-300 transform border border-none rounded-xl shadow1 hover:scale-105'
          >
            <div className='flex flex-col items-center'>
              <img
                src={data.img}
                alt={data.name}
                className='object-cover w-full h-full border '
              />
              <h1 className='mt-2 text-sm font-semibold text-center text-gray-400'>
                {data.name}
              </h1>
              <p className='mt-1 text-center text-gray-400'>
                {data.designation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CabinetStudent
