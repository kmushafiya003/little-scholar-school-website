import React from 'react';

import FlipCard from '../../common/FlipCard';

const ScholarMonths = ({ timetable }) => {

  return (
    <section className='relative w-full'>
      <div className='grid w-10/12 grid-cols-1 gap-2 pt-20 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {timetable.map((data) => (
          <FlipCard
            key={data.id}
            text1={data.months}
            text2='Dowanload Attachment'
            className={'w-full'}
            handlar={() => window.open(data.url)}
            showIcon={true}
            useBgImage={false}
          />
        ))}
      </div>
    </section>
  );
};

export default ScholarMonths;
