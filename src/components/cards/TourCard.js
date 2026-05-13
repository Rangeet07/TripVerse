'use client'

import { useState } from 'react'

import Image from 'next/image'

import { FaMapMarkerAlt } from 'react-icons/fa'

import BookingModal from '../home/BookingModal'

import Button from '../shared/Button'

import './TourCard.css'
import Link from 'next/link'

export default function TourCard({
  title,
  image,
  price,
  location
}) {

  const [openModal,setOpenModal] = useState(false)

const tour = {
  title,
  image,
  price,
  location,
  id:crypto.randomUUID()
}
  return (
    <>


      <div className="tour-card">

        <div className="tour-image">

          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width:768px) 100vw,
            (max-width:1200px) 50vw,
            33vw"
          />

        </div>


        <div className="tour-content">

          <div className="tour-location">

            <FaMapMarkerAlt />

            <span>{location}</span>

          </div>

          <h3>{title}</h3>

          <div className="tour-footer">

            <h4>${price}</h4>

            <Button
              text="Book"
              onClick={()=>setOpenModal(true)}
            />

          </div>

        </div>

      </div>

      <BookingModal
        isOpen={openModal}
        onClose={()=>setOpenModal(false)}
        tour={tour}
      />
    </>
  )
}