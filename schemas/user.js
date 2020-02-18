import mongoose, { Schema } from 'mongoose';

var UserSchema = new mongoose.Schema({
    customerID: {
        type: String,
        required: true,
        trim: true
    },
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String
    },
    mobile: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    role: {
        type: String,
        enum: ['customer','main_admin','admin','ops_manager','ops_head','finance_head','finance_manager','delivery_manager','delivery_executive','customer_support']
    },
    emailVerified: {
        type: Boolean
    },
    emailVerificationCode: {
        type: String
    },
    favourites: [{
        type: Schema.ObjectId,
        ref: 'Menu'
    }],
    wallet: {
        restricted: Number,
        unRestricted: Number
    },
    tokens: [{
        type: String
    }],
    referralCodes: [{
        code: {
            type: String
        },
        value: {
            type: Number
        },
        active: {
            type: Boolean,
            default: true
        }
    }],
    firstTime: {
        type: Boolean
    },
    signUpCode: {
        type: String
    },
    offersUsed: [{
        code: {
            type: String
        },
        count: Number
    }],
    status: {
        type: String,
        enum: ['active','removed']
    }
}, {
    timestamps: true
});

export default mongoose.model('User', UserSchema);