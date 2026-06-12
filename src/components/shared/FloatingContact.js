'use client'

import './FloatingContact.css'

import {
  FaWhatsapp,
  FaPhoneAlt,  
  FaArrowUp,
  FaArrowDown
} from 'react-icons/fa'

export default function FloatingContact(){

  return (
    <>
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
    <div className="page-nav">

  <button
    onClick={()=>
      window.scrollTo({
        top:0,
        behavior:'smooth'
      })
    }
  >
    <FaArrowUp />
  </button>

  <button
    onClick={()=>
      window.scrollTo({
        top:
        document.body.scrollHeight,
        behavior:'smooth'
      })
    }
  >
    <FaArrowDown />
  </button>

</div>
    </>

  )

}