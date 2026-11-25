
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa'

import BookingModal from '../home/BookingModal'
import Button from '../shared/Button'
import './TourCard.css'

export default function TourCard({
  tour,
  title,
  image,
  price,
  location
}) {
  const [openModal, setOpenModal] = useState(false)

  const handleBook = (event) => {
    event.preventDefault()
    event.stopPropagation()
    setOpenModal(true)
  }

  return (
    <>
      <Link
        href={`/tours/${tour._id}`}
        className="tour-card-link"
        aria-label={`View ${title} tour`}
      >
        <article className="tour-card">

          <div className="tour-image">
            <Image
              src={image}
              alt={title}
              fill
              quality={75}
              sizes="
                (max-width: 600px) 100vw,
                (max-width: 1024px) 50vw,
                33vw
              "
            />

            <span className="tour-image-label">
              TRAVEL PACKAGE
            </span>

            <span className="tour-image-arrow" aria-hidden="true">
              <FaArrowRight />
            </span>
          </div>

          <div className="tour-content">

            <div className="tour-location">
              <FaMapMarkerAlt aria-hidden="true" />
              <span>{location}</span>
            </div>

            <h3>{title}</h3>

            <p className="tour-description">
              Discover this destination with Hill Tourism.
            </p>

            <div className="tour-divider" />

            <div className="tour-footer">

              <div className="tour-price">
                <span className="tour-price-label">Starting From</span>
                <h4>₹{price}</h4>
              </div>

              <div
                className="tour-book-action"
                onClick={handleBook}
              >
                <Button text="Book Now" />
              </div>

            </div>
          </div>

        </article>
      </Link>

      <BookingModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        tour={tour}
      />
    </>
  )
}
