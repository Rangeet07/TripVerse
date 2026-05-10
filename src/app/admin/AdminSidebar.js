'use client'

import Link from 'next/link'

import {
  FaTachometerAlt,
  FaSuitcase,
  FaClipboardList,
  FaPlus
} from 'react-icons/fa'

import './AdminSidebar.css'

export default function AdminSidebar(){

  return (
    <aside className="admin-sidebar">

      <h2>
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

      </nav>

    </aside>
  )
}