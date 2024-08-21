import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Fieldset } from '@headlessui/react'
import { Field } from '@headlessui/react'
import summer from '../../../images/News&Calendar/summercamp.webp'
import GoBackBtn from '../../common/GoBackBtn'
import { useNavigate } from 'react-router-dom'

const SummerCamp = () => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()
  const [showForm, setShowForm] = useState(true)

  const onSubmit = data => {
    console.log(data)
    toast.success('Form submitted successfully!')
    reset()
    setShowForm(false)
  }

  const handleAnotherForm = () => {
    setShowForm(true)
  }

  const goBackHandler = () => {

    navigate(-1);

  }

  return (
    <section className='relative w-full summercmp'>

      {/* ----------- container --------- */}
      <div className=' xl:w-10/12 dxs:w-11/12 mx-auto mb-20 flex flex-col gap-y-6 lg:pt-20 dxs:pt-2 '>

         <GoBackBtn handler={goBackHandler}/>

        <div className='grid grid-cols-1 lg:gap-10  xl:gap-14 lg:grid-cols-2  dxs:gap-1 '>

          <div className='flex  justify-center lg:pt-20 dxs:pt-10'>

            <img
              src={summer}
              alt='summer-camp-form'
              className=' border-2 h-[75%] rounded-xl'
            />
          </div>

          {/* -------------- right side ---------- */}
          <div className='lg:p-6 mx-auto border-[3.5px] rounded-lg shadow-md lg:w-full md:w-[80%] sm:w-[90%] xs:w-[95%] w-full dxs:p-5 bg-white'>
            <div className='p-10 border-[3.5px] border-black rounded-md'>
              <h2 className='mb-1 font-semibold text-[1.5rem]'>
                SUMMER CAMP (OPEN FOR ALL)
              </h2>
              <div className='p-5 '>
                <ul className='list-disc'>
                  <li>Timings: 7:00 am - 10:00 am</li>
                  <li>Fee for registration: ₹2000 per head</li>
                  <li>Scheduled between: 1-15 June</li>
                </ul>
              </div>

              {showForm ? (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='grid grid-cols-1 gap-10 mb-10 md:grid-cols-2'>
                    <div>
                      <input
                        type='text'
                        placeholder='Enter Student Name'
                        {...register('studentName', { required: true })}
                        className='w-full px-4 py-3 border border-gray-300 rounded-md'
                      />
                      {errors.studentName && (
                        <p className='text-sm text-red-600'>
                          Student name is required
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type='text'
                        placeholder='Enter Parent Name'
                        {...register('parentName', { required: true })}
                        className='w-full px-4 py-3 border border-gray-300 rounded-md'
                      />
                      {errors.parentName && (
                        <p className='text-sm text-red-600'>
                          Parent name is required
                        </p>
                      )}
                    </div>
                  </div>
                  <div className='w-full mb-8 border-gray-300 '>
                    <div>
                      <input
                        type='text'
                        placeholder='Students contact no.'
                        {...register('contactNo', {
                          required: true,
                          pattern: /^[0-9]{10}$/
                        })}
                        className='w-full px-4 py-3 border border-gray-300 rounded-md'
                      />
                      {errors.contactNo && (
                        <p className='text-sm text-red-600'>
                          Contact number is required and should be 10 digits
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className='mb-3'>
                      <h2 className='text-lg'>
                        Select Activities (maximum 2 activities/clubs):
                      </h2>
                    </div>
                    <div className='grid grid-cols-2 mb-4'>
                      <div className='flex items-center mb-2'>
                        <input
                          type='checkbox'
                          {...register('activitySwimming')}
                          className='mr-2'
                        />
                        <label className='text-sm'>Swimming</label>
                      </div>
                      <div className='flex items-center mb-2'>
                        <input
                          type='checkbox'
                          {...register('activityBadmintonYoga')}
                          className='mr-2'
                        />
                        <label className='text-sm'>Badminton / Yoga</label>
                      </div>
                      <div className='flex items-center mb-2'>
                        <input
                          type='checkbox'
                          {...register('activityCricket')}
                          className='mr-2'
                        />
                        <label className='text-sm'>Cricket</label>
                      </div>
                      <div className='flex items-center mb-2'>
                        <input
                          type='checkbox'
                          {...register('activityBasketball')}
                          className='mr-2'
                        />
                        <label className='text-sm'>Basketball</label>
                      </div>
                      <div className='flex items-center mb-2'>
                        <input
                          type='checkbox'
                          {...register('activityVolleyball')}
                          className='mr-2'
                        />
                        <label className='text-sm'>Volleyball</label>
                      </div>
                      <div className='flex items-center mb-2'>
                        <input
                          type='checkbox'
                          {...register('activityChess')}
                          className='mr-2'
                        />
                        <label className='text-sm'>Chess</label>
                      </div>
                      <div className='flex items-center mb-2'>
                        <input
                          type='checkbox'
                          {...register('activityFineArtsPainting')}
                          className='mr-2'
                        />
                        <label className='text-sm'>Fine Arts / Painting</label>
                      </div>
                      <div className='flex items-center mb-2'>
                        <input
                          type='checkbox'
                          {...register('activityCookery')}
                          className='mr-2'
                        />
                        <label className='text-sm'>Cookery</label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='mb-2'>
                      <h2 className='text-[1.1rem]'>
                        Kindly deposit ₹2000/- for registration on the bank
                        details given below:
                      </h2>
                      <ul className='p-4 mr-2 text-sm list-disc'>
                        <li>AC NO:- 0262002100034868</li>
                        <li>IFSC:- PUNB0026200</li>
                      </ul>
                      <h2 className='text-[1.1rem] mb-2'>
                        Kindly upload a screenshot image of the transaction
                        details here:
                      </h2>
                      <Fieldset>
                        <Field label='Picture' error={errors.picture}>
                          <input
                            {...register('picture', {
                              required: 'Transaction screenshot is required'
                            })}
                            type='file'
                            id='picture'
                            className='w-full px-3 py-2 border border-gray-300 rounded-md'
                          />
                        </Field>
                      </Fieldset>
                    </div>
                  </div>
                  <div className='flex items-center mb-6'>
                    <input
                      type='checkbox'
                      {...register('consent', { required: true })}
                      className='mr-2'
                    />
                    <label className='text-sm text-justify'>
                      By submitting this form, I acknowledge that I have read and
                      agree to the terms and conditions of the event/activity. I
                      also consent to any necessary safety measures and
                      guidelines.
                    </label>
                  </div>
                  {errors.consent && (
                    <p className='text-sm text-red-600'>
                      You must agree before submitting
                    </p>
                  )}
                  <div className='flex pt-4'>
                    <button
                      type='submit'
                      className='w-full px-12 py-4 text-sm font-medium leading-4 text-white border border-transparent rounded-full shadow-sm bg-dark-blue md:w-auto hover:bg-white hover:text-black hover:border-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    >
                      Submit Now
                    </button>
                  </div>
                </form>
              ) : (
                <div className='text-center'>
                  <h2 className='text-xl font-semibold text-green-600'>
                    Thank you for submitting the form!
                  </h2>
                  <p className='mt-2 text-gray-700'>
                    We have received your submission.
                  </p>
                  <button
                    onClick={handleAnotherForm}
                    className='py-12 mt-4 text-sm font-medium leading-4 text-white border border-transparent rounded-full shadow-sm px-44 bg-dark-blue hover:bg-white hover:text-black hover:border-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  >
                    Fill another form
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>




      <ToastContainer />
    </section>
  )
}

export default SummerCamp
