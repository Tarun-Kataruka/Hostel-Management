import express from 'express';
const router = express.Router();
import Complaint from '../models/Complaint';

router.post('/',async (req,res)=>{
    const {studentId,complaint} = req.body;
    try {
        const newComplaint = new Complaint({
            studentId,
            complaint
        });
        await newComplaint.save();
        res.status(201).json({message:'Complaint registered successfully'});
    } catch (error) {
        res.status(500).json({message:'Server Error'});
    }
});

router.put('/:id',async (req,res)=>{
    const {status} = req.body;
    try {
        let complaint = await Complaint.findById(req.params.id);
        if(!complaint){
            return res.status(404).json({message:'Complaint not found'});
        }
        complaint = await Complaint.findByIdAndUpdate(req.params.id,{status},{new:true});
        res.status(200).json({message:'Complaint updated successfully'});
    } catch (error) {
        res.status(500).json({message:'Server Error'});
    }
});

export default router;