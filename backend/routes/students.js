import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Student from '../models/Student.js';

const router = express.Router();

const JWT_SECRET = 'your_jwt_secret_key'; // Use a strong secret key and store it securely

// Registration route
router.post('/signup', async (req, res) => {
    const { name, rollNo, email, password, roomNo, parentDetails } = req.body;
    try {
        let student = await Student.findOne({ rollNo });
        if (student) {
            return res.status(400).json({ message: 'Student already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newStudent = new Student({
            name,
            rollNo,
            email,
            password: hashedPassword,
            roomNo,
            parentDetails
        });

        await newStudent.save();

        const payload = {
            student: {
                id: newStudent.id
            }
        };

        jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.status(201).json({ token });
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        let student = await Student.findOne({ email });
        if (!student) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        const isMatch = await bcrypt.compare(password, student.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        const payload = {
            student: {
                id: student.id
            }
        };

        jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Fetch student details
router.get('/profile', async (req, res) => {
    try {
        const students = await Student.find().select('-password');
        res.status(200).json(students);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;
