import { NextResponse } from 'next/server'

import connectDB from '@/lib/mongodb'

import Destination from '@/models/Destination'

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
    (page - 1) * limit

    const search =
    searchParams.get('search')
    || ''

    const tag =
    searchParams.get('tag')
    || ''

    const tags =
    searchParams.get('tags')
    const query = {}

    // Search by destination name

    if(search){

      query.name = {
        $regex:search,
        $options:'i'
      }

    }

    // Filter by tag

if(tags){

  query.tags = {
    $in: tags.split(',')
  }

}
    const destinations =
    await Destination.find(query)

    .skip(skip)

    .limit(limit)

    .sort({
      createdAt:-1
    })

    const total =
    await Destination.countDocuments(
      query
    )

    return NextResponse.json({

      success:true,

      destinations,

      totalPages:
      Math.ceil(total / limit)

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

    const body =
    await req.json()

    const destination =
    await Destination.create(body)

    return NextResponse.json({

      success:true,

      destination

    })

  }catch(error){

    return NextResponse.json({

      success:false,

      message:error.message

    })

  }

}

export async function DELETE(req){

  try{

    await connectDB()

    const {
      searchParams
    } = new URL(req.url)

    const id =
    searchParams.get('id')

    await Destination
    .findByIdAndDelete(id)

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