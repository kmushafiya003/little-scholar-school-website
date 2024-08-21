import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function StudentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success('Email sent successfully!', {
      position: 'top-center',
      onClose: () => window.location.reload(),
    });
    reset(); // Clear the form after submission
  };

  return (
    <section className='relative w-full pt-24 pb-10'>
      <div className=" p-5 mx-auto text-justify bg-white border-4 rounded-lg shadow-lg black xmd:w-[640px] xs:w-[80%] w-[90%] md:p-10 ">
        <h2 className="mb-6 leading-10 text-xl font-semibold text-left md:text-2xl">
          Join Little Scholars: Your Path to Learning and Adventure!
        </h2>
        <p className="mb-6 text-left text-gray-400 font-regular">
          The School invites aspiring applicants for admission. If you are a keen learner with kindling curiosity and a sense of adventure, then Little Scholars is the place to be.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <select
                name="class"
                {...register('class', { required: 'This field is required' })}
                className={`mt-1 block w-full px-4 py-3 border ${errors.class ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              >
                <option value="">---Choose Class---</option>
                <option value="PG">PG</option>
                <option value="LKG">LKG</option>
                <option value="UKG">UKG</option>
                <option value="Nursery">Nursery</option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
                <option value="V">V</option>
                <option value="VI">VI</option>
                <option value="VII">VII</option>
                <option value="VIII">VIII</option>
                <option value="IX">IX</option>
                <option value="X">X</option>
                <option value="XI">XI</option>
                <option value="XII">XII</option>


              </select>
              {errors.class && <p className="mt-1 text-xs text-red">{errors.class.message}</p>}
            </div>

            <div>
              <input
                type="text"
                name="name"
                {...register('name', { required: 'This field is required' })}
                className={`mt-1 block w-full px-4 py-3 border rounded-lg ${errors.name ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                placeholder="Enter Name"
              />
              {errors.name && <p className="mt-1 text-xs text-red">{errors.name.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <input
                type="date"
                name="dob"
                {...register('dob', { required: 'This field is required' })}
                className={`mt-1 block w-full px-4 py-3 border rounded-lg ${errors.dob ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              {errors.dob && <p className="mt-1 text-xs text-red">{errors.dob.message}</p>}
            </div>

            <div>
              <input
                type="text"
                name="fatherName"
                {...register('fatherName', { required: 'This field is required' })}
                className={`mt-1 block w-full px-4 py-3 border rounded-lg ${errors.fatherName ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                placeholder="Enter Father's Name"
              />
              {errors.fatherName && <p className="mt-1 text-xs text-red">{errors.fatherName.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <input
                type="text"
                name="motherName"
                {...register('motherName', { required: 'This field is required' })}
                className={`mt-1 block w-full px-4 py-3 border rounded-lg ${errors.motherName ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                placeholder="Enter Mother's Name"
              />
              {errors.motherName && <p className="mt-1 text-xs text-red">{errors.motherName.message}</p>}
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                {...register('phone', { required: 'This field is required' })}
                className={`mt-1 block w-full px-4 py-3 border rounded-lg ${errors.phone ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                placeholder="Phone"
              />
              {errors.phone && <p className="mt-1 text-xs text-red">{errors.phone.message}</p>}
            </div>
          </div>

          <div>
            <input
              type="email"
              name="email"
              {...register('email', { required: 'This field is required' })}
              className={`mt-1 block w-full px-4 py-3 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              placeholder="Email"
            />
            {errors.email && <p className="mt-1 text-xs text-red">{errors.email.message}</p>}
          </div>

          <div>
            <textarea
              name="address"
              {...register('address', { required: 'This field is required' })}
              className={`mt-1 block w-full px-4 py-10 border rounded-lg ${errors.address ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              placeholder="Address"
            />
            {errors.address && <p className="mt-1 text-xs text-red">{errors.address.message}</p>}
          </div>

          <div>
            <input
              type="text"
              name="remark"
              {...register('remark', { required: 'This field is required' })}
              className={`mt-1 block w-full px-4 py-10 border rounded-lg ${errors.remark ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              placeholder="Remark"
            />
            {errors.remark && <p className="mt-1 text-xs text-red">{errors.remark.message}</p>}
          </div>

          <div className="flex pt-4">
            <button
              type="submit"
              className="w-full px-12 py-4 font-medium leading-4 text-white border border-transparent rounded-full shadow-sm ext-sm bg-dark-blue md:w-auto hover:bg-white hover:text-black hover:border-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Now
            </button>
          </div>
        </form>

        <ToastContainer />
      </div>
    </section>
  );
}

export default StudentForm;
