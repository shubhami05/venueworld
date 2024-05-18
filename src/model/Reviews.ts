import mongoose, { Document, Schema } from "mongoose";

export interface Review extends Document {
    userId: string;
    venueId: string;
    userName: string;
    rating: number;
    content: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export const ReviewSchema: Schema<Review> = new Schema({
    userId: {
        type: String,
        required: true
    },
    venueId: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, { timestamps: true });

const ReviewModel = (mongoose.models.Review) || mongoose.model("Review", ReviewSchema)

export default ReviewModel