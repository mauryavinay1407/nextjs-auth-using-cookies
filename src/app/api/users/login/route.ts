import { dbConnect } from "@/dbConfig/dbConfig";
import User from "@/models/user.model";
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

 dbConnect();

export async function POST(request : NextRequest){
    try {
        const {email,password}= await request.json() ;
        const user=await User.findOne({email});
    
        //Checking whether user exists or not
        if(!user)
        return NextResponse.json({error:"User doesn't exist"},{status:400})
    
       //Checking credentials

       const validPassword=await bcryptjs.compare(password,user.password);
       if(!validPassword)
       return NextResponse.json({
    error:"Invalid password!"},
    {status:400})

    //generating token
    const payload={
        username:user.username,
        email:user.email,
        id:user._id
    }
    const token=await jwt.sign(payload,process.env.TOKEN_SECRET!,{expiresIn:"1d"});

    const response= NextResponse.json({
       message:"Successfully login",
       success:true
    })

     response.cookies.set("token",token,{
        httpOnly:true
     })
     return response;

    } catch (error:any) {
        return NextResponse.json({
            error:error.message
        },{
            status:400
        })
    }
}