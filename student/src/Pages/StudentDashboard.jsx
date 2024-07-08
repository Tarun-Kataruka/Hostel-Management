import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FoodMenu from '../Components/FoodMenu';
import StudentProfile from '../Components/StudentProfile';

const StudentDashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const token = localStorage.getItem('auth-token');
        if (!token) {
          throw new Error('User not authenticated');
        }

        const response = await axios.get('http://localhost:5000/api/students/profile', {
          headers: {
            Authorization: token,
          },
        });

        const studentId = response.data.id;
        if (!studentId) {
          throw new Error('Student ID not found');
        }

        const complaintsResponse = await axios.get(`http://localhost:5000/api/complaints?studentId=${studentId}`, {
          headers: {
            Authorization: token,
          },
        });

        setComplaints(complaintsResponse.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchComplaints();
  }, []);

  const handleAddComplaint = () => {
    navigate('/complaint-form');
  };

  if (loading) return <div className="text-center mt-4">Loading...</div>;
  if (error) return <div className="text-center mt-4">Error: {error}</div>;

  return (
    <div className="flex flex-col lg:flex-row justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      {/* Left Side: Student Profile */}
      <div className="flex-none w-full lg:w-1/3 p-4">
        <div className="bg-white shadow-xl rounded-lg p-6 border-t-4 border-blue-500">
          <StudentProfile />
        </div>
      </div>

      {/* Center: Food Menu */}
      <div className="flex-grow p-4 mt-6 lg:mt-0 lg:ml-6">
        <div className="bg-white shadow-xl rounded-lg p-6 border-t-4 border-green-500">
          <FoodMenu />
        </div>
      </div>

      {/* Right Side: Complaints */}
      <div className="flex-none w-full lg:w-1/3 p-4 mt-6 lg:mt-0 lg:ml-6">
        <div className="bg-white shadow-xl rounded-lg p-6 border-t-4 border-red-500">
          <h2 className="text-2xl font-bold mb-4">Complaints</h2>
          {complaints.length === 0 ? (
            <div className="text-center">
              <p className="mb-4">No complaints filed yet.</p>
              <button
                onClick={handleAddComplaint}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Add New Complaint
              </button>
            </div>
          ) : (
            <div>
              <ul className="space-y-4">
                {complaints.map((complaint) => (
                  <li key={complaint._id} className="bg-gray-100 p-4 rounded-md shadow-sm">
                    <p><strong>Complaint:</strong> {complaint.complaint}</p>
                    <p><strong>Status:</strong> {complaint.status}</p>
                  </li>
                ))}
              </ul>
              <div className="text-center mt-4">
                <button
                  onClick={handleAddComplaint}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Add New Complaint
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
