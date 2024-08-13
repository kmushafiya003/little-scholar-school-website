import React from 'react'
import { AchievementsData } from '../../../data/StudentLife/achievements'
import AchievementCard from './AchievementCard'
import ViewAchievement from './ViewAchievement'
import { useState } from 'react'

const Achievement = () => {

    const [viewAchievement , setViewAchievement] =  useState(null);

  return (
    <section className='bg-bg-light pt-28 pb-32 '>

        <div className='w-10/12 mx-auto border border-red'>

       

        {/* ------------ open Achievement ---------- */}

        {
            viewAchievement && (
                <ViewAchievement  viewAchievement={viewAchievement} setViewAchievement={setViewAchievement}/>
            )
        }




        {/* ------------- All Achievements ------------------- */}

        <div className='flex flex-col gap-y-20 cursor-pointer '>

                    {/* ----------- heading ----------- */}
                    <div className='flex flex-col gap-y-4  '>

                        <h1 className='uppercase text-[32px] font-semibold text-resp-black  '>Achievements</h1>


                        {/* ----------- small underline ----------- */}
                        <div className='w-[75px] h-1 bg-black'></div>


                    </div>

                    {/* -------------all achievement card --------------- */}
                    <div className='  grid grid-cols-4 gap-y-8 gap-x-1'>

                        {
                            AchievementsData.map((data) => (
                                <AchievementCard data={data} key={data.id} setViewAchievement={setViewAchievement}/>
                            ))

                        }


                    </div>

                </div>

        </div>



    </section>
  )
}

export default Achievement