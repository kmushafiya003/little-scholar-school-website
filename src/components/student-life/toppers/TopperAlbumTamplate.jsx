import React, { useEffect } from 'react'
import { useState } from 'react'

const TopperAlbumTamplate = ({ activeTab, topperData }) => {
  const [topperList, setTopperList] = useState(topperData.toppers[0].students)

  useEffect(() => {
    const filterTopperData = topperData.toppers.filter(
      item => item.std === activeTab
    )

    setTopperList(filterTopperData[0].students)
  }, [activeTab, topperData.toppers]) // without topperdata.toppers it shows warning thats why i added this

  return (
    <div>
      <div className='grid grid-cols-1 px-5 py-6 mx-auto border border-gray-200 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 mmd:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-8 justify-items-center'>
        {topperList.map((item, index) => (
          <div
            key={index}
            className='flex flex-col items-center transition-transform duration-300 gap-y-2 hover:scale-105'
          >
            {/* --------- image -------- */}

            <div className=' w-[170px] h-[200px]'>
              <img
                src={item.image}
                alt={item.title}
                className='object-cover w-full h-full border border-black rounded-md'
              />
            </div>

            {/* -------- name -------- */}

            <p className='text-lg font-semibold text-center uppercase text-resp-black-2'>
              {item.title}
            </p>

            {/* ----------- stream and percentage---------- */}

            <div className='flex items-center gap-x-2 text-resp-black-2'>
              {activeTab === 'XII' && (
                <span className='text-lg'>{item.stream}</span>
              )}

              <span>{item.percentage}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopperAlbumTamplate
