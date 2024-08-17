import React, { useState } from 'react'
import { eventcalander } from '../../../data/StudentLife/events'
import EventMonths from './EventMonths'
import FlipCard from '../../common/FlipCard'

const EventsCalendar = () => {
  const [eventyear, setEventYear] = useState('')
  return (
    <section className='relative w-full'>
      <div className=''>
        {/* -------------year button--------------- */}
        {eventyear === '' && (
          <div className='grid w-10/12 grid-cols-1 gap-2 pt-20 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {eventcalander.map((data, index) => (
              <FlipCard
                handlar={() => setEventYear(data.year)}
                key={data.id}
                className={'w-full'}
                text1={data.year}
                text2={data.title}
                useBgImage={true}
                frontImage={data.bgimg}
                backImage={data.bgimg}
              />
            ))}
          </div>
        )}
        {/* --------------year wise months------------------------ */}
        {eventyear && <EventMonths eventyear={eventyear} />}
      </div>
    </section>
  )
}

export default EventsCalendar
