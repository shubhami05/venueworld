import mongoose, { Document, Schema } from "mongoose";

export interface Contact extends Document {
    userId: string;
    fullname:string;
    email:string;
    mobile:string;
    description:string;
    createdAt?: Date;
    updatedAt?: Date;
}
export const ContactSchema: Schema<Contact> = new Schema({
    userId: {
        type: String,
        required: true
    },
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
}, { timestamps: true })
const ContactModel = (mongoose.models.Contact || mongoose.model("Contact", ContactSchema))

export default ContactModel