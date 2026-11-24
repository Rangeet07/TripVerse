
import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import connectDB from '@/lib/mongodb'
import FreeQuote from '@/models/FreeQuote'

const allowedStatuses = [
  'new',
  'contacted',
  'quoted',
  'converted',
  'closed'
]

export async function PATCH(request, { params }) {
  try {
    const { id } = await params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: 'Invalid enquiry ID.' },
        { status: 400 }
      )
    }

    const body = await request.json()
    const status = body.status

    if (!allowedStatuses.includes(status)) {
      return NextResponse.json(
        { message: 'Invalid enquiry status.' },
        { status: 400 }
      )
    }

    await connectDB()

    const quote = await FreeQuote.findByIdAndUpdate(
      id,
      { $set: { status } },
      { new: true, runValidators: true }
    )

    if (!quote) {
      return NextResponse.json(
        { message: 'Enquiry not found.' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      status: quote.status
    })
  } catch (error) {
    console.error('Free quote status update failed:', error)

    return NextResponse.json(
      { message: 'Unable to update enquiry status.' },
      { status: 500 }
    )
  }
}
