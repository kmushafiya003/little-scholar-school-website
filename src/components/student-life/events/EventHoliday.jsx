import React from 'react'
import { eventcalander } from '../../../data/StudentLife/events'
import { FaPlusCircle } from 'react-icons/fa'
import GoBackBtn from '../../common/GoBackBtn'

const EventHoliday = ({ eventMonth, setEventMonth }) => {
  // Find the event calendar for the year you're interested in
  const selectedEvent = eventcalander[1] // Assuming you're focusing on the second event in the array
  const selectedMonth = selectedEvent.months.find(
    month => month.month === eventMonth
  )

  const goBackHandler = () => {
    setEventMonth(null)
  }
  return (
    <section className='relative w-full'>
      <div className='pb-10 '>
        <div className='mb-10'>
          <GoBackBtn handler={goBackHandler} />
        </div>
        {selectedMonth &&
          selectedMonth.specialDayDetails.map((data, index) => (
            <div
              key={index}
              className='p-4 mb-4 bg-white rounded-lg shadow-2xl'
            >
              <div className='flex items-center'>
                <FaPlusCircle className='mr-2 text-red-500' />
                <h3 className='text-lg font-bold'>{data.day}</h3>
              </div>
              <p className='mt-2 text-gray-700'>{data.description}</p>
              <p className='mt-2 text-gray-700'>
                <span className='font-semibold'>Until:</span> {data.day}
              </p>
            </div>
          ))}
      </div>
    </section>
  )
}

export default EventHoliday
