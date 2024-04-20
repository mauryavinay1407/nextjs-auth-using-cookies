import { dbConnect } from "@/dbConfig/dbConfig";
import { NextRequest,NextResponse } from "next/server";
import { getTokenData } from "@/helpers/getTokenData";
import User from "@/models/user.model";

dbConnect()

export async function GET(request:NextRequest){
    try {
        const userId= getTokenData(request);
        // console.log(userId);
        const user=await User.findOne({_id:userId}).select("-password")
        return NextResponse.json(user)
        
    } catch (error:any) {
        console.log(error.message)
    }
}