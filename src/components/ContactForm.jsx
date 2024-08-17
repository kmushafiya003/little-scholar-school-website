import React from 'react'
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { IoEarthOutline } from "react-icons/io5";
import { socialIcon } from '../data/Contact/contact-data'



const ContactForm = () => {

    const countryCode = "+91"
    const phoneNumber = "9105666371"
    const formattedNumber = `${countryCode} ${phoneNumber}`

    const emailAddress = "littlescholars.kashipur@gmail.com"

    const address = "Bhalla Farm Pratappur, Ramnagar Road, Kashipur-244713, Distt. U.S.Nagar"
    const googleMapUrl = "https://www.google.com/maps/place/Little+Scholars+Kashipur/@29.260355,79.012721,18z/data=!4m6!3m5!1s0x390a4382a01af131:0x479bbb4c65a636f9!8m2!3d29.2602894!4d79.0127187!16s%2Fg%2F11spxf770n?hl=en&entry=ttu"



    return (
        <section className='bg-off-white-bg'>

            {/* -------------------- container ---------------- */}
            <div className='w-10/12 mx-auto  flex flex-col gap-y-12 items-center py-20'>

                {/* ----------top part (heading )----------- */}

                <div className='flex flex-col gap-y-2 items-center'>
                    <h1 className='text-[40px] font-bold'>Contact Us</h1>
                    <p className='text-lg font-medium text-dark-grey'>You can get in touch with us here!</p>
                </div>

                {/* -------------- bottom part (form section)----------- */}

                <div className='flex justify-between bg-white rounded-xl  w-full py-4 px-4'>

                    {/* ---------- Contact  part --------- */}

                    <div className=' flex flex-col gap-y-20  w-[42%] bg-bright-black text-white py-8 px-8 rounded-l-xl'>

                        {/* --------- heading ------ */}

                        <div className='flex flex-col gap-y-3'>

                            <p className='text-xl'>Happy to help!</p>
                            <h2 className='text-dark-light-black'>If you need someone to talk to, we listen. We won’t judge or tell you what to do.</h2>

                        </div>


                        {/* ---------- contact ways --------- */}
                        <div className='flex flex-col gap-y-8'>

                            {/* --------- phone ------- */}

                            <a href={`tel:${countryCode}${phoneNumber}`} className='flex items-center gap-x-6 font-light group'>
                                <span className='text-[24px] group-hover:rotate-[360deg] transition-all duration-500'><BiSolidPhoneCall /></span>
                                <span>{formattedNumber}</span>
                            </a>


                            {/* ----------- email --------------- */}

                            <a href={`mailto:${emailAddress}`} className='flex items-center gap-x-6 font-light group'>
                                <span className='text-[24px] group-hover:rotate-[360deg] transition-all duration-500'><MdEmail /></span>
                                <span>{emailAddress}</span>
                            </a>

                            {/* ---------------------- address ------------ */}

                            <a className='flex items-center gap-x-6 font-light group' href={googleMapUrl} target='_blank' rel="noopener noreferrer" >
                                <span className='text-[24px] group-hover:rotate-[360deg] transition-all duration-500'><IoEarthOutline /></span>
                                <span>{address}</span>
                            </a>


                        </div>


                        {/* --------- social media ----------- */}
                        <div className='flex gap-x-8'>

                            {
                                socialIcon.map((item) => (

                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='bg-dark-blue hover:bg-white transition-all duration-300 group w-[36px] h-[36px] grid place-items-center rounded-full'
                                       
                                    >
                                        <span className='text-[20px] text-white group-hover:text-dark-blue ransition-all duration-300'>{item.icon}</span>
                                    </a>


                                ))
                            }

                        </div>

                    </div>

                    {/* --------------- form part ------------- */}

                    <form className='w-[58%] border border-dark-blue'>


                        {/* Yaha se tumko start krna hai @Ashique!!! */}

                    </form>

                </div>

            </div>

        </section>
    )
}

export default ContactForm