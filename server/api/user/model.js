import mongoose, { Schema } from 'mongoose';

var UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    mobile: {
        type:  String
    },
    email: {
        type: String
    },
    role: {
        type: String
    },
    password: {
        type: String
    },
    status: {
        type: String
    }
});

export default mongoose.model('User', UserSchema);