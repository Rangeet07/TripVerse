'use client'

import Link from 'next/link'

import {
  FaTachometerAlt,
  FaSuitcase,
  FaClipboardList,
  FaPlus,
  FaBars,
  FaTimes,
  FaMapMarkedAlt
} from 'react-icons/fa'

import { useState } from 'react'

import './AdminSidebar.css'

export default function AdminSidebar(){

  const [isOpen,setIsOpen] =
  useState(false)

  return (
    <>

      <div className="mobile-topbar">

        <h2>
          Travel<span>Go</span>
        </h2>

        <button
          onClick={()=>
            setIsOpen(!isOpen)
          }
        >

          {
            isOpen
            ?
            <FaTimes />
            :
            <FaBars />
          }

        </button>

      </div>

      <aside
        className={
          isOpen
          ?
          'admin-sidebar active'
          :
          'admin-sidebar'
        }
      >

        <h2 className="desktop-logo">

          Travel<span>Go</span>

        </h2>
        <nav>

          <Link href="/admin">
            <FaTachometerAlt />
            Dashboard
          </Link>

          <Link href="/admin/tours">
            <FaSuitcase />
            Tours
          </Link>

          <Link href="/admin/bookings">
            <FaClipboardList />
            Bookings
          </Link>

          <Link href="/admin/add-tour">
            <FaPlus />
            Add Tour
          </Link>

          <Link href="/admin/add-destination">
            <FaMapMarkedAlt />
            Add Destination
          </Link>

        </nav>

      </aside>

    </>
  )
}