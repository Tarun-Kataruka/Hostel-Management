import express from 'express';
const router = express.Router();
import GatePass from '../models/GatePass';

router.post('/',async (req,res)=>{
    const {studentId,reason} = req.body;
    try {
        const newGatePass = new GatePass({
            studentId,
            reason
        });
        await newGatePass.save();
        res.status(201).json({message:'Gate Pass applied successfully'});
    } catch (error) {
        res.status(500).json({message:'Server Error'});
    }
});

router.get('/',async (req,res)=>{
    try {
        const gatePass = await GatePass.find().populate('studentId',['name','rollNo']);
        res.status(200).json(gatePass);
    } catch (error) {
        res.status(500).json({message:'Server Error'});
    }
});

router.put('/:id',async (req,res)=>{
    const {status} = req.body;
    try {
        let gatePass = await GatePass.findById(req.params.id);
        if(!gatePass){
            return res.status(404).json({message:'Gate Pass not found'});
        }
    gatePass.status= status;
    await gatePass.save();
    res.status(200).json({message:'Gate Pass updated successfully'});
    }
    catch (error) {
        res.status(500).json({message:'Server Error'});
    }
});

export default router;