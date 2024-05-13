import mongoose, { Schema, Document } from 'mongoose';

interface ICustomer extends Document {
    name: string;
    age: number;
    phone_number: string;
    email: string;
    gender: string;
    date_of_birth: Date;
    account_creation_date: Date;
    address_id: string;
    total_purchase_cost: number;
}

const CustomerSchema: Schema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    phone_number: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    date_of_birth: { type: Date, required: true },
    account_creation_date: { type: Date, required: true },
    address_id: { type: String, required: true },
    total_purchase_cost: { type: Number, required: true },
});

const CustomerModel = mongoose.model<ICustomer>('Customer', CustomerSchema);

module.exports = CustomerModel;     