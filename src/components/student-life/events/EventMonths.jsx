import React, { useState } from 'react'
import FlipCard from '../../common/FlipCard'
import { eventcalander } from '../../../data/StudentLife/events'
import EventHoliday from './EventHoliday';

const EventMonths = () => {
    const selectedEvent = eventcalander[1]; 
    const [eventMonth, setEventMonth] = useState('')
  return (
    <section className='relative w-full'>
      <div>
        {eventMonth === '' && (
            <div className='grid w-10/12 grid-cols-1 gap-2 pt-20 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {selectedEvent.months.map((data) => (
              <FlipCard
                key={data.id}
                text1={data.month}
                text2={data.description}
                className={'w-full'}
                handlar={() => setEventMonth(data.month)}
                frontImage={data.fontimg}
                backImage={data.backimg}
                useBgImage={true}
              />
            ))}
          </div>
        )}

        {eventMonth && <EventHoliday eventMonth={eventMonth} />}
      </div>
    </section>
  )
}

export default EventMonths
