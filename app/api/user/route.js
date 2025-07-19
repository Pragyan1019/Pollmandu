import { NextResponse } from 'next/server';
import connectDb from '@/db/connectdb';
import jwt from 'jsonwebtoken'
import { configDotenv } from 'dotenv';

export async function POST(req){
const { name,email,password }=await req.json();
  if (!email || !password || !name) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }
// Use connect method to connect to the server
  await connectDb.connect();
  console.log('Connected successfully to server');
  const db = connectDb.db(Pollmandu);
  const collection = db.collection('users');


//insert the user
const result=await collection.insertOne({name,email,password})
const userid=result.userid;

//generate JWT with mongodb
const token=jwt.sign()

console.log("received data:",data);

  return NextResponse.json({ success: true});

}