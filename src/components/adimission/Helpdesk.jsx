import React, { useState } from 'react';

function StudentForm() {
  const [formData, setFormData] = useState({
    class: '',
    name: '',
    dob: '',
    fatherName: '',
    motherName: '',
    phone: '',
    email: '',
    address: '',
    remark: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.class) formErrors.class = "This field is required";
    if (!formData.name) formErrors.name = "This field is required";
    if (!formData.dob) formErrors.dob = "This field is required";
    if (!formData.fatherName) formErrors.fatherName = "This field is required";
    if (!formData.motherName) formErrors.motherName = "This field is required";
    if (!formData.phone) formErrors.phone = "This field is required";
    if (!formData.email) formErrors.email = "This field is required";
    if (!formData.address) formErrors.address = "This field is required";
    if (!formData.remark) formErrors.remark = "This field is required";
    
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      window.alert('Email sent successfully!');
      window.location.reload(); // Refreshes the page
    } else {
      console.log('Validation errors:', errors);
    }
  };

  return (
    <div className="max-w-full md:max-w-xl mx-auto p-5 md:p-10 bg-white rounded-lg shadow-lg border border-gray-600">
      {/* Form Heading */}
      <h2 className="text-xl md:text-2xl font-semibold text-left mb-2">
        Join Little Scholars: Your Path to Learning and Adventure!
      </h2>
      <p className="text-gray-400 font-regular text-left mb-6">
        The School invites aspiring applicants for admission. If you are a keen learner with kindling curiosity and a sense of adventure, then the Little Scholars is the place to be.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Class and Name in One Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <select
              name="class"
              id="class"
              value={formData.class}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${errors.class ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
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
            {errors.class && <p className="text-red text-xs mt-1">{errors.class}</p>}
          </div>

          <div>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              placeholder="Enter Name"
            />
            {errors.name && <p className="text-red text-sm mt-1">{errors.name}</p>}
          </div>
        </div>

        {/* Date of Birth and Father's Name in One Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="date"
              name="dob"
              id="dob"
              value={formData.dob}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-3 border ${errors.dob ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.dob && <p className="text-red text-xs mt-1">{errors.dob}</p>}
          </div>

          <div>
            <input
              type="text"
              name="fatherName"
              id="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-3 border ${errors.fatherName ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              placeholder="Enter Father's Name"
            />
            {errors.fatherName && <p className="text-red text-xs mt-1">{errors.fatherName}</p>}
          </div>
        </div>

        {/* Mother's Name and Phone Number in One Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="motherName"
              id="motherName"
              value={formData.motherName}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-3 border ${errors.motherName ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              placeholder="Enter Mother's Name"
            />
            {errors.motherName && <p className="text-red text-xs mt-1">{errors.motherName}</p>}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              placeholder="Phone"
            />
            {errors.phone && <p className="text-red text-xs mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 block w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            placeholder="Email"
          />
          {errors.email && <p className="text-red text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Address */}
        <div>
          <textarea
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            className={`mt-1 block w-full px-4 py-10 border ${errors.address ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            placeholder="Address"
          />
          {errors.address && <p className="text-red text-xs mt-1">{errors.address}</p>}
        </div>

        {/* Remark */}
        <div>
          <input
            type="text"
            name="remark"
            id="remark"
            value={formData.remark}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Remarks"
          />
          {errors.remark && <p className="text-red text-sm mt-1">{errors.remark}</p>}
        </div>

        {/* Submit Button */}
        <div className="text-left">
          <button
            type="submit"
            className="bg-dark-blue text-white px-6 py-3 rounded-full"
          >
            Submit Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
