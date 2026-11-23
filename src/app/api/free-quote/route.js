
import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import FreeQuote from '@/models/FreeQuote'

export const runtime = 'nodejs'

export async function POST(request) {
  try {
    let body

    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { message: 'Invalid request body.' },
        { status: 400 }
      )
    }

    const name = String(body.name || '').trim()
    const phone = String(body.phone || '').trim()
    const email = String(body.email || '').trim().toLowerCase()
    const destination = String(body.destination || '').trim()
    const message = String(body.message || '').trim()
    const rawTravelDate = body.travelDate || ''
    const travelers = Number(body.travelers ?? 2)

    if (!name || name.length > 100) {
      return NextResponse.json(
        { message: 'Please provide a valid name.' },
        { status: 400 }
      )
    }

    if (!/^[+()\d\s.-]{7,20}$/.test(phone)) {
      return NextResponse.json(
        { message: 'Please provide a valid phone number.' },
        { status: 400 }
      )
    }

    if (
      email.length > 254 ||
      (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    ) {
      return NextResponse.json(
        { message: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    if (!destination || destination.length > 150) {
      return NextResponse.json(
        { message: 'Please select or enter a valid destination.' },
        { status: 400 }
      )
    }

    if (
      !Number.isInteger(travelers) ||
      travelers < 1 ||
      travelers > 20
    ) {
      return NextResponse.json(
        { message: 'Travelers must be between 1 and 20.' },
        { status: 400 }
      )
    }

    if (message.length > 1500) {
      return NextResponse.json(
        { message: 'Your message is too long.' },
        { status: 400 }
      )
    }

    let travelDate = null

    if (rawTravelDate) {
      if (
        typeof rawTravelDate !== 'string' ||
        !/^\d{4}-\d{2}-\d{2}$/.test(rawTravelDate)
      ) {
        return NextResponse.json(
          { message: 'Please provide a valid travel date.' },
          { status: 400 }
        )
      }

      const parsedDate = new Date(`${rawTravelDate}T00:00:00.000Z`)

      if (
        Number.isNaN(parsedDate.getTime()) ||
        parsedDate.toISOString().slice(0, 10) !== rawTravelDate ||
        parsedDate.getTime() < Date.now() - 24 * 60 * 60 * 1000
      ) {
        return NextResponse.json(
          { message: 'Please choose a valid future travel date.' },
          { status: 400 }
        )
      }

      travelDate = parsedDate
    }

    await connectDB()

    const lead = await FreeQuote.create({
      name,
      phone,
      email,
      destination,
      travelers,
      travelDate,
      message
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Your free quote request has been received.',
        leadId: lead._id.toString()
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Free quote submission failed:', error)

    return NextResponse.json(
      { message: 'Unable to submit your request right now. Please try again.' },
      { status: 500 }
    )
  }
}
