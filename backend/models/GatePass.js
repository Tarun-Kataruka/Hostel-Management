import mongoose from 'mongoose';

const gatePassSchema = new mongoose.Schema({
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student',
        required:true
    },
    reason:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['Pending','Approved','Rejected'],
        default:'Pending'
    },
    date:{
        type:Date,
        default:Date.now
    }
});

const GatePass = mongoose.model('GatePass',gatePassSchema);
export default GatePass;