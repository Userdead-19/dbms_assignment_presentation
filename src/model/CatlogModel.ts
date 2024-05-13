import mongoose, { Schema, Document, ObjectId } from "mongoose";

export interface ICatlog extends Document {
    item_id: string;
    item_name: string;
    price: number;
    manufacturer_id: ObjectId;
    Category_id: ObjectId;
    Quantity: number;
    Added_data: Date;
    Updated_data: Date;
    Deleted_data: Date;
    Discount: number;
    Description: string;
    Weight: number;
    Dimension_id: ObjectId;
    image_url: string;
    Rating: number[];
    Reviews: string[];
    Tags: string[];
}

const CatlogSchema: Schema = new Schema({
    item_id: { type: String, required: true },
    item_name: { type: String, required: true },
    price: { type: Number, required: true },
    manufacturer_id: { type: Schema.Types.ObjectId, required: true },
    Category_id: { type: Schema.Types.ObjectId, required: true },
    Quantity: { type: Number, required: true },
    Added_data: { type: Date, required: true },
    Updated_data: { type: Date, required: true },
    Deleted_data: { type: Date, required: true },
    Discount: { type: Number, required: true },
    Description: { type: String, required: true },
    Weight: { type: Number, required: true },
    Dimension_id: { type: Schema.Types.ObjectId, required: true },
    image_url: { type: String, required: true },
    Rating: { type: [Number], required: true },
    Reviews: { type: [String], required: true },
    Tags: { type: [String], required: true },
});

const CatlogModel = mongoose.model<ICatlog>('Catlog', CatlogSchema);

module.exports = CatlogModel;
