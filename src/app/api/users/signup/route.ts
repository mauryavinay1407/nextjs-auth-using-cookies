import { dbConnect } from "@/dbConfig/dbConfig";
import User from "@/models/user.model"
import { NextRequest,NextResponse} from "next/server";
import bcryptjs from "bcryptjs"
import {signupSchema} from "@/app/lib/validationSchema"
import {z} from "zod"

dbConnect() ;

export async function POST(request: NextRequest){
    try {
        const reqBody=await request.json();
        const {username,password,email}=reqBody ;
        const res=await signupSchema.safeParse(reqBody);
        if(!res.success){
            return NextResponse.json({
            error: res.error.errors},
            {
                status:400
            })
        }
        if([username,password,email].some((data)=>data?.trim()===""))
        {
            return NextResponse.json({
         error:"Empty fields are not allowed"},
         {
             status:400
         })
        }

        //checking whether user already exists or not
        const user=await User.findOne({email});
        if(user)
        return NextResponse.json({error:"User already exists"},{status:400})
        
        //hashing the password
        const salt= await bcryptjs.genSalt(10);
        const hashedPassword=await bcryptjs.hash(password,salt);

        //saving the user to the database
        const savedUser=await User.create({
            username,
            email,
            password:hashedPassword
        })

        console.log(savedUser);
       return NextResponse.json({
            message:"User created successfully",
            success:true
        })
         
    } catch (error:any) {
        return NextResponse.json({error:error.message},
            {status:500})
    }
}