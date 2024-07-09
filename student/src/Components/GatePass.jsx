import React, { useState } from 'react';
import axios from 'axios';

const GatePass = () => {
  const [formData, setFormData] = useState({
    roomNumber: '',
    studentName: '',
    rollNumber: '',
    reason: '',
    dateFrom: '',
    dateTo: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/gatePass', formData);
      console.log('Gate pass application submitted:', response.data);
      // Reset form fields after submission
      setFormData({
        roomNumber: '',
        studentName: '',
        rollNumber: '',
        reason: '',
        dateFrom: '',
        dateTo: '',
      });
    } catch (error) {
      console.error('Error submitting gate pass application:', error);
    }
  };

  return (
    <div >
     
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block">
              Room Number:
              <input
                type="text"
                name="roomNumber"
                value={formData.roomNumber}
                onChange={handleChange}
                required
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </label>
          </div>
          <div>
            <label className="block">
              Student Name:
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </label>
          </div>
          <div>
            <label className="block">
              Roll Number:
              <input
                type="text"
                name="rollNumber"
                value={formData.rollNumber}
                onChange={handleChange}
                required
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </label>
          </div>
          <div>
            <label className="block">
              Reason:
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </label>
          </div>
          <div>
            <label className="block">
              Date From:
              <input
                type="date"
                name="dateFrom"
                value={formData.dateFrom}
                onChange={handleChange}
                required
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </label>
          </div>
          <div>
            <label className="block">
              Date To:
              <input
                type="date"
                name="dateTo"
                value={formData.dateTo}
                onChange={handleChange}
                required
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </label>
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default GatePass;
