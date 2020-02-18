import mongoose from 'mongoose';
import Setting from '../schemas/setting';

export async function find_setting(get_query, send_query) {
    try {
        return mongoose.connect('mongodb://localhost/pasto-setting', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }).then(async()=>{
            let setting = await Setting.findOne(get_query, send_query);
            return setting;
        }).catch((e)=>{
            console.log(e);
            return null;
        });
    } catch(e) {
        console.log(e);
        return null;
    }
}

export async function create_setting(create_query) {
    try {
        return mongoose.connect('mongodb://localhost/pasto-setting', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }).then(async()=>{
            let setting = {
                subscriptionNumber: create_query.subscriptionNumber,
                orderNumber: create_query.orderNumber,
                customerID: create_query.customerID,
                invoiceNumber: create_query.invoiceNumber,
                tax: create_query.tax,
                GSTIN: create_query.GSTIN,
                latestVersion: create_query.latestVersion
            }
            let new_setting = await Setting.create(setting);
            return new_setting;
        }).catch((e)=>{
            console.log(e);
            return null;
        });
    } catch(e) {
        console.log(e);
        return null;
    }
}

export async function update_setting(find_query, update_query) {
    try {
        return mongoose.connect('mongodb://localhost/pasto-setting', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }).then(async()=>{
            let setting = await Setting.findOne(find_query);
            let new_update_query = {
                $set: {
                    subscriptionNumber: update_query.subscriptionNumber ? update_query.subscriptionNumber : setting.subscriptionNumber,
                    orderNumber: update_query.orderNumber ? update_query.orderNumber : setting.orderNumber,
                    customerID: update_query.customerID ? update_query.customerID : setting.customerID,
                    invoiceNumber: update_query.invoiceNumber ? update_query.invoiceNumber : setting.invoiceNumber,
                    tax: update_query.tax ? update_query.tax : setting.tax,
                    latestVersion: update_query.latestVersion ? update_query.latestVersion : setting.latestVersion,
                }
            }
            let new_setting = await Setting.findOneAndUpdate(find_query, new_update_query, { new: true });
            return new_setting;
        }).catch((e)=>{
            console.log(e);
            return null;
        });
    } catch(e) {
        console.log(e);
        return null;
    }
}

export async function delete_setting(query) {
    try {
        return mongoose.connect('mongodb://localhost/pasto-setting', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }).then(async()=>{
            await Setting.findOneAndRemove(query);
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