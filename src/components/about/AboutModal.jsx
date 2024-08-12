import React from 'react'
import { MdOutlineClose } from "react-icons/md";
import { useOnClickOutside } from '../../hooks/useOnclickOutside';
import { useRef } from 'react';

const AboutModal = ({ modalData, setModalData }) => {

    const modalRef = useRef(null);
    useOnClickOutside(modalRef, () => setModalData(null))



    return (

        <div className='fixed inset-0 z-[99999] grid lg:place-items-center justify-center bg-black bg-opacity-70 overflow-auto'>


            {/* -------------- modal ----------------- */}

            <div ref={modalRef} onClick={(events) => events.stopPropagation()} className='lg:w-[700px] mmd:w-[600px] sm:w-[70%] w-[80%] mx-auto  h-max bg-white flex flex-col lg:my-12 mt-32 mb-16 rounded-lg'>

                {/* ---------- upper part ---------- */}

                <div className='flex  justify-between items-center sm:gap-x-8 gap-x-4 bg-dark-blue text-white px-6 py-4 rounded-t-lg'>


                    {/* ----------- name ----------- */}
                    <p className='lg:text-[32px] mmd:text-[30px] text-2xl uppercase font-semibold'>{modalData.name}</p>

                    {/* ----------- close btn ---------- */}
                    <p className='lg:text-5xl smd:text-4xl text-[24px] text-dark-light-black cursor-pointer hover:text-white transition-colors duration-100' onClick={() => setModalData(null)}><MdOutlineClose /></p>


                </div>

                {/* ------------ lower part --------------- */}

                <div className='py-10 px-6 flex flex-col gap-y-5'>

                    {/* ----------- position ------------- */}
                    <h1 className='lg:text-[32px] smd:text-[30px] text-[24px] uppercase font-semibold text-black'>{modalData.position}</h1>

                    {/* ----------- about ---------- */}
                    {
                        modalData.position.toLowerCase() === "principal" ? (
                            <ul className='flex flex-col gap-y-2 xs:text-[16px] text-sm font-light list-disc px-5'>
                                {
                                    modalData.about.map((data, index) => (
                                        <li className='leading-6' key={index}>
                                            {
                                                data
                                            }

                                        </li>
                                    ))
                                }

                            </ul>
                        ) : (
                            <div className='flex flex-col leading-8 xs:text-[16px] text-sm'>
                                {
                                    modalData.about.map((data, index) => (
                                        <p key={index} className=' font-light'>{data}</p>
                                    ))
                                }
                            </div>
                        )
                    }


                </div>


            </div>


        </div>
    )
}

export default AboutModal