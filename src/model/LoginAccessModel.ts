import mongoose, { Schema, Document, ObjectId } from "mongoose";

export interface ILoginAccess extends Document {
    Login_id: ObjectId;
    User_id: ObjectId;
    Login_time: Date;
    Logout_time: Date;
    IP_address: string;
    Device_type: string;
}

const LoginAccessSchema: Schema = new Schema({
    Login_id: { type: Schema.Types.ObjectId, required: true },
    User_id: { type: Schema.Types.ObjectId, required: true },
    Login_time: { type: Date, required: true },
    Logout_time: { type: Date, required: true },
    IP_address: { type: String, required: true },
    Device_type: { type: String, required: true },
});

const LoginAcessModel = mongoose.model<ILoginAccess>('LoginAccess', LoginAccessSchema);

module.exports = LoginAcessModel;