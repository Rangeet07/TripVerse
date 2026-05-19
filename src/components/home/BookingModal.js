'use client'
export const dynamic = 'force-dynamic'

import { useState } from 'react'
import { useEffect } from 'react'

import { FaTimes } from 'react-icons/fa'

import Button from '../shared/Button'

import './BookingModal.css'
import { createPortal } from 'react-dom'

export default  function BookingModal({
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

  tourId:tour?._id,
  tourTitle:tour?.title || '',
  location:tour?.location || '',
  price:tour?.price || ''
})

useEffect(()=>{

  if(isOpen){
    document.body.style.overflow='hidden'
  }else{
    document.body.style.overflow='auto'
  }

  return ()=>{
    document.body.style.overflow='auto'
  }

},[isOpen])

  if(!isOpen) return null

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const  handleSubmit = async (e)=>{
    e.preventDefault()

        try{

          const bookingData = {
            tourId:tour?._id,

            customerName:formData.name,

            email:formData.email,

            phone:formData.phone,

            travelers:formData.travelers,

            startDate:formData.startDate,

            endDate:formData.endDate,

            tourTitle:tour?.title,

            location:tour?.location,

            price:tour?.price

          }

          const res = await fetch('/api/bookings',{

            method:'POST',

            headers:{
              'Content-Type':'application/json'
            },

            body:JSON.stringify(bookingData)

          })

          const data = await res.json()

          if(data.success){

            alert('Booking Submitted Successfully')

            onClose()

          }else{

            alert(data.message)

          }

        }catch(error){

          console.log(error)

        }
  }

  return createPortal (
            <div
        className="modal-overlay"
        onClick={onClose}
             >

            <div
            className="booking-modal"
            onClick={(e)=>e.stopPropagation()}
            >
        <div className="modal-header">

          <h2>Book Tour</h2>

          <FaTimes
            className="close-icon"
            onClick={onClose}
          />

        </div>

        <h3>{tour?.title}</h3>
        <div className="selected-tour-info">

           
            <div className="booking-summary">

                <h4>Booking Summary</h4>
                <div className="summary-row">
                <p>Destination</p>
                <strong>{tour?.location}</strong>
                </div>

                <div className="summary-row">
                    <p>Package</p>
                    <strong>{tour?.title}</strong>
                </div>

                <div className="summary-row">
                    <p>Price</p>
                    <strong>${tour?.price}</strong>
                </div>

                </div>

             </div>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            name="email"
             value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
                <div className="date-group">

                <label>
                    Starting Date
                </label>

                <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                />

                </div>

                <div className="date-group">

                <label>
                    Ending Date
                </label>

                <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                />

                </div>
          <input
            type="number"
            placeholder="Travelers"
            name="travelers"
            min="1"
            value={formData.travelers}
            onChange={handleChange}
            required
          />

          <Button
            text="Confirm Booking"
          />

        </form>

      </div>

    </div>,

    document.body
  )
}