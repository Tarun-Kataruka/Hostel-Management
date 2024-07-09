import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const token = localStorage.getItem('auth-token');
      if (!token) {
        throw new Error('User not authenticated');
        return;
      }
      const config={
        headers: {
          Authorization: `Bearer ${token}`
        },
      };
      const res = await axios.get('http://localhost:5000/api/students/all');
      setStudents(res.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  return (
    <div className="container mx-auto p-4 overflow-x-hidden">
      <h1 className="text-2xl font-bold mb-4">Student Details</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Roll No</th>
            <th className="py-2 px-4 border">Room No</th>
            <th className="py-2 px-4 border">Parent Name</th>
            <th className="py-2 px-4 border">Parent Email</th>
            <th className="py-2 px-4 border">Parent Phone</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td className="py-2 px-4 border">{student.name}</td>
              <td className="py-2 px-4 border">{student.email}</td>
              <td className="py-2 px-4 border">{student.rollNo}</td>
              <td className="py-2 px-4 border">{student.roomNo}</td>
              <td className="py-2 px-4 border">{student.parentDetails.name}</td>
              <td className="py-2 px-4 border">{student.parentDetails.email}</td>
              <td className="py-2 px-4 border">{student.parentDetails.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
