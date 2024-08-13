import React from 'react'
import { FaCircleRight } from "react-icons/fa6";

const AchievementCard = ({ data, key, setViewAchievement }) => {

    const viewAchievementSec = () => {
        setViewAchievement(data);


        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });


    }


    return (
        <div key={key} className='flex flex-col gap-y-1 items-center text-black py-8  rounded-2xl transition-all duration-700 hover:scale-110  shadow1' onClick={viewAchievementSec}>

            {/* ----------- img ---------- */}
            <div className='w-[60%] '>
                <img src={data.img} alt="achievements" className='w-full object-cover' />
            </div>

            {/* ----------- title ----------- */}
            <h2 className='text-resp-black'>
                {
                    data.title.length > 32 ? data.title.substring(0, 32) + "..." : data.title
                }
            </h2>

            {/* --------- event date ------------- */}

            <p className='text-resp-black-2 font-light text-sm'>Event Date : <span>{data.event}</span></p>

            {/* --------- venue ------------- */}

            <p className='text-resp-black-2 font-normal text-sm'>Venue : <span>{data.venue}</span></p>

            {/* ---------- view achievement btn -------- */}

            <div className='flex items-center gap-x-2 cursor-pointer arrow-container' >

                <span className='text-red arrow-icon'><FaCircleRight /></span>
                <span>View Achievement</span>

            </div>


        </div>
    )
}

export default AchievementCard