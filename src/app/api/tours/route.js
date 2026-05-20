import { NextResponse } from 'next/server'

import connectDB from '@/lib/mongodb'

import Tour from '@/models/Tour'

// export async function GET(){

//   try{

//     await connectDB()

//     const tours = await Tour.find()

//     return NextResponse.json({
//       success:true,
//       tours
//     })

//   }catch(error){

//     return NextResponse.json({
//       success:false,
//       message:error.message
//     })

//   }

// }

export async function GET(req){

  try{

    await connectDB()

    const {
      searchParams
    } = new URL(req.url)

    const page =
    Number(
      searchParams.get('page')
    ) || 1

    const limit = 6

    const skip =
    (page-1)*limit

    const search =
    searchParams.get('search')
    || ''

    const query = {

      title:{
        $regex:search,
        $options:'i'
      }

    }

    const tours =
    await Tour.find(query)

    .skip(skip)

    .limit(limit)

    .sort({
      createdAt:-1
    })

    const total =
    await Tour.countDocuments(
      query
    )

    return Response.json({

      success:true,

      tours,

      totalPages:
      Math.ceil(total/limit)

    })

  }catch(error){

    return Response.json({

      success:false,

      message:error.message

    })

  }

}

export async function POST(req){

  try{

    await connectDB()

    const body = await req.json()

    const tour = await Tour.create(body)

    return NextResponse.json({
      success:true,
      tour
    })
}catch(error){

  console.log(error)

  return NextResponse.json({
    success:false,
    message:error.message
  })

}

}

export async function DELETE(req){

  try{

    await connectDB()

    const { searchParams } =
    new URL(req.url)

    const id = searchParams.get('id')

    await Tour.findByIdAndDelete(id)

    return NextResponse.json({
      success:true
    })

  }catch(error){

    return NextResponse.json({
      success:false,
      message:error.message
    })

  }

}