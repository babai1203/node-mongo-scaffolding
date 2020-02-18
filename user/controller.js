import mongoose from 'mongoose';
import User from '../schemas/user';

export async function find_users(get_query, send_query) {
    try {
        return mongoose.connect('mongodb://localhost/product-user', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }).then(async()=>{
            let users = await User.find(get_query, send_query);
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

export async function create_user(create_query) {
    try {
        return mongoose.connect('mongodb://localhost/product-user', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }).then(async()=>{
            let user = {
                customerID: create_query.customerID,
                firstName: create_query.firstName,
                lastName: create_query.lastName ? create_query.lastName : '',
                mobile: create_query.mobile,
                email: create_query.email ? create_query.email : '',
                role: create_query.role ? create_query.role : 'customer',
                emailVerified: create_query.emailVerified ? create_query.emailVerified : false,
                emailVerificationCode: create_query.emailVerificationCode ? create_query.emailVerificationCode : '1234567890',
                favourites: [],
                wallet: create_query.wallet ? create_query.wallet : { restricted: 0, unRestricted: 0 },
                tokens: [],
                referralCodes: create_query.referralCodes,
                firstTime: create_query.firstTime ? create_query.firstTime : true,
                signUpCode: create_query.signUpCode ? create_query.signUpCode : '',
                offersUsed: [],
                status: create_query.status ? create_query.status : 'active'
            }
            let new_user = await User.create(user);
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

export async function update_user(find_query, update_query) {
    try {
        return mongoose.connect('mongodb://localhost/product-user', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }).then(async()=>{
            let user = await User.findOne(find_query);
            let new_update_query = {
                $set: {
                    firstName: update_query.firstName ? update_query.firstName : user.firstName,
                    lastName: update_query.lastName ? update_query.lastName : user.lastName,
                    mobile: update_query.mobile ? update_query.mobile : user.mobile,
                    email: update_query.email ? update_query.email : user.email,
                    role: update_query.role ? update_query.role : user.role,
                    emailVerified: update_query.emailVerified ? update_query.emailVerified : user.emailVerified,
                    favourites: update_query.favourites ? update_query.favourites : user.favourites,
                    wallet: update_query.wallet ? update_query.wallet : user.wallet,
                    tokens: update_query.tokens ? update_query.tokens : user.tokens,
                    firstTime: update_query.firstTime ? update_query.firstTime : user.firstTime,
                    offersUsed: update_query.offersUsed ? update_query.offersUsed : user.offersUsed,
                    status: update_query.status ? update_query.status : user.status,
                }
            }
            let new_user = await User.findOneAndUpdate(find_query, new_update_query, { new: true });
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

export async function delete_user(query) {
    try {
        return mongoose.connect('mongodb://localhost/product-user', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }).then(async()=>{
            await User.findOneAndRemove(query);
            return true;
        }).catch((e)=>{
            console.log(e);
            return null;
        });
    } catch(e) {
        console.log(e);
        return null;
    }
}