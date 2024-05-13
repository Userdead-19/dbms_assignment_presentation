import mongoose, { Schema, Document } from 'mongoose';

interface IPayment extends Document {
    User_ID: string;
    Amount: number;
    Method_Payment: string;
    Date_of_txn: Date;
    Transaction_Status: string;
    Payment_Status: string;
    Confirmation_Number: string;
}

const PaymentSchema: Schema = new Schema({
    User_ID: { type: String, required: true },
    Amount: { type: Number, required: true },
    Method_Payment: { type: String, required: true },
    Date_of_txn: { type: Date, required: true },
    Transaction_Status: { type: String, required: true },
    Payment_Status: { type: String, required: true },
    Confirmation_Number: { type: String, required: true },
});

const PaymentModel = mongoose.model<IPayment>('Payment', PaymentSchema);

module.exports = PaymentModel;