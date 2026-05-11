import { NextResponse } from 'next/server'

import bcrypt from 'bcryptjs'

import connectDB from '@/lib/mongodb'

import Admin from '@/models/Admin'

export async function POST(req){

  try{

    await connectDB()

    const { email,password } =
    await req.json()

    const existingAdmin =
    await Admin.findOne({email})

    if(existingAdmin){

      return NextResponse.json({
        success:false,
        message:'Admin already exists'
      })

    }

    const hashedPassword =
    await bcrypt.hash(password,10)

    const admin = await Admin.create({
      email,
      password:hashedPassword
    })

    return NextResponse.json({
      success:true,
      admin
    })

  }catch(error){

    return NextResponse.json({
      success:false,
      message:error.message
    })

  }

}