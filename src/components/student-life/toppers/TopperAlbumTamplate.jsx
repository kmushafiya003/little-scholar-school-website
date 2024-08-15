// src/components/TopperAlbum/TopperAlbumTamplate.js

import React from 'react';

// const tabData = [
//   {
//     std: "X",
//     name: "Class 'X'",
//     className: '10th Standard' // Corresponding description for filtering
//   },
//   {
//     std: "XII",
//     name: "Class 'XII'",
//     className: '12th Standard' // Corresponding description for filtering
//   }
// ];

const TopperAlbumTamplate = ({ activeTab, session  }) => {

  console.log("Session: " , session)
  // const activeClass = tabData.find(tab => tab.name === activeTab)?.className;

  const filterData = session
  .filter(data => data.std === activeTab );

  console.log("filterDarta: " , filterData )

  

  return (
    <section className='relative w-full'>
      <div className='w-10/12 mx-auto'>
        <div className='grid grid-cols-1 pt-3 mx-auto gap-y-6 gap-x-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
          {/* { session ? session
            .filter(data => data.desc === activeClass)
            .map((data, index) => (
              <div
                key={index}
                className='flex flex-col items-center transition duration-300 transform border border-none rounded-3xl shadow1 hover:scale-105'
              >
                <img
                  src={data.image}
                  alt={data.title}
                  className='object-cover w-full h-[100%] mb-4 border border-black rounded-lg'
                />
                <h1 className='mt-2 text-lg font-semibold text-center'>
                  {data.title}
                </h1>
                <p className='mt-1 text-center'>{data.percentage}</p>
              </div>
            ))  : ""
          } */}

         {
         session ? filterData[0].class.map((data, index) => (
          <div
            key={index}
            className='flex flex-col items-center transition duration-300 transform border border-none rounded-3xl shadow1 hover:scale-105'
          >
            <img
              src={data.image}
              alt={data.title}
              className='object-cover w-full h-[100%] mb-4 border border-black rounded-lg'
            />
            <h1 className='mt-2 text-lg font-semibold text-center'>
              {data.title}
            </h1>
            <p className='mt-1 text-center'>{data.percentage}</p>
          </div>
        ))  : ""
          
         }
          
        </div>
      </div>
    </section>
  );
};

export default TopperAlbumTamplate;
