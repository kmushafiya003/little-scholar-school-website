import React, { useState } from 'react';
import { scholars } from '../../../data/News&Calendar/scholars-time';
import Dynamic3dButton from '../../common/Dynamic3dButton';
import ScholarMonths from './ScholarMonths';

function ScholarTimes() {
    const [scholartime, setScholarTime] = useState(null);

    return (
        <section className='relative w-full'>
            <div>
                {/* --------------Scholar Time Buttons----------- */}
                {!scholartime && (
                    <div className='grid w-10/12 grid-cols-1 gap-2 pt-20 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {scholars.map(data => (
                            <Dynamic3dButton
                                key={data.id}
                                text1={data.title}
                                text2=''
                                className='scale-card'
                                hasLink={false}
                                handler={() => setScholarTime(data)} // Pass the entire data object
                                showIcon={false}
                            />
                        ))}
                    </div>
                )}
                {/* ---------------Scholar Time Details--------------- */}
                {scholartime && <ScholarMonths timetable={scholartime.timetable} setScholarTime={setScholarTime} />} {/* Pass timetable array */}
            </div>
        </section>
    );
}

export default ScholarTimes;
