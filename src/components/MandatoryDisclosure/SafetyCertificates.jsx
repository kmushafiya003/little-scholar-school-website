import React from 'react'
import { FaCircleRight } from "react-icons/fa6";


function SafetyCertificates() {
    return (
        <section className='w-full relative py-20 bg-bg-light'>

            {/* ----------- container -------------- */}

            <div className='w-11/12 md:w-10/12 mx-auto flex flex-col gap-y-16 py-6'>

                {/* --------------------- upper part ------------------- */}

                <div className='flex flex-col gap-y-8'>

                    {/* ----------- heading ----------- */}


                    <div className='flex flex-col gap-y-3 mx-2 md:mx-0'>

                        <h1 className='uppercase text-[32px] font-semibold text-resp-black  '>Safety Certificates & Affiliations</h1>


                        {/* ----------- small underline ----------- */}
                        <div className='w-[75px] h-1 bg-black'></div>


                    </div>

                </div>



                {/* ----------- table --------- */}

                <div className="overflow-x-auto">
                    <table className='w-full table-auto border-collapse border border-light-grey'>

                        <thead className='border-b-2 border-black-black' >
                            <tr>
                                <th className='w-[15%]  border-l border-r border-t border-light-grey py-3 px-4 text-left font-normal text-resp-black text-base whitespace-normal'>SL. NO.</th>
                                <th className='w-[50%] border-l border-r border-t border-light-grey  py-3 px-4 text-left font-normal  text-resp-black text-base '>DOCUMENTS/INFORMATION</th>
                                <th className='w-[35%] border-l border-r border-t border-light-grey  py-3 px-4 text-left font-normal  text-resp-black text-base'>DOCUMENTS</th>
                            </tr>
                        </thead>

                        <tbody className='font-light'>


                            <tr className='hover:bg-light-grey transition-all duration-300' >
                                <td className='border border-light-grey py-3 px-4 text-left  text-resp-black '>1.</td>
                                <td className='border border-light-grey py-3 px-4 text-left  text-resp-black '>Affiliation</td>
                                <td className='border border-light-grey py-3 px-4 text-left text-resp-black '><a href="https://littlescholars-kashipur.com/pdf/Affiliation.pdf" className='flex items-center gap-x-2 cursor-pointer arrow-container' >
                                    <span className='text-red arrow-icon'><FaCircleRight /></span>
                                    <span className='text-base font-semibold text-resp-black hover:text-red-600'>view</span>
                                </a></td>
                            </tr>

                            <tr className='hover:bg-light-grey transition-all duration-300' >
                                <td className='border border-light-grey py-3 px-4 text-left  text-resp-black '>2.</td>
                                <td className='border border-light-grey py-3 px-4 text-left  text-resp-black '>Building Safety</td>
                                <td className='border border-light-grey py-3 px-4 text-left text-resp-black '><a href="https://littlescholars-kashipur.com/pdf/Building_Safety.pdf" className='flex items-center gap-x-2 cursor-pointer arrow-container' >
                                    <span className='text-red arrow-icon'><FaCircleRight /></span>
                                    <span className='text-base font-semibold text-resp-black hover:text-red-600'>view</span>
                                </a></td>
                            </tr>
                            <tr className='hover:bg-light-grey transition-all duration-300' >
                                <td className='border border-light-grey py-3 px-4 text-left  text-resp-black '>3.</td>
                                <td className='border border-light-grey py-3 px-4 text-left  text-resp-black '>Fire Safety</td>
                                <td className='border border-light-grey py-3 px-4 text-left text-resp-black '><a href="https://littlescholars-kashipur.com/pdf/Fire_Safety.pdf" className='flex items-center gap-x-2 cursor-pointer arrow-container' >
                                    <span className='text-red arrow-icon'><FaCircleRight /></span>
                                    <span className='text-base font-semibold text-resp-black hover:text-red-600'>view</span>
                                </a></td>
                            </tr>

                            <tr className='hover:bg-light-grey transition-all duration-300' >
                                <td className='border border-light-grey py-3 px-4 text-left  text-resp-black '>4.</td>
                                <td className='border border-light-grey py-3 px-4 text-left  text-resp-black '>NOC</td>
                                <td className='border border-light-grey py-3 px-4 text-left text-resp-black '><a href="https://littlescholars-kashipur.com/pdf/NOC.pdf" className='flex items-center gap-x-2 cursor-pointer arrow-container' >
                                    <span className='text-red arrow-icon'><FaCircleRight /></span>
                                    <span className='text-base font-semibold text-resp-black hover:text-red-600'>view</span>
                                </a></td>
                            </tr>

                            <tr className='hover:bg-light-grey transition-all duration-300' >
                                <td className='border border-light-grey py-3 px-4 text-left  text-resp-black '>5.</td>
                                <td className='border border-light-grey py-3 px-4 text-left  text-resp-black '>Sanitation</td>
                                <td className='border border-light-grey py-3 px-4 text-left text-resp-black '><a href="https://littlescholars-kashipur.com/pdf/Sanitation.pdf" className='flex items-center gap-x-2 cursor-pointer arrow-container' >
                                    <span className='text-red arrow-icon'><FaCircleRight /></span>
                                    <span className='text-base font-semibold text-resp-black hover:text-red-600'>view</span>
                                </a></td>
                            </tr>


                            <tr className='hover:bg-light-grey transition-all duration-300' >
                                <td className='border border-light-grey py-3 px-4 text-left  text-resp-black '>6.</td>
                                <td className='border border-light-grey py-3 px-4 text-left  text-resp-black '>Society Renewal</td>
                                <td className='border border-light-grey py-3 px-4 text-left text-resp-black '><a href="https://littlescholars-kashipur.com/pdf/Society_Renewal.pdf" className='flex items-center gap-x-2 cursor-pointer arrow-container' >
                                    <span className='text-red arrow-icon'><FaCircleRight /></span>
                                    <span className='text-base font-semibold text-resp-black hover:text-red-600'>view</span>
                                </a></td>
                            </tr>



                        </tbody>

                    </table>
                </div>


            </div>




        </section>
    )
}

export default SafetyCertificates
