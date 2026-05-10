import { NextResponse } from 'next/server'

import connectDB from '@/lib/mongodb'

import Booking from '@/models/Booking'

export async function GET(){

  try{

    await connectDB()

    const bookings = await Booking.find()
    .sort({createdAt:-1})

    return NextResponse.json({
      success:true,
      bookings
    })

  }catch(error){

    return NextResponse.json({
      success:false,
      message:error.message
    })

  }

}

export async function POST(req){

  try{

    await connectDB()

    const body = await req.json()

    const booking = await Booking.create(body)

    return NextResponse.json({
      success:true,
      booking
    })

  }catch(error){

    return NextResponse.json({
      success:false,
      message:error.message
    })

  }

}