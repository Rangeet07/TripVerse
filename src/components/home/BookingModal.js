'use client'

import { useState } from 'react'

import { FaTimes } from 'react-icons/fa'

import Button from '../shared/Button'

import './BookingModal.css'

export default function BookingModal({
  isOpen,
  onClose,
  tour
}) {

const [formData,setFormData] = useState({
  name:'',
  email:'',
  phone:'',
  travelers:1,
  startDate:'',
  endDate:'',

  tourTitle:tour?.title || '',
  location:tour?.location || '',
  price:tour?.price || ''
})

  if(!isOpen) return null

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    console.log(formData)

    alert('Booking Submitted!')

    onClose()
  }

  return (
    <div className="modal-overlay">

      <div className="booking-modal">

        <div className="modal-header">

          <h2>Book Tour</h2>

          <FaTimes
            className="close-icon"
            onClick={onClose}
          />

        </div>

        <h3>{tour?.title}</h3>
        <div className="selected-tour-info">

            <p>
                <strong>Location:</strong> {tour?.location}
            </p>

            <p>
                <strong>Price:</strong> ${tour?.price}
            </p>
            

            </div>
            <div className="booking-summary">

                <h4>Booking Summary</h4>

                <div className="summary-row">
                    <span>Destination</span>
                    <span>{tour?.location}</span>
                </div>

                <div className="summary-row">
                    <span>Package</span>
                    <span>{tour?.title}</span>
                </div>

                <div className="summary-row">
                    <span>Price</span>
                    <span>${tour?.price}</span>
                </div>

                </div>

            

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Full Name"
            name="name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            name="phone"
            onChange={handleChange}
            required
          />
                <input
                type="date"
                name="startDate"
                onChange={handleChange}
                required
                />

                <input
                type="date"
                name="endDate"
                onChange={handleChange}
                required
                />
          <input
            type="number"
            placeholder="Travelers"
            name="travelers"
            min="1"
            onChange={handleChange}
            required
          />

          <Button
            text="Confirm Booking"
          />

        </form>

      </div>

    </div>
  )
}