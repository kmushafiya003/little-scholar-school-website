import React, { useState } from 'react';

const TransferCertificate = () => {
  const [studentId, setStudentId] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Check if the input is empty
    if (!studentId.trim()) {
      setError('Please enter a valid Student Name or Admission Number.');
      return;
    }

    setError(''); // Clear error if validation passes
    console.log('Get Transfer Certificate for:', studentId);
    // Handle the form submission logic, e.g., API call
  };

  return (
    <section className="relative w-full py-8">
      <div className="container mx-auto px-8">
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            placeholder="Enter Student Name or Admission Number"
            className="w-full max-w-md p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="bg-gray-400 text-black py-2 px-6 transition duration-300"
          >
            Get Transfer Certificate
          </button>
        </form>
      </div>
    </section>
  );
};

export default TransferCertificate;
