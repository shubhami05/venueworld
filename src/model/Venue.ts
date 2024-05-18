import mongoose, { Schema } from "mongoose";
import { Review, ReviewSchema } from './Reviews'

export interface Venue extends Document {
    name: string
    type: string
    city: string
    address: string
    price: number
    ownerId: string
    ownerName: string
    ownerContact: string
    events: []
    facilities: {
        parking: boolean
        food: boolean
        foodType?: string
        halls: number
        rooms: number
        capacity: number
    }
    photos: []
    reviews: Review[]
    createdAt?: Date
    updatedAt?: Date

}
export const VenueSchema: Schema<Venue> = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    ownerId: {
        type: String,
        ref: 'User',
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    ownerContact: {
        type: String,
        required: true
    },
    events: {
        type: [],
        required: true
    },
    facilities: {
        parking: { type: Boolean, required: true },
        food: { type: Boolean, required: true },
        foodType: { type: String },
        halls: { type: Number, required: true },
        rooms: { type: Number, required: true },
        capacity: { type: Number, required: true },
    },
    photos: { type: [], required: true },
    reviews: [ReviewSchema],

}, { timestamps: true });

const VenueModel = (mongoose.models.Venue) || mongoose.model("Venue", VenueSchema)


export default VenueModel