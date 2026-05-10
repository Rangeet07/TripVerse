'use client'

import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import './Navbar.css'

export default function Navbar() {

  const [menuOpen,setMenuOpen] = useState(false)

  return (
    <nav className="navbar">

      <h2 className="logo">
        Travel<span>Go</span>
      </h2>

      <ul className={menuOpen ? 'nav-links active' : 'nav-links'}>

  <li>
    <Link href="/">
      Home
    </Link>
  </li>

  <li>
    <Link href="/tours">
      Tours
    </Link>
  </li>

  <li>
    <Link href="/destinations">
      Destinations
    </Link>
  </li>

  <li>
    <Link href="/about">
      About
    </Link>
  </li>

  <li>
    <Link href="/contact">
      Contact
    </Link>
  </li>

  <li>
    <button className="nav-btn">
      Login
    </button>
  </li>

</ul>
      <div
        className="menu-icon"
        onClick={()=>setMenuOpen(!menuOpen)}
      >
        {
          menuOpen ? <FaTimes /> : <FaBars />
        }
      </div>

    </nav>
  )
}