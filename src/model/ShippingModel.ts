import mongoose from 'mongoose';

const shippingSchema = new mongoose.Schema({
    User_ID: {
        type: String,
        required: true
    },
    Amount: {
        type: Number,
        required: true
    },
    Method_Payment: {
        type: String,
        required: true
    },
    Date_of_txn: {
        type: Date,
        required: true
    },
    Transaction_Status: {
        type: String,
        required: true
    },
    Payment_Status: {
        type: String,
        required: true
    },
    Confirmation_Number: {
        type: String,
        required: true
    }
});

const ShippingModel = mongoose.model('Shipping', shippingSchema);

export default ShippingModel;


