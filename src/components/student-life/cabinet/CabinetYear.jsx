import React, { useState } from 'react'
import { cabinet } from '../../../data/StudentLife/cabinet-data'
import Dynamic3dButton from '../../common/Dynamic3dButton'
import CabinetStudent from './CabinetStudent'

function CabinetYear () {
    const [cabinetYear, setCabinetYear] = useState(null)
  return (
    <section className='relative w-full'>
      <div className='w-10/12 mx-auto'>
      {
        !cabinetYear  && (
            <div className='grid grid-cols-1 gap-2 pt-20 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
              cabinet.map((data, index) => (
                <Dynamic3dButton
                  key={index}
                  text1={data.year}
                  text2=''
                  className='scale-card'
                  hasLink={false}
                  link='#'
                  showIcon={false}
                  handler={() => setCabinetYear(data)}  
                  />
              ))
            }
            </div>
        )
      }
      {cabinetYear && <CabinetStudent cabinetYear={cabinetYear} setCabinetYear={setCabinetYear} />}
      
      </div>
    </section>
  )
}

export default CabinetYear
