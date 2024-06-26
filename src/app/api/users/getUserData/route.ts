import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { ObjectId } from "mongodb";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    await dbConnect();

    try {
        const { id } = await request.json();
        const userExist = await UserModel.findOne({_id:ObjectId.createFromHexString(id)})
        if (!userExist) {
            return Response.json(
                {
                    success: false,
                    message: "User not found"
                },
                {
                    status: 400
                }
            )
        }
        return Response.json(
            {
                success: true,
                message: 'User founded successfully',
                userData: userExist
            },
            {
                status: 200
            }
        )
    }
    catch (error) {
        console.log(error)
        return Response.json(
            {
                success: false,
                message: "Something went wrong"
            },
            {
                status: 500
            }
        )
    }
}