import mongoose, { Schema, Document, ObjectId } from "mongoose";

export interface ICart extends Document {
    Cart_id: ObjectId;
    User_id: ObjectId;
    Item_id: ObjectId;
    Quantity: number;
    Added_data: Date;
    Updated_data: Date;
    Deleted_data: Date;
    Active: boolean;
    sub_total: number;
}

const CartSchema: Schema = new Schema({
    Cart_id: { type: Schema.Types.ObjectId, required: true },
    User_id: { type: Schema.Types.ObjectId, required: true },
    Item_id: { type: Schema.Types.ObjectId, required: true },
    Quantity: { type: Number, required: true },
    Added_data: { type: Date, required: true },
    Updated_data: { type: Date, required: true },
    Deleted_data: { type: Date, required: true },
    Active: { type: Boolean, required: true },
    sub_total: { type: Number, required: true },
});

const CartModel = mongoose.model<ICart>('Cart', CartSchema);

module.exports = CartModel;