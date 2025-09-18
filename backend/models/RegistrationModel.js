import mongoose from 'mongoose';

const RegistrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please provide a valid email address',
        ],
    },
    admissionNo: {
        type: String,
        required: [true, 'Admission number is required'],
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
    },
    purpose: {
        type: String,
        required: [true, 'Purpose of registering is required'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model('Registration', RegistrationSchema);

