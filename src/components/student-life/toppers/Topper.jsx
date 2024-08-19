import React from 'react'
import Dynamic3dButton from '../../common/Dynamic3dButton'
import { toppersOfYear } from '../../../data/StudentLife/topper-data'
import { useState } from 'react'
import TopperSection from './TopperSection'

function Topper () {
  const [topperYear, setTopperYear] = useState(null)

  return (
    <section className='relative w-full '>
      {/* ------------- container -------------- */}

      <div>
       

        {/* --------- year button ---------- */}

        {topperYear === null && (
          <div className='grid w-10/12 grid-cols-1 gap-2 pt-20 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white'>
            {toppersOfYear.map(data => (
              <Dynamic3dButton
                key={data.id}
                text1=''
                text2={data.year}
                className='scale-card'
                hasLink={false}
                handler={() => setTopperYear(data)}
                link='/'
                showIcon={false}
              />
            ))}
          </div>
        )}

        {/* --------- Yearwise topper list ---------- */}

        {topperYear && <TopperSection topperYear={topperYear} setTopperYear={setTopperYear}/>}
      </div>
    </section>
  )
}

export default Topper
