import {NextResponse} from "next/server";
import jwt from 'jsonwebtoken';
 export async function GET(req){

    const token=req.headers.get('authorization')?.split(" ")[1];
    if(!token){
 return NextResponse.json({ error: "No token provided" }, { status: 401 });
    }
    try {
        const decoded=jwt.verify(token,process.env.JWT_SEC)
        return NextResponse.json({user:decoded});
    } catch (error) {
        return NextResponse.json({Error:"token expired"})
    }
    
 }