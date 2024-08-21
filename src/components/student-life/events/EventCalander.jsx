import React, { useState } from 'react'
import { eventcalander } from '../../../data/StudentLife/events'
import EventMonths from './EventMonths'
import FlipCard from '../../common/FlipCard'

const EventsCalendar = () => {
  const [eventcalanders, setEventCalendars] = useState(null)
  return (
    <section className='relative w-full'>
      <div className='w-10/12 mx-auto '>
        {/* -------------year button--------------- */}
        {!eventcalanders  && (
          <div className='grid grid-cols-1 gap-2 pt-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {eventcalander.map((data) => (
              <FlipCard
                key={data.id}
                className={'w-full'}
                text1={data.year}
                text2={data.title}
                useBgImage={true}
                handlar={() => setEventCalendars(data.year)}
                frontImage={data.bgimg}
                backImage={data.bgimg}
                showIcon={false}
              />
            ))}
          </div>
        )}
        {/* --------------year wise months------------------------ */}
        {eventcalanders && <EventMonths eventcalanders={eventcalanders} setEventCalendars={setEventCalendars} />}
      </div>
    </section>
  )
}

export default EventsCalendar
