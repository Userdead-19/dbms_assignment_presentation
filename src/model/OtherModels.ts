import mongoose, { Schema, Document } from 'mongoose';

// Address schema
interface IAddress extends Document {
    Address_ID: string;
    Line1: string;
    Line2: string;
    City: string;
    State: string;
    Country: string;
    PinCode: string;
}

const AddressSchema: Schema = new Schema({
    Address_ID: { type: String, required: true },
    Line1: { type: String, required: true },
    Line2: { type: String },
    City: { type: String, required: true },
    State: { type: String, required: true },
    Country: { type: String, required: true },
    PinCode: { type: String, required: true },
});

const AddressModel = mongoose.model<IAddress>('Address', AddressSchema);

// Manufacturer schema
interface IManufacturer extends Document {
    Manufacturer_ID: string;
    Manufacturer_Name: string;
    Location: string;
    GSTIN: string;
}

const ManufacturerSchema: Schema = new Schema({
    Manufacturer_ID: { type: String, required: true },
    Manufacturer_Name: { type: String, required: true },
    Location: { type: String, required: true },
    GSTIN: { type: String, required: true },
});

const ManufacturerModel = mongoose.model<IManufacturer>('Manufacturer', ManufacturerSchema);

// Category schema
interface ICategory extends Document {
    Category_ID: string;
    Name: string;
}

const CategorySchema: Schema = new Schema({
    Category_ID: { type: String, required: true },
    Name: { type: String, required: true },
});

const CategoryModel = mongoose.model<ICategory>('Category', CategorySchema);

// Dimension schema
interface IDimension extends Document {
    Dimension_ID: string;
    Length: number;
    Breadth: number;
    Height: number;
}

const DimensionSchema: Schema = new Schema({
    Dimension_ID: { type: String, required: true },
    Length: { type: Number, required: true },
    Breadth: { type: Number, required: true },
    Height: { type: Number, required: true },
});

const DimensionModel = mongoose.model<IDimension>('Dimension', DimensionSchema);

module.exports = {
    AddressModel,
    ManufacturerModel,
    CategoryModel,
    DimensionModel
}