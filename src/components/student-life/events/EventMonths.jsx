import React, { useState } from 'react'
import FlipCard from '../../common/FlipCard'
import { eventcalander } from '../../../data/StudentLife/events'
import EventHoliday from './EventHoliday'
import GoBackBtn from '../../common/GoBackBtn'
const EventMonths = ({ eventcalanders, setEventCalendars }) => {
  const selectedEvent = eventcalander[1]
  const [eventMonth, setEventMonth] = useState(null)

  const goBackHandler = () => {
    setEventCalendars(null) // This should work now
  }

  return (
    <section className='relative w-full'>
      <div className='pt-20'>
        {!eventMonth && (
          <div>
            <div className='mb-10'>
            <GoBackBtn handler={goBackHandler} />
            </div>
            <div className='grid grid-cols-1 gap-2 pt-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {selectedEvent.months.map(data => (
                <FlipCard
                  key={data.id}
                  text1={data.month}
                  text2={data.description}
                  className={'w-full'}
                  handlar={() => setEventMonth(data.month)}
                  frontImage={data.fontimg}
                  backImage={data.backimg}
                  useBgImage={true}
                  showIcon={false}
                />
              ))}
            </div>
          </div>
        )}
        {eventMonth && (
          <EventHoliday eventMonth={eventMonth} setEventMonth={setEventMonth} />
        )}
      </div>
    </section>
  )
}

export default EventMonths
