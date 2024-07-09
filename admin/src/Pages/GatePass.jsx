import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GatePass = () => {
  const [gatePasses, setGatePasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGatePasses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/gatePass');
        setGatePasses(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchGatePasses();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Gate Passes</h1>
      <ul>
        {gatePasses.map((gatePass) => (
          <li key={gatePass._id}>
            <p>Room Number: {gatePass.roomNumber}</p>
            <p>Student Name: {gatePass.studentName}</p>
            <p>Roll Number: {gatePass.rollNumber}</p>
            <p>Reason: {gatePass.reason}</p>
            <p>Status: {gatePass.status}</p>
            <p>Date From: {new Date(gatePass.dateFrom).toLocaleDateString()}</p>
            <p>Date To: {new Date(gatePass.dateTo).toLocaleDateString()}</p>
            <p>Date Created: {new Date(gatePass.date).toLocaleDateString()}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GatePass;
