import React from 'react';

import FlipCard from '../../common/FlipCard';
import GoBackBtn from '../../common/GoBackBtn';

const ScholarMonths = ({ timetable, setScholarTime }) => {
  const goBackHandler = () => {
    setScholarTime(null);
  }
  return (
    <section className='relative w-full pt-20'>
     <div className='w-10/12 mx-auto'>
     <GoBackBtn handler={goBackHandler} />
      <div className='grid grid-cols-1 gap-1 pt-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
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
     </div>
    </section>
  );
};

export default ScholarMonths;
