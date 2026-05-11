import { NextResponse } from 'next/server'

import bcrypt from 'bcryptjs'

import jwt from 'jsonwebtoken'

import connectDB from '@/lib/mongodb'

import Admin from '@/models/Admin'

export async function POST(req){

  try{

    await connectDB()

    const { email,password } =
    await req.json()

    const admin =
    await Admin.findOne({email})

    if(!admin){

      return NextResponse.json({
        success:false,
        message:'Invalid credentials'
      })

    }

    const isMatch =
    await bcrypt.compare(
      password,
      admin.password
    )

    if(!isMatch){

      return NextResponse.json({
        success:false,
        message:'Invalid credentials'
      })

    }

    const token = jwt.sign({

      id:admin._id

    },
    process.env.JWT_SECRET,
    {
      expiresIn:'7d'
    })

    const response =
    NextResponse.json({
      success:true
    })

    response.cookies.set(
      'adminToken',
      token,
      {
        httpOnly:true,
        secure:false,
        path:'/'
      }
    )

    return response

  }catch(error){

    return NextResponse.json({
      success:false,
      message:error.message
    })

  }

}