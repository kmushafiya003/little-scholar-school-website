import React from 'react'
import { managementData } from '../../data/About/school-management'
import { FaCircleRight } from "react-icons/fa6";
import AboutModal from './AboutModal';
import { useState, useEffect } from 'react';



const SchoolManagement = () => {

    const [modalData, setModalData] = useState(null)

    const principalsData = managementData.filter(data => data.section.toLowerCase() === "principal");
    const headData = managementData.filter(data => data.section.toLowerCase() === "head");

    useEffect(() => {

        if (modalData) {
            document.body.style.overflow = 'hidden';
        } else {

            document.body.style.overflow = 'auto';

        }

        return () => {
            document.body.style.overflow = 'auto';
        }

    }, [modalData])


    const openMOdal = (data) => {
        setModalData({
            name: data.name,
            position: data.position,
            about: data.about
        });
    }



    return (
       
        
        <section className=' bg-bg-light pt-28 pb-32  '>

            {/* ------------------------- container ------------------------- */}

            <div className=' xl:w-10/12 mmd:w-11/12  w-10/12  mx-auto flex flex-col gap-y-12  '>


                {/* -------------- Principal and Vice principal section --------------- */}

                <div className='flex flex-col gap-y-12 '>

                    {/* ----------- heading ----------- */}
                    <div className='flex flex-col gap-y-4  '>

                        <h1 className='uppercase text-[32px] font-semibold text-resp-black  '>Principal and Vice Principal</h1>


                        {/* ----------- small underline ----------- */}
                        <div className='w-[70px] h-1 bg-black'></div>


                    </div>

                    {/* ------------- details --------------- */}
                    <div className='flex mdxs:flex-row flex-col gap-y-16 lg:gap-x-16 mmd:gap-x-10 mdxs:justify-around mmd:justify-start items-center xlg:pl-10 px-4 mmd:pr-4'>
                        {
                            principalsData.map((data) => (
                                <div key={data.id} className='flex flex-col gap-y-4  xxl:w-[260px] xlg:w-[210px] xmd:w-[180px] mmd:w-[160px] md:w-[260px] sm:w-[210px] mdxs:w-[180px] xs:w-[340px] xxs:w-full hover:scale-105 transition-all duration-400'>

                                    {/* ------- image ------ */}
                                    <div className='w-full xxl:h-[320px] cursor-pointer' onClick={() => openMOdal(data)}>
                                        <img src={data.image} alt={data.position} className='w-full h-full object-cover rounded-md border-4 border-black' />

                                    </div>

                                    {/* --------- info ---------------- */}
                                    <div className='flex flex-col gap-y-1 items-center'>

                                        {/* ------------- name -------------- */}

                                        <p className='text-dark-blue font-bold text-[16px] uppercase text-center'>{data.name}</p>

                                        {/* ------------ position ------------- */}
                                        <p className='text-red font-bold text-[16px] uppercase text-center'>{data.position}</p>

                                        {/* ----------- about ------------- */}

                                        <div className='flex flex-row gap-x-2 items-center arrow-container cursor-pointer' onClick={() => openMOdal(data)}>
                                            <span className='text-lg text-red arrow-icon  '><FaCircleRight /></span>
                                            <span className='text-resp-black font-semibold hover:text-red-600 transition-colors duration-300'>About</span>
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

                    <div className='grid mmd:grid-cols-4  mdxs:grid-cols-2 grid-cols-1 lg:gap-x-16 mmd:gap-x-10 mmd:gap-y-12 gap-y-16 xlg:pl-10 mmd:pl-4 mmd:pr-4 px-4 justify-items-center'>
                        {
                            headData.map((data) => (
                                <div key={data.id} className='flex flex-col gap-y-4  xxl:w-[260px] xlg:w-[210px] xmd:w-[180px] mmd:w-[160px] md:w-[260px] sm:w-[210px] mdxs:w-[180px] xs:w-[340px] w-full hover:scale-105 transition-all duration-400'>

                                    {/* ------- image ------ */}
                                    <div className='w-full xxl:h-[320px] cursor-pointer' onClick={() => openMOdal(data)}>
                                        <img src={data.image} alt={data.position} className='w-full h-full object-cover rounded-md border-4 border-black' />

                                    </div>

                                    {/* --------- info ---------------- */}
                                    <div className='flex flex-col gap-y-1 items-center'>

                                        {/* ---------- name --------- */}
                                        <p className='text-dark-blue font-bold text-[16px] uppercase text-center'>{data.name}</p>

                                        {/* --------- position -------------- */}

                                        <p className='text-red font-bold text-[16px] uppercase text-center'>{data.position}</p>

                                        {/* ------------ about -------------------- */}

                                        <div className='flex flex-row gap-x-2 items-center arrow-container cursor-pointer' onClick={() => openMOdal(data)}>
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


            {/* ------------- modal call -------------- */}

            {
                modalData && (
                    <AboutModal modalData={modalData} setModalData={setModalData} />
                )
            }

        </section>
      
    )
}

export default SchoolManagement