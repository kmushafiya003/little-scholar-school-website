import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import onlineapp from '../../images/Adimission/registration/onlinAPP.png'
import onlinetext from '../../images/Adimission/registration/onlinetexttt.gif'
import { Link } from 'react-router-dom'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

const Registration = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState)
  }

  const onSubmit = data => {
    console.log(data)
    toast.success('Submitted Successful!', {
      position: 'top-center',
      autoClose: 4000
    })
    reset() // Clear the form fields
  }

  const registrationData = {
    title: 'STUDENT REGISTRATION FORM 2024-2025',
    image: onlineapp,
    video: onlinetext,
    instructions: [
      'After Registration, you will receive an SMS of successful registration on your mobile and User name, Password will be sent to your registered email-ID.',
      'User Name and Password can be used to download the filled application form, Acknowledgement receipt and to get the Admission status.'
    ],
    note: 'Admission will be granted only on the availability of seats.',
    url: '#'
  }

  return (
    <section className='relative w-full bg-gray-100'>
      <div className='w-10/12 pt-20 mx-auto pb-14'>
        <div className='flex flex-col '>
          <h1 className='mb-6 text-[2rem] font-semibold '>
            {registrationData.title}
          </h1>
          <div className='w-[70px] h-1 bg-black mb-10'></div>

          <div className='flex items-center justify-around w-full bg-gray-900 smd:flex-row dxs:flex-col'>
            <div className='mb-5 '>
              <Link
                to={registrationData.url}
                className='flex flex-col items-center'
              >
                <img
                  src={registrationData.image}
                  alt='online app'
                  className='w-[7rem]'
                />
                <img
                  src={registrationData.video}
                  alt='online app'
                  className='w-[20rem] '
                />
              </Link>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className='box-border p-8 border-2 border-gray-300 rounded-md shadow-md bg-purple-950 w-80'
            >
              <div className='mb-4'>
                <label className='block mb-2 text-gray-300' htmlFor='username'>
                  User Name:
                </label>
                <input
                  type='text'
                  id='username'
                  {...register('username', {
                    required: 'Username is required',
                    pattern: {
                      value: /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).*$/,
                      message:
                        'Username must include letters, special characters, and numbers'
                    }
                  })}
                  className={`w-full px-3 py-2 bg-gray-100 border rounded-md text-black focus:outline-none focus:border-blue-500 ${errors.username ? 'border-red-500' : ''
                    }`}
                />
                {errors.username && (
                  <p className='mt-1 text-sm text-red-600'>
                    {errors.username.message}
                  </p>
                )}
              </div>

              <div className='relative mb-4'>
                <label className='block mb-2 text-gray-300' htmlFor='password'>
                  Password:
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  {...register('password', {
                    required: 'Password is required'
                  })}
                  className={`w-full px-3 py-2 bg-gray-100 border rounded-md text-black focus:outline-none focus:border-blue-500 ${errors.password ? 'border-red-500' : ''
                    }`}
                />
                <div
                  className='absolute inset-y-0 right-0 flex items-center pt-8 pr-3 cursor-pointer'
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <AiFillEyeInvisible className='text-gray-1' />
                  ) : (
                    <AiFillEye className='text-gray-1' />
                  )}
                </div>
                {errors.password && (
                  <p className='mt-1 text-sm text-red-600'>
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className='flex items-center mb-4'>
                <input
                  type='checkbox'
                  id='rememberMe'
                  {...register('rememberMe')}
                  className='mr-2'
                />
                <label className='text-gray-300' htmlFor='rememberMe'>
                  Remember me
                </label>
              </div>

              <button
                type='submit'
                className='w-full py-2 font-semibold text-black bg-white rounded-md hover:bg-blue-600 hover:text-white focus:outline-none'
              >
                Log In
              </button>
            </form>
          </div>

          <div className='mt-10 text-gray-400'>
            <ul className='mb-4'>
              {registrationData.instructions.map((instruction, index) => (
                <li key={index} className='mb-2 list-[upper-roman] text-justify'>
                  {instruction}
                </li>
              ))}
            </ul>
            <p className='py-5 text-gray-700'>
              <strong>Note:</strong> {registrationData.note}
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  )
}

export default Registration
