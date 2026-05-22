'use client'

import { useState } from 'react'

import Image from 'next/image'

import { FaMapMarkerAlt } from 'react-icons/fa'

import BookingModal from '../home/BookingModal'

import Button from '../shared/Button'

import './TourCard.css'

import Link from 'next/link'

export default function TourCard({
  tour,
  title,
  image,
  price,
  location
}) {

  const [openModal,setOpenModal] = useState(false)

  return (
    <>

      <Link
        href={`/tours/${tour._id}`}
        className="tour-card-link"
      >

        <div className="tour-card">

          <div className="tour-image">

            <Image
              src={image}
              alt={title}
              fill
              quality={75}
              sizes="
              (max-width:768px) 100vw,
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

              <div
                onClick={(e)=>{
                  e.preventDefault()
                  e.stopPropagation()

                  setOpenModal(true)
                }}
              >

                <Button text="Book" />

              </div>

            </div>

          </div>

        </div>

      </Link>

      <BookingModal
        isOpen={openModal}
        onClose={()=>setOpenModal(false)}
        tour={tour}
      />

    </>
  )
}