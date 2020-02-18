import mongoose, { Schema } from 'mongoose';

var SettingsSchema = new mongoose.Schema({
    subscriptionNumber: {
      type: String
    },
    orderNumber: {
      type: String
    },
    customerID: {
      type: String
    },
    invoiceNumber: {
      type: String
    },
    tax: {
      type: Number
    },
    GSTIN: {
      type: String
    },
    latestVersion: {
      type: String
    }
});

export default mongoose.model('Setting', SettingsSchema);