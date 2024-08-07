import React from 'react'
import { managementData } from '../../data/About/school-management'
import { FaCircleRight } from "react-icons/fa6";

const SchoolManagement = () => {

    const principalsData = managementData.filter(data => data.section.toLowerCase() === "principal");
    const headData = managementData.filter(data => data.section.toLowerCase()  === "head");



    return (
        <section className='w-full bg-bg-light pt-28 pb-32 font-open-sans'>

            {/* ------------------------- container ------------------------- */}

            <div className='smd:w-10/12 xs:w-[88%] w-11/12  mx-auto flex flex-col gap-y-12  border border-red '>


                {/* -------------- Principal and Vice principal section --------------- */}

                <div className='flex flex-col gap-y-12 '>

                    {/* ----------- heading ----------- */}
                    <div className='flex flex-col gap-y-4  '>

                        <h1 className='uppercase text-[32px] font-semibold text-resp-black  '>Principal and Vice Principal</h1>


                        {/* ----------- small underline ----------- */}
                        <div className='w-[70px] h-1 bg-black'></div>


                    </div>

                    {/* ------------- details --------------- */}
                    <div className='flex flex-row gap-x-24 pl-10'>
                        {
                            principalsData.map((data) => (
                                <div key={data.id} className='flex flex-col  w-[250px] gap-y-4 border border-red hover:scale-105 transition-all duration-400'>

                                    {/* ------- image ------ */}
                                    <div className='w-full h-[320px] '>
                                        <img src={data.image} alt={data.position} className='w-full h-full object-cover rounded-md border-4 border-black' />

                                    </div>

                                    {/* --------- info ---------------- */}
                                    <div className='flex flex-col gap-y-1 items-center'>

                                        <p className='text-dark-blue font-bold text-[16px] uppercase text-center'>{data.name}</p>


                                        <p className='text-red font-bold text-[16px] uppercase'>{data.position}</p>
                                        <div className='flex flex-row gap-x-2 items-center arrow-container cursor-pointer'>
                                            <span className='text-lg text-red arrow-icon  '><FaCircleRight /></span>
                                            <span className='text-resp-black font-semibold'>About</span>
                                        </div>


                                    </div>


                                </div>
                            ))
                        }



                    </div>

                </div>

                {/* -------------------- Head section ----------------------- */}

                <div className='flex flex-col gap-y-12 '>

                    {/* ----------- heading ----------- */}
                    <div className='flex flex-col gap-y-4  '>

                        <h1 className='uppercase text-[32px] font-semibold text-resp-black  '>Heads</h1>


                        {/* ----------- small underline ----------- */}
                        <div className='w-[70px] h-1 bg-black'></div>


                    </div>

                    <div className='grid grid-cols-4 gap-x-16 gap-y-8  pl-10'>
                        {
                            headData.map((data) => (
                                <div key={data.id} className='flex flex-col gap-y-4 border w-[260px] border-red hover:scale-105 transition-all duration-400'>

                                    {/* ------- image ------ */}
                                    <div className='w-full h-[320px] '>
                                        <img src={data.image} alt={data.position} className='w-full h-full object-cover rounded-md border-4 border-black' />

                                    </div>

                                    {/* --------- info ---------------- */}
                                    <div className='flex flex-col gap-y-1 items-center'>

                                        <p className='text-dark-blue font-bold text-[16px] uppercase text-center'>{data.name}</p>


                                        <p className='text-red font-bold text-[16px] uppercase'>{data.position}</p>
                                        <div className='flex flex-row gap-x-2 items-center arrow-container cursor-pointer'>
                                            <span className='text-lg text-red arrow-icon  '><FaCircleRight /></span>
                                            <span className='text-resp-black font-semibold'>About</span>
                                        </div>


                                    </div>


                                </div>
                            ))
                        }



                    </div>

                </div>





            </div>

        </section>
    )
}

export default SchoolManagement