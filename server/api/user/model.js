import mongoose, { Schema } from 'mongoose';

var UserSchema = new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String,
        enum: ['customer','admin']
    },
    status: {
        type: String
    }
});

export default mongoose.model('User', UserSchema);