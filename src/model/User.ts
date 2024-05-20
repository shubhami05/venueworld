import mongoose, { Document, Schema } from "mongoose"
import { Review, ReviewSchema } from "./Reviews"
import { Venue, VenueSchema } from "./Venue"
import { Booking, BookingSchema } from "./Booking"


export interface User extends Document {
    firstname: string
    lastname: string
    email: string
    mobile: string
    password: string
    isVerified: boolean
    verifyCode: string
    verifyCodeExpiry: Date
    reviews: Review[]
    venues: Venue[]
    bookings: Booking[]
    isOwner: boolean
    isAdmin: boolean
    createdAt?: Date
    updatedAt?: Date
}
export const UserSchema: Schema<User> = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    reviews: [ReviewSchema],
    venues: [VenueSchema],
    bookings: [BookingSchema],
    isOwner: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
}, { timestamps: true })
const UserModel = (mongoose.models.User || mongoose.model("User", UserSchema))

export default UserModel