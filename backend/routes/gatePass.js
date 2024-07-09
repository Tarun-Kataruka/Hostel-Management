import express from 'express';
import GatePass from '../models/GatePass.js';

const router = express.Router();

// Route: GET /api/gatepasses
// Description: Get all gate passes
router.get('/', async (req, res) => {
  try {
    const gatePasses = await GatePass.find();
    res.json(gatePasses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route: POST /api/gatepasses
// Description: Create a new gate pass
router.post('/', async (req, res) => {
  const { roomNumber, studentName, rollNumber, reason, dateFrom, dateTo } = req.body;

  try {
    const newGatePass = new GatePass({
      roomNumber,
      studentName,
      rollNumber,
      reason,
      dateFrom,
      dateTo,
    });

    const savedGatePass = await newGatePass.save();
    res.status(201).json(savedGatePass);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Add other routes like updating and deleting gate passes as needed

export default router;
