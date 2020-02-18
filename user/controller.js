import mongoose from 'mongoose';
import User from '../schemas/user';

export async function find_users(query) {
    try {
        return mongoose.connect('mongodb://localhost/pasto-user', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }).then(async()=>{
            let users = await User.find(query);
            return users;
        }).catch((e)=>{
            console.log(e);
            return null;
        });
    } catch(e) {
        console.log(e);
        return null;
    }
}

export async function create_user(user) {
    try {
        return mongoose.connect('mongodb://localhost/pasto-user', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }).then(async()=>{
            let new_user = {
                customerID: user.customerID,
                firstName: user.firstName,
                lastName: user.lastName ? user.lastName : '',
                mobile: user.mobile,
                email: user.email ? user.email : '',
                role: user.role ? user.role : 'customer',
                emailVerified: user.emailVerified ? user.emailVerified : false,
                emailVerificationCode: user.emailVerificationCode ? user.emailVerificationCode : '1234567890',
                favourites: [],
                wallet: user.wallet ? user.wallet : { restricted: 0, unRestricted: 0 },
                tokens: [],
                referralCodes: user.referralCodes,
                firstTime: user.firstTime ? user.firstTime : true,
                signUpCode: user.signUpCode ? user.signUpCode : '',
                offersUsed: [],
                status: user.status ? user.status : 'active'
            }
            new_user = await User.create(new_user);
            return new_user;
        }).catch((e)=>{
            console.log(e);
            return null;
        });
    } catch(e) {
        console.log(e);
        return null;
    }
}