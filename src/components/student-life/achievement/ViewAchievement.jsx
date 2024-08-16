import React from 'react'

const ViewAchievement = ({ viewAchievement, setViewAchievement }) => {
  // console.log(viewAchievement)


  return (
    <div className=' flex flex-col gap-y-14 xmd:min-h-[550px] min-h-[450px] border border-dark-light-black rounded-xl pt-4 pb-16 px-4'>

      {/* ----------- heading ----------- */}
      <div className='flex flex-col gap-y-4  '>

        <h1 className='uppercase text-[24px] sm:text-[32px] font-semibold text-resp-black  '>{viewAchievement.title}</h1>


        {/* ----------- small underline ----------- */}
        <div className='w-[75px] h-1 bg-black'></div>


      </div>

      {/* ---------- achievemment detail --------------- */}

      <div className='flex flex-col  gap-y-6  items-center sm:items-start sm:flex-row md:gap-x-16 gap-x-10 xmd:pl-12 sm:pl-4 sm:justify-between '>

        {/* ------------- img ------------- */}
        <div className='xs:w-[350px] w-[280px]'>
          <img src={viewAchievement.img} alt="Achievement" className='w-full  object-cover' />
        </div>

        {/* ----------- content detail ----------- */}

        <div className='flex flex-col items-center sm:items-start gap-y-6 sm:w-[65%]'>

          {/* ------------ event and venue --------------- */}

          <div className='tracking-wider flex flex-col gap-y-1'>
            <p className='font-medium text-[17px]'>Venue: <span className='font-light text-[16px]'>{viewAchievement.venue}</span></p>
            <p className='font-medium text-[17px]'>Event Date: <span className='font-light text-[16px]'>{viewAchievement.event}</span></p>

          </div>


          {/* ------------ break line ------------ */}

          <hr className='text-dark-light-black' />

          {/* ----------- description and message  ---------------- */}

          <div className='flex flex-col gap-y-6'>
            {/* --------- description --------- */}
            <div className='flex flex-col gap-y-2'>
              <p className='font-bold sm:text-left text-center' >Description</p>
              <p className='font-light sm:text-justify text-center'>{viewAchievement.desc}</p>

            </div>

            {/* --------- message ------------- */}

            <p className='font-light'>
              {viewAchievement.message ? viewAchievement.message : ""}
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default ViewAchievement