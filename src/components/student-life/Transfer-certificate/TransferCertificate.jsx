import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TransferCertificate = () => {
  const [studentId, setStudentId] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!studentId.trim()) {
      setError('Please enter a valid Student Name or Admission Number.');
      return;
    }

    setError(''); 
    console.log('Get Transfer Certificate for:', studentId);

    
    toast.success(`Transfer Certificate requested for: ${studentId}`, {
      position: 'top-center',
      autoClose: 4000,
      className: 'custom-toast',  
      style: {
        marginTop: '70px',  
        fontSize: '18px',   
        padding: '20px',    
        width: '450px'      
      }
    });

   
    setStudentId('');
  };

  const onClick = () => {
    console.log('Button clicked');
  };

  return (
    <section className="relative w-full py-20">
      <div className="container mx-auto md:px-8">
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            placeholder="Enter Student Name or Admission Number"
            className="xl:w-[45%] lg:w-[50%] md:w-[60%] sm:w-[70%] xs:w-[80%] w-[90%] text-center p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            onClick={onClick}
            className="bg-dark-blue text-white rounded-sm py-2 px-6 transition duration-300"
          >
            Get Transfer Certificate
          </button>
        </form>
       
        <ToastContainer />
      </div>
    </section>
  );
};

export default TransferCertificate;
