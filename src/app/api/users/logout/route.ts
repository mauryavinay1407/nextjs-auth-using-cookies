import { NextRequest, NextResponse } from "next/server";
import { getTokenData } from "@/helpers/getTokenData";
import User from "@/models/user.model";

export async function GET(request:NextRequest){
    try {
        const response = NextResponse.json({
            message:"Logout successfully",
            success:true
        })
       response.cookies.set("token","",
       {
        httpOnly:true,
        expires:new Date(0)
       });

        return response;
    } catch (error:any) {
        throw new Error(error.message)
    }
}