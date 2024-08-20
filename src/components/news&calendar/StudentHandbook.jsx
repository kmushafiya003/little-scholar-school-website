import React from 'react'
import { FaCircleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const StudentHandbook = () => {
    return (
        <section className='w-full relative py-20 bg-bg-light'>

            {/* ----------- container -------------- */}

            <div className='w-10/12 mx-auto flex flex-col gap-y-16 py-6'>

                {/* --------------------- upper part ------------------- */}

                <div className='flex flex-col gap-y-8'>

                    {/* ----------- heading ----------- */}


                    <div className='flex flex-col gap-y-3 '>

                        <h1 className='uppercase text-[32px] font-semibold text-resp-black  '>Event and Activity Participation Forms Hub</h1>


                        {/* ----------- small underline ----------- */}
                        <div className='w-[75px] h-1 bg-black'></div>


                    </div>

                    {/* --------- pdf link ---------- */}

                    <a href="https://littlescholars-kashipur.com/pdf/hand_book/Students_Hand_Book.pdf" target='_blank' rel='noopener noreferrer' className='flex items-center gap-x-2 cursor-pointer arrow-container' >

                        <span className='text-red arrow-icon text-lg'><FaCircleRight /></span>
                        <span className='underline text-[17px] font-semibold text-resp-black'>Students Handbook 2024-25</span>

                    </a>


                </div>


                {/* ----------- bottom part ---------- */}

                <div className='flex flex-col gap-y-6'>

                    <p className='font-light pl-4'>
                        This page offers instant updates on the latest upcoming events and is designed to streamline the registration process, making it easy for students and parents to sign up for various exciting happenings at our school.
                    </p>

                    {/* ----------- table --------- */}

                    <div>

                        <table className='w-full border border-light-grey'>

                            <thead className='border-b border-black' >
                                <th className='border-l border-r border-t border-light-grey py-3 px-4 text-left font-normal text-resp-black text-lg'> SL.NO.</th>
                                <th className='border-l border-r border-t border-light-grey  py-3 px-4 text-left font-normal  text-resp-black text-lg'>FORMS</th>
                                <th className='border-l border-r border-t border-light-grey  py-3 px-4 text-left font-normal  text-resp-black text-lg'>APPLY</th>

                            </thead>

                            <tbody className='font-light'>
                                <tr className='hover:bg-light-grey transition-all duration-300' >
                                    <td className='border border-light-grey py-3 px-4 text-left  text-resp-black '>1</td>
                                    <td className='border border-light-grey py-3 px-4 text-left text-resp-black '>Summer Camp Consent</td>
                                    <td className='border border-light-grey py-3 px-4 text-left  text-resp-black '><Link to="/summer-consent-form" className='flex items-center gap-x-2 cursor-pointer arrow-container' >
                                    <span className='text-red arrow-icon'><FaCircleRight /></span>
                                    <span className='text-lg font-semibold text-resp-black'>fill</span>
                                    </Link></td>
                                </tr>

                                <tr className='hover:bg-light-grey transition-all duration-300' >
                                    <td className='border border-light-grey py-3 px-4 text-left  text-resp-black '>2</td>
                                    <td className='border border-light-grey py-3 px-4 text-left  text-resp-black '>Summer Camp (open for all)</td>
                                    <td className='border border-light-grey py-3 px-4 text-left text-resp-black '><Link to="/summer-camp-form" className='flex items-center gap-x-2 cursor-pointer arrow-container' >
                                    <span className='text-red arrow-icon'><FaCircleRight /></span>
                                    <span className='text-lg font-semibold text-resp-black'>fill</span>
                                    </Link></td>
                                </tr>



                            </tbody>

                        </table>

                    </div>





                </div>



            </div>


        </section>
    )
}

export default StudentHandbook