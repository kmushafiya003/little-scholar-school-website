import React from 'react'
import { welcomeData } from '../../data/Home/welcome-data'
import { BiSolidBook } from "react-icons/bi";

const Welcome = () => {





    return (
   
        <section className='w-full bg-bg-light pt-24 pb-28 '>

            {/* ------------------------- container ------------------------- */}

            <div className='smd:w-10/12 xs:w-[88%] w-11/12  mx-auto flex flex-col gap-y-8'>

                {/* ------------------- heading part ----------------- */}

                <div className='flex flex-col gap-y-4 text-resp-black '>

                    <h1 className='uppercase text-[26px] font-extrabold '>Welcome to Little Scholars</h1>
                    <p className='uppercase text-[15px] font-medium tracking-wide'>Service Before Self</p>

                    {/* ----------- small underline ----------- */}
                    <div className='w-[70px] h-1 bg-black'></div>


                </div>

                {/* ---------------------- description ---------------- */}

                <div className='flex flex-col gap-y-9 text-[16px] font-light text-black '>

                    {/* ------------ para 1----------- */}
                    <p className='leading-7 tracking-wide font-[300]'>
                        The Little Scholars school is co-educational CBSE affiliated institution and was established in 1983 at Bhalla Farm in Kashipur, U.S.Nagar. At the school, we consider our curriculum from philosophical and eclectic perspective, with a view to develop each individual’s potential to the optimum.

                    </p>

                    {/* ----------- para 2----------------- */}
                    <p className='leading-7 tracking-wide'>
                        The school aims at promoting an institution which caters to children without discrimination of caste, colour, creed or status in any respect whatsoever. Indian traditional values are inculcated so that children grow up with awareness of our society and the roots of our culture. Every child is also encouraged to develop sound ethical values and a strong moral fibre to be a worthy member of the world community.
                    </p>

                </div>

                {/* ------------------- bottom  part -------------------- */}

                <div className='grid mdxs:grid-cols-2 grid-cols-1  justify-between xmd:justify-start  xmd:gap-x-2 smd:gap-x-10 gap-x-6 xmd:gap-y-10 gap-y-12 pt-6 '>
                    {
                        welcomeData.map((data) => (
                            <div key={data.id} className=' flex xmd:flex-row flex-col gap-y-3  items-center gap-x-4 '>

                                {/* ---------- book icon ---------- */}

                                <div className=' flex items-center justify-center w-[50px] h-[50px] rounded-full bg-dark-blue text-white '>
                                    <BiSolidBook className='text-xl' />
                                </div>


                                {/* --------- text part ----------- */}

                                <div className='flex flex-col items-center xmd:items-start text-resp-black xl:gap-y-3 gap-y-2 xl:w-[65%] lg:w-[75%] xmd:w-[90%] w-full'>
                                    <h2 className='text-[16px] uppercase font-medium tracking-wide'>{data.title}</h2>
                                    <p className='leading-6 font-light tracking-wide xmd:text-left text-center'>{data.desc}</p>

                                </div>


                            </div>
                        ))

                    }
                </div>


            </div>

        </section>
    )
}

export default Welcome