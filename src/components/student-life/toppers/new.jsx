import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUsForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [showForm, setShowForm] = useState(true);

  const onSubmit = (data) => {
    console.log(data);
    toast.success('Message sent successfully!');
    reset();
    setShowForm(false);

    setTimeout(() => {
      setShowForm(true);
    }, 5000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {showForm && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-lg p-6 bg-white rounded shadow-md"
        >
          <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            <input
              {...register('firstName', { required: true })}
              className="w-full p-2 mt-1 border rounded"
              placeholder="First Name"
            />
            {errors.firstName && <span className="text-red-500">First Name is required</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name</label>
            <input
              {...register('lastName', { required: true })}
              className="w-full p-2 mt-1 border rounded"
              placeholder="Last Name"
            />
            {errors.lastName && <span className="text-red-500">Last Name is required</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              className="w-full p-2 mt-1 border rounded"
              placeholder="Email"
            />
            {errors.email && <span className="text-red-500">Valid Email is required</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              {...register('phoneNumber', { required: true, pattern: /^[0-9+\-() ]+$/ })}
              className="w-full p-2 mt-1 border rounded"
              placeholder="Phone Number"
            />
            {errors.phoneNumber && <span className="text-red-500">Valid Phone Number is required</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Select Subject?</label>
            <div className="flex mt-1 space-x-4">
              <label className="inline-flex items-center">
                <input
                  {...register('subject', { required: true })}
                  type="radio"
                  value="General Inquiry"
                  className="form-radio"
                />
                <span className="ml-2">General Inquiry</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  {...register('subject', { required: true })}
                  type="radio"
                  value="Support"
                  className="form-radio"
                />
                <span className="ml-2">Support</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  {...register('subject', { required: true })}
                  type="radio"
                  value="Feedback"
                  className="form-radio"
                />
                <span className="ml-2">Feedback</span>
              </label>
            </div>
            {errors.subject && <span className="text-red-500">Subject is required</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              {...register('message', { required: true })}
              className="w-full p-2 mt-1 border rounded"
              placeholder="Write your message..."
            />
            {errors.message && <span className="text-red-500">Message is required</span>}
          </div>
          <button
            type="submit"
            className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      )}
      <ToastContainer />
    </div>
  );
};

export default ContactUsForm;
