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
import { usePathname } from 'next/navigation'


export default function AdminSidebar(){

  const [isOpen,setIsOpen] =
  useState(false)
const pathname = usePathname()
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

          <Link href="/admin" className={ pathname === '/admin' ? 'active' : ''}>
            <FaTachometerAlt />
            Dashboard
          </Link>

          <Link href="/admin/tours" className={ pathname === '/admin/tours' ? 'active' : ''}>
            <FaSuitcase />
            Tours
          </Link>

          <Link href="/admin/bookings" className={ pathname === '/admin/bookings' ? 'active' : ''}>
            <FaClipboardList />
            Bookings
          </Link>

          <Link href="/admin/add-tour" className={ pathname === '/admin/add-tour' ? 'active' : ''}>
            <FaPlus />
            Add Tour
          </Link>

          <Link href="/admin/add-destination" className={ pathname === '/admin/add-destination' ? 'active' : ''}>
            <FaMapMarkedAlt />
            Add Destination
          </Link>

        </nav>

      </aside>

    </>
  )
}