import React from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ChampionshipForm() {


  const notify = data => {
    console.log(data)
    toast.success('Login Successful!', {
      position: 'top-center',
      autoClose: 4000
    })
    reset() // Clear the form fields
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();




  return (
    <div className="box-border p-4 m-2 md:p-12 md:m-20 rounded-md border-[0.25rem] border-black">
      <h3 className="px-0 py-4 text-2xl font-medium text-black">
        Little Scholars School IIMUN Championship Conference Form 2024
      </h3>

      <form onSubmit={handleSubmit(notify)}>
        <div className="flex flex-col    gap-4">
          <div className="flex flex-col md:flex-row md:justify-center md:gap-7 ">

            {/* Name */}
            <div className="w-[90%] md:w-full m-4 md:m-0">
              <label className="block font-light mb-2 text-gray-500" htmlFor="name">
                Name
              </label>
              <input
                placeholder="Name of Trainee"
                type="text"
                id="name"
                {...register('name', { required: 'This field is required' })}
                className={`w-full p-4  bg-gray-100 text-black focus:outline-none focus:border-4 border-blue-600 ${errors.name ? 'border-red-500' : 'border-blue-900'
                  }`}
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>

            {/* Class */}
            <div className="w-[90%] md:w-full m-4 md:m-0">
              <label className="block font-light mb-2 text-gray-500" htmlFor="class">
                Class
              </label>
              <select
                id="class"
                {...register('class', { required: 'This field is required' })}
                className={`w-full p-4  bg-gray-100 text-black focus:outline-none  focus:border-4 border-blue-600 ${errors.class ? 'border-red-500' : 'border-blue-900'
                  }`}
              >
                <option value="">Select</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              {errors.class && <p className="mt-1 text-sm text-red-600">{errors.class.message}</p>}
            </div>

          </div>



          <div className="flex flex-col md:flex-row md:justify-center md:gap-7">
            {/* Phone Number */}
            <div className="w-[90%] md:w-full m-4 md:m-0">
              <label className="block font-light mb-2 text-gray-500" htmlFor="phone">
                Phone Number
              </label>
              <input
                placeholder="Enter your phone number"
                type="text"
                id="phone"
                {...register('phone', {
                  required: 'This field is required',
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message: 'Please enter a valid Indian phone number',
                  },
                })}
                className={`w-full p-4  bg-gray-100 text-black focus:outline-none focus:border-4 border-blue-600 ${errors.phone ? 'border-red-500' : 'border-blue-900'
                  }`}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
            </div>

            {/* MUN Experience */}
            <div className="w-[90%] md:w-full m-4 md:m-0">
              <label className="block font-light mb-2 text-gray-500" htmlFor="experience">
                MUN Experience (Years)
              </label>
              <input
                placeholder="Enter your MUN experience"
                type="text"
                id="experience"
                {...register('experience', {
                  required: 'This field is required',
                  validate: value => !isNaN(value) || 'Please enter a valid number',
                })}
                className={`w-full p-4  bg-gray-100 text-black focus:outline-none focus:border-4 border-blue-600 ${errors.experience ? 'border-red-500' : 'border-blue-900'
                  }`}
              />
              {errors.experience && <p className="mt-1 text-sm text-red-600">{errors.experience.message}</p>}
            </div>


          </div>


          <div className="flex flex-col md:flex-row md:justify-center md:gap-7">


            {/* Bus Stop */}
            <div className="w-[90%] md:w-full m-4 md:m-0">
              <label className="block font-light mb-2 text-gray-500" htmlFor="busStop">
                Bus Stop
              </label>
              <input
                placeholder="Enter your bus stop"
                type="text"
                id="busStop"
                {...register('busStop', { required: 'This field is required' })}
                className={`w-full p-4  bg-gray-100 text-black focus:outline-none focus:border-4 border-blue-600 ${errors.busStop ? 'border-red-500' : 'border-blue-900'
                  }`}
              />
              {errors.busStop && <p className="mt-1 text-sm text-red-600">{errors.busStop.message}</p>}
            </div>

            {/* Committee Preferences */}
            <div className="w-[90%] md:w-full m-4 md:m-0">
              <label className="block font-light mb-2 text-gray-500" htmlFor="committee1">
                Committee Preference 1
              </label>
              <select
                id="committee1"
                {...register('committee1', { required: 'Please select an option' })}
                className={`w-full p-4  bg-gray-100 text-black focus:outline-none focus:border-4 border-blue-600 ${errors.committee1 ? 'border-red-500' : 'border-blue-900'
                  }`}
              >
                <option value="">Select</option>
                <option value="UNODC">UNODC</option>
                <option value="UNGA">UNGA</option>
                <option value="WEF">WEF</option>
                <option value="IMF">IMF</option>
                <option value="G21">G21</option>
                <option value="African Union">African Union</option>
                <option value="Lok Sabha">Lok Sabha</option>
                <option value="NITI Ayog">NITI Ayog</option>
                <option value="JPC">JPC</option>
                <option value="AIPPM">AIPPM</option>
                <option value="PMSS">PMSS</option>
                <option value="Trilateral Summit">Trilateral Summit</option>
                <option value="IOC">IOC</option>
                <option value="CCC">CCC</option>
                <option value="HCC">HCC</option>
                <option value="MCC">MCC</option>
                <option value="FCC">FCC</option>
                <option value="IPL">IPL</option>
              </select>
              {errors.committee1 && <p className="mt-1 text-sm text-red-600">{errors.committee1.message}</p>}
            </div>

          </div>


          <div className="flex flex-col md:flex-row md:justify-center md:gap-7">


            <div className="w-[90%] md:w-full m-4 md:m-0">
              <label className="block font-light mb-2 text-gray-500" htmlFor="committee2">
                Committee Preference 2
              </label>
              <select
                id="committee2"
                {...register('committee2', { required: 'Please select an option' })}
                className={`w-full p-4  bg-gray-100 text-black focus:outline-none focus:border-4 border-blue-600 ${errors.committee2 ? 'border-red-500' : 'border-blue-900'
                  }`}
              >
                <option value="">Select</option>
                <option value="UNODC">UNODC</option>
                <option value="UNGA">UNGA</option>
                <option value="WEF">WEF</option>
                <option value="IMF">IMF</option>
                <option value="G21">G21</option>
                <option value="African Union">African Union</option>
                <option value="Lok Sabha">Lok Sabha</option>
                <option value="NITI Ayog">NITI Ayog</option>
                <option value="JPC">JPC</option>
                <option value="AIPPM">AIPPM</option>
                <option value="PMSS">PMSS</option>
                <option value="Trilateral Summit">Trilateral Summit</option>
                <option value="IOC">IOC</option>
                <option value="CCC">CCC</option>
                <option value="HCC">HCC</option>
                <option value="MCC">MCC</option>
                <option value="FCC">FCC</option>
                <option value="IPL">IPL</option>
              </select>
              {errors.committee2 && <p className="mt-1 text-sm text-red-600">{errors.committee2.message}</p>}
            </div>

            <div className="w-[90%] md:w-full m-4 md:m-0">
              <label className="block font-light mb-2 text-gray-500" htmlFor="committee3">
                Committee Preference 3
              </label>
              <select
                id="committee3"
                {...register('committee3', { required: 'Please select an option' })}
                className={`w-full p-4 bg-gray-100 text-black focus:outline-none focus:border-4 border-blue-600 ${errors.committee3 ? 'border-red-500' : 'border-blue-900'
                  }`}
              >
                <option value="">Select</option>
                <option value="UNODC">UNODC</option>
                <option value="UNGA">UNGA</option>
                <option value="WEF">WEF</option>
                <option value="IMF">IMF</option>
                <option value="G21">G21</option>
                <option value="African Union">African Union</option>
                <option value="Lok Sabha">Lok Sabha</option>
                <option value="NITI Ayog">NITI Ayog</option>
                <option value="JPC">JPC</option>
                <option value="AIPPM">AIPPM</option>
                <option value="PMSS">PMSS</option>
                <option value="Trilateral Summit">Trilateral Summit</option>
                <option value="IOC">IOC</option>
                <option value="CCC">CCC</option>
                <option value="HCC">HCC</option>
                <option value="MCC">MCC</option>
                <option value="FCC">FCC</option>
                <option value="IPL">IPL</option>
              </select>
              {errors.committee3 && <p className="mt-1 text-sm text-red-600">{errors.committee3.message}</p>}
            </div>

          </div>

          <div className="flex flex-col gap-0.5 align-center">
            <h5 className="py-0">Account Details</h5>
            <h6 className="py-0 font-light">Account No: 0262002100034868</h6>
            <h6 className="py-0 font-light">IFSC Code: PUNB0026200</h6>
          </div>




          {/* File Upload */}
          <div className="w-[90%] md:w-full m-4 md:m-0">
            <label className="block font-light mb-2 text-gray-500" htmlFor="file">
              Upload File
            </label>
            <input
              type="file"
              id="file"
              {...register('file', { required: 'Please upload a file' })}
              className={`w-full p-4 bg-gray-100 text-black focus:outline-none focus:border-4 border-blue-600 ${errors.file ? 'border-red-500' : 'border-blue-900'
                }`}
            />
            {errors.file && <p className="mt-1 text-sm text-red-600">{errors.file.message}</p>}
          </div>



          <div className="w-full">
            <button
              type="submit"
              className="w-full md:w-1/4 px-4 py-2 bg-desaturated-blue text-white font-medium rounded-md hover:bg-blue-l"
            >
              Submit
            </button>
            <ToastContainer className="align-center" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default ChampionshipForm
