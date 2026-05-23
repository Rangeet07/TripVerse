'use client'

import { useState } from 'react'

import BookingModal
from '../home/BookingModal'

export default function TourDetailsClient({
  tour
}){

  const [isOpen,setIsOpen]
  = useState(false)

  return (

    <>

      {/* DESKTOP BOOKING CARD */}

      <div className="tour-booking-card">

        <span className="booking-badge">
          Best Price Guaranteed
        </span>

        <h3>
          Book This Tour
        </h3>

        <h2>
          ${tour.price}
        </h2>

        <p>
          Per Person
        </p>

        <div className="booking-features">

          <div>
            ✓ Instant Confirmation
          </div>

          <div>
            ✓ Free Cancellation
          </div>

          <div>
            ✓ Secure Booking
          </div>

        </div>

        <button
          onClick={()=>
            setIsOpen(true)
          }
        >
          Book Now
        </button>

      </div>

      {/* MOBILE FIXED BAR */}

      <div className="mobile-booking-bar">

        <div className="mobile-booking-price">

          <h3>
            ${tour.price}
          </h3>

          <span>
            Per Person
          </span>

        </div>

        <button
          onClick={()=>
            setIsOpen(true)
          }
        >
          Book Now
        </button>

      </div>

      <BookingModal
        isOpen={isOpen}
        onClose={()=>
          setIsOpen(false)
        }
        tour={tour}
      />

    </>
  )
}