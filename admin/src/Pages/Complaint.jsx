import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Complaint = () => {
    const [complaints, setComplaints] = useState([]);
    const [status, setStatus] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchComplaints = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/complaints');
                setComplaints(response.data);
            } catch (error) {
                setMessage('Error fetching complaints');
            }
        };

        fetchComplaints();
    }, []);

    const handleStatusChange = async (id, newStatus) => {
        try {
            await axios.put(`http://localhost:5000/api/complaints/${id}`, { status: newStatus });
            setComplaints((prev) =>
                prev.map((complaint) =>
                    complaint._id === id ? { ...complaint, status: newStatus } : complaint
                )
            );
            setMessage('Complaint status updated successfully');
        } catch (error) {
            setMessage('Error updating complaint status');
        }
    };

    return (
        <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-4">Manage Complaints</h2>
            {message && <div className="mb-4 text-center text-red-500">{message}</div>}
            <table className="w-full table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Room No</th>
                        <th className="px-4 py-2">Complaint</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {complaints.map((complaint) => (
                        <tr key={complaint._id}>
                            <td className="border px-4 py-2">{complaint.roomNo}</td>
                            <td className="border px-4 py-2">{complaint.complaint}</td>
                            <td className="border px-4 py-2">{complaint.status}</td>
                            <td className="border px-4 py-2">
                                <select
                                    value={complaint.status}
                                    onChange={(e) => handleStatusChange(complaint._id, e.target.value)}
                                    className="border border-gray-300 p-2 rounded-md"
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="Resolved">Resolved</option>
                                    <option value="Dismissed">Dismissed</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Complaint;
