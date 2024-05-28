import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { NextRequest } from "next/server";


export default async function POST(request: NextRequest) {
    await dbConnect();

    try {
        const { userid } = await request.json();
        const userExist = await UserModel.findById(userid);

        if (userExist) {
            // TODO: Make verification logic here using email
            userExist.isOwner = true;
            await userExist.save();
            return Response.json(
                {
                    success: true,
                    message: "Owner verified successfully"
                },
                {
                    status: 200
                })
        }
        else {
            return Response.json(
                {
                    success: false,
                    message: "User not found, please Login again!"
                },
                {
                    status: 400
                })
        }

    } catch (error) {

    }
}