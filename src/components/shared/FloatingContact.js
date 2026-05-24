'use client'

import './FloatingContact.css'

import {
  FaWhatsapp,
  FaPhoneAlt
} from 'react-icons/fa'

export default function FloatingContact(){

  return (

    <div className="floating-contact">

      <a
        href="https://wa.me/919999999999"
        target="_blank"
        className="whatsapp-btn"
      >
        <FaWhatsapp />
      </a>

      <a
        href="tel:+919999999999"
        className="call-btn"
      >
        <FaPhoneAlt />
      </a>

    </div>

  )

}