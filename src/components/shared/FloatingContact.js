'use client'

import { useEffect, useState } from 'react'
import './FloatingContact.css'

import {
  FaWhatsapp,
  FaPhoneAlt,
  FaArrowUp,
  FaArrowDown
} from 'react-icons/fa'

export default function FloatingContact() {

  const [isBottom,setIsBottom] =
  useState(false)

  useEffect(()=>{

    const handleScroll = ()=>{

      const scrollTop =
      window.scrollY

      const pageHeight =
      document.documentElement.scrollHeight

      const viewport =
      window.innerHeight

      setIsBottom(
        scrollTop + viewport >
        pageHeight - 300
      )

    }

    window.addEventListener(
      'scroll',
      handleScroll
    )

    return ()=>window.removeEventListener(
      'scroll',
      handleScroll
    )

  },[])

  const handlePageNav = ()=>{

    if(isBottom){

      window.scrollTo({
        top:0,
        behavior:'smooth'
      })

    }else{

      window.scrollTo({
        top:
        document.body.scrollHeight,
        behavior:'smooth'
      })

    }

  }

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

      <button
        className="page-nav-btn"
        onClick={handlePageNav}
      >

        {
          isBottom
          ? <FaArrowUp/>
          : <FaArrowDown/>
        }

      </button>

    </>

  )

}