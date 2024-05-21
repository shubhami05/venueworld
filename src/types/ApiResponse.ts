import { Booking } from "@/model/Booking";
import { Review } from "@/model/Reviews";
import { Venue } from "@/model/Venue";

export interface ApiResponse {
    success: boolean;
    message: string;
    isOwner?: boolean;
    venues?: Array<Venue>;
    reviews?:Array<Review>;
    bookings?:Array<Booking>;
}