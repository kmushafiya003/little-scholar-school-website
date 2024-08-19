// src/components/TopperSection.js

import React, { useState } from 'react';
import Tabs from './Tabs';
import TopperAlbumTamplate from './TopperAlbumTamplate';
import GoBackBtn from '../../common/GoBackBtn';


const TopperSection = ({ topperYear, setTopperYear }) => {

  const goBackHandler = () => {
    setTopperYear(null);
  }


  const [activeTab, setActiveTab] = useState('X')

  return (
    <section className='relative w-full '>

      {/* --------- container ---------- */}
      <div className="flex flex-col w-10/12 pt-20 mx-auto xl:w-10/12 sm:w-11/12 pb-28 gap-y-8">

        {/* ------ go back btn -------- */}

        <GoBackBtn handler={goBackHandler} />


        {/* ---------- Heading ----------- */}

        <div className='flex flex-col gap-y-4 '>

          <h1 className='uppercase text-[32px] font-semibold text-resp-black  '>Session <span>{topperYear.year}</span></h1>


          {/* ----------- small underline ----------- */}
          <div className='w-[75px] h-1 bg-black'></div>


        </div>

        <div>


          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <TopperAlbumTamplate activeTab={activeTab} topperData={topperYear} />
        </div>

      </div>

    </section>
  );
};

export default TopperSection;
