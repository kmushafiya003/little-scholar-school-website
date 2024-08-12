import React from 'react'

const SchoolTiming = () => {
    const summerTimings = '07:20 am to 1:30 pm'
    const winterTimings = '07:50 am to 2:00 pm'
    const lessons = [
        { lesson: '1st lesson', duration: '00:45 Min' },
        { lesson: '2nd lesson', duration: '00:40 Min' },
        { lesson: '3rd lesson', duration: '00:40 Min' },
        { lesson: '4th lesson', duration: '00:40 Min' },
        { lesson: '5th lesson', duration: '00:40 Min' },
        { lesson: 'Break/Recess', duration: '00:20 Min' },
        { lesson: '6th lesson', duration: '00:40 Min' },
        { lesson: '7th lesson', duration: '00:35 Min' },
        { lesson: '8th lesson', duration: '00:35 Min' },
        { lesson: '9th lesson', duration: '00:35 Min' }
    ]

    return (
        <section className='relative w-full '>
            <div className='w-10/12 mx-auto pt-10 pb-20'>
                <div className='flex flex-col justify-center gap-10 mt-20 mb-4 smd:flex-row dxs:flex-col'>
                    <div className='p-5 font-bold text-white transition duration-300 bg-black rounded-md hover:bg-red-600 hover:scale-105'>
                        Summer Timing:- {summerTimings}
                    </div>
                    <div className='p-5 font-bold text-white transition duration-300 bg-black rounded-md hover:bg-red-600 hover:scale-105'>
                        Winter Timing:- {winterTimings}
                    </div>
                </div>
                <div className='content-center overflow-x-auto'>
                    <table className='w-9/12 mx-auto border border-collapse border-gray-400 table-auto '>
                        <thead>
                            <tr>
                                <th className='p-2 border border-gray-400'>Lesson</th>
                                <th className='p-2 border border-gray-400'>Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lessons.map((lesson, index) => (
                                <tr key={index} className='text-black font-light hover:bg-gray-100 hover:text-black'>
                                    <td className='p-2 border border-gray-400'>{lesson.lesson}</td>
                                    <td className='p-2 border border-gray-400'>{lesson.duration}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='w-full mx-auto mt-8 text-black font-light lg:w-8/12'>
                    <div className='p-2 text-center border border-gray-400 hover:bg-gray-100 hover:text-black'>4th Saturday will be a half day.</div>
                    <div className='p-2 font-bold text-center border border-gray-400 hover:bg-gray-100 hover:text-black'>Zero lesson plan</div>
                    <div className='p-2 border border-gray-400 hover:bg-gray-100 hover:text-black'>Monday - General Assembly & Unit Test</div>
                    <div className='p-2 border border-gray-400 hover:bg-gray-100 hover:text-black'>Wednesday to Friday - Activity lesson / Class wise Assembly/Special Assembly</div>
                </div>
            </div>
        </section>
    )
}

export default SchoolTiming;
