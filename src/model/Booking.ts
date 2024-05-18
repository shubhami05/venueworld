import mongoose, { Document, Schema } from "mongoose";

export interface Booking extends Document {
    userId: string;
    venueId: string;
    userEmail: string;
    userMobile: string;
    date: Date;
    session: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export const BookingSchema: Schema<Booking> = new Schema({
    userId: {
        type: String,
        required: true
    },
    venueId: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userMobile: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    session: {
        type: String,
        required: true
    },
}, { timestamps: true })
const BookingModel = (mongoose.models.Booking || mongoose.model("Booking", BookingSchema))

export default BookingModel