import { NextResponse } from 'next/server';
import connectDb from '@/db/connectdb';
import jwt from 'jsonwebtoken'
import User from '@/models/user'

export async function POST(req){
    try {
        
   
const { name,email,password }=await req.json();
  if (!email || !password || !name) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }
// Use connect method to connect to the server
  await connectDb();
  console.log('Connected successfully to server');
// check for the existing user
 const existingUser = await User.findOne({ email });
if (existingUser) {
  const payload={
  id:existingUser._id.toString(),
  email:existingUser.email,
  name:existingUser.name,
  };
  const token=jwt.sign(payload,process.env.JWT_SEC,{expiresIn: '30d'});

  return NextResponse.json({token,user:payload});
}



//create the user
const  newUser=await User.create({name,email,password})


//generate JWT with mongodb
const payload={
    id: newUser._id.toString(),
    email,
    name
}
const token=jwt.sign(payload,process.env.JWT_SEC,{expiresIn: '30d'})


  return NextResponse.json({token,user:{ id: newUser._id.toString(),
    email,
    name}});
   } catch (error) {
        console.log("there is an error",error);
        return NextResponse.json({Error:'Server responded with error'},{status:500})
    }

}