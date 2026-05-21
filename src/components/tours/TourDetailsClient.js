'use client'

import { useState } from 'react'
import BookingModal from '../home/BookingModal'
import WeatherCard from '../weather/WeatherCard'


export default function TourDetailsClient({
  tour
}){

  const [isOpen,setIsOpen]
  = useState(false)

  return (

    <>


      <div className="tour-booking-card">

        <h3>
          Book This Tour
        </h3>

        <h2>
          ${tour.price}
        </h2>

        <p>
          Per Person
        </p>

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