import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { IoEarthOutline } from 'react-icons/io5';
import { socialIcon } from '../../data/Contact/contact-data';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [showForm, setShowForm] = useState(true);
  const onSubmit = data => {
    console.log(data);
    toast.success('Message sent successfully!');
    reset();
    setShowForm(false);

    setTimeout(() => {
      setShowForm(true);
    }, 100);
  };

  const countryCode = '+91';
  const phoneNumber = '9105666371';
  const formattedNumber = `${countryCode} ${phoneNumber}`;

  const emailAddress = 'littlescholars.kashipur@gmail.com';

  const address = 'Bhalla Farm Pratappur, Ramnagar Road, Kashipur-244713, Distt. U.S.Nagar';
  const googleMapUrl = 'https://www.google.com/maps/place/Little+Scholars+Kashipur/@29.260355,79.012721,18z/data=!4m6!3m5!1s0x390a4382a01af131:0x479bbb4c65a636f9!8m2!3d29.2602894!4d79.0127187!16s%2Fg%2F11spxf770n?hl=en&entry=ttu';

  return (
    <section className='bg-off-white-bg'>
      {/* Container */}
      <div className='xmd:w-10/12 md:w-11/12 xs:w-10/12 w-[93%] py-20 mx-auto gap-y-12'>
        {/* Top part (heading) */}
        <div className='flex flex-col items-center gap-y-2'>
          <h1 className='text-[40px] font-bold'>Contact Us</h1>
          <p className='text-lg font-medium text-dark-grey'>You can get in touch with us here!</p>
        </div>

        {/* Bottom part (form section) */}
        <div className='flex flex-col w-full gap-5 xmd:px-4 px-2 py-4 bg-white md:flex-row rounded-xl mt-10'>
          {/* Contact part */}
          <div className='flex flex-col gap-y-8 xmd:w-[42%] md:w-[45%] bg-bright-black text-white py-8 px-8 rounded-xl'>
            {/* Heading */}
            <div className='flex flex-col gap-y-3'>
              <p className='text-xl'>Happy to help!</p>
              <h2 className='text-dark-light-black'>
                If you need someone to talk to, we listen. We won’t judge or tell you what to do.
              </h2>
            </div>

            {/* Contact ways */}
            <div className='flex flex-col gap-y-8'>
              {/* Phone */}
              <a href={`tel:${countryCode}${phoneNumber}`} className='flex items-center font-light xmd:gap-x-6 gap-x-4 group'>
                <span className='text-[24px] group-hover:rotate-[360deg] transition-all duration-500'>
                  <BiSolidPhoneCall />
                </span>
                <span>{formattedNumber}</span>
              </a>

              {/* Email */}
              <a href={`mailto:${emailAddress}`} className='flex items-center font-light xmd:gap-x-6 gap-x-4 group'>
                <span className='text-[24px] group-hover:rotate-[360deg] transition-all duration-500'>
                  <MdEmail />
                </span>
                <span>{emailAddress}</span>
              </a>

              {/* Address */}
              <a className='flex items-center font-light xmd:gap-x-6 gap-x-4 group' href={googleMapUrl} target='_blank' rel='noopener noreferrer'>
                <span className='text-[24px] group-hover:rotate-[360deg] transition-all duration-500'>
                  <IoEarthOutline />
                </span>
                <span>{address}</span>
              </a>
            </div>

            {/* Social media */}
            <div className='flex gap-x-8'>
              {socialIcon.map((item, index) => (
                <a key={index} href={item.link} target='_blank' rel='noopener noreferrer' className='bg-dark-blue hover:bg-white transition-all duration-300 group w-[36px] h-[36px] grid place-items-center rounded-full'>
                  <span className='text-[20px] text-white group-hover:text-dark-blue transition-all duration-300'>{item.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form part */}
          {showForm && (
            <div className='w-full p-10 md:w-[58%]'>
              <form onSubmit={handleSubmit(onSubmit)} className='w-full rounded'>
                <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
                  <div className='mb-4'>
                    <label className='block text-gray-700'>First Name</label>
                    <input
                      {...register('firstName', { required: true })}
                      className='w-full p-2 mt-1 border-b-2 rounded'
                      placeholder='First Name'
                    />
                    {errors.firstName && <span className='text-red-500'>First Name is required</span>}
                  </div>
                  <div className='mb-4'>
                    <label className='block text-gray-700'>Last Name</label>
                    <input
                      {...register('lastName', { required: true })}
                      className='w-full p-2 mt-1 border-b-2 rounded'
                      placeholder='Last Name'
                    />
                    {errors.lastName && <span className='text-red-500'>Last Name is required</span>}
                  </div>
                  <div className='mb-4'>
                    <label className='block text-gray-700'>Email</label>
                    <input
                      {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                      className='w-full p-2 mt-1 border-b-2 rounded'
                      placeholder='Email'
                    />
                    {errors.email && <span className='text-red-500'>Valid Email is required</span>}
                  </div>
                  <div className='mb-4'>
                    <label className='block text-gray-700'>Phone Number</label>
                    <input
                      {...register('phoneNumber', { required: true, pattern: /^[0-9+\-() ]+$/ })}
                      className='w-full p-2 mt-1 border-b-2 rounded'
                      placeholder='Phone Number'
                    />
                    {errors.phoneNumber && <span className='text-red-500'>Valid Phone Number is required</span>}
                  </div>
                  <div>
                    <label className='text-gray-700'>Select Subject?</label>
                    <div className='mt-1 space-x-1'>
                      <label className='inline-flex items-center'>
                        <input
                          {...register('subject', { required: true })}
                          type='radio'
                          value='General Inquiry'
                          className='form-radio'
                        />
                        <span className='ml-2'>General Inquiry</span>
                      </label>
                      <label className='inline-flex items-center'>
                        <input
                          {...register('subject', { required: true })}
                          type='radio'
                          value='Support'
                          className='form-radio'
                        />
                        <span className='ml-2'>Support</span>
                      </label>
                      <label className='inline-flex items-center'>
                        <input
                          {...register('subject', { required: true })}
                          type='radio'
                          value='Feedback'
                          className='form-radio'
                        />
                        <span className='ml-2'>Feedback</span>
                      </label>
                    </div>
                    {errors.subject && <span className='text-red-500'>Subject is required</span>}
                  </div>
                </div>
                <div className='mt-6 mb-4'>
                  <label className='block text-gray-700'>Message</label>
                  <textarea
                    {...register('message', { required: true })}
                    className='w-full p-2 mt-1 border-b-2 rounded'
                    placeholder='Write your message...'
                  />
                  {errors.message && <span className='text-red-500'>Message is required</span>}
                </div>
                <button
                  type='submit'
                  className='w-full px-12 py-4 font-medium leading-4 text-white border border-transparent rounded-full shadow-sm bg-dark-blue md:w-auto hover:bg-white hover:text-black hover:border-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Send Message
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ContactForm;
