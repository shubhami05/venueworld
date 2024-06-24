import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { NextRequest } from "next/server";
import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
    await dbConnect();

    try {
        const { firstname, lastname, email, mobile, password } = await request.json();
        const existingUserByEmail = await UserModel.findOne({ email })
        if (existingUserByEmail) {
            return Response.json(
                {
                    success: false,
                    message: "Email is already registered"
                },
                {
                    status: 400
                })
        }
        const existingUserByMobile = await UserModel.findOne({ mobile })
        if (existingUserByMobile) {
            return Response.json(
                {
                    success: false,
                    message: "Mobile Number is already registered"
                },
                {
                    status: 401
                })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({
            firstname,
            lastname,
            email,
            mobile,
            password: hashedPassword,
            reviews: [],
            venues: [],
            bookings: [],
            isOwner: false,
            isAdmin: false,
        })
        await newUser.save()

        return Response.json(
            {
                success: true,
                message: "User Registered Successfully"
            },
            {
                status: 200
            }
        )
    }
    catch (error: any) {
        console.log("Error in signup route", error)
        return Response.json(
            {
                success: false,
                message: error.message
            },
            {
                status: 500
            })
    }
}