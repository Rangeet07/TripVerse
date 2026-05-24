'use client'

import { useEffect, useState } from 'react'

import {
  FaBars,
  FaTimes
} from 'react-icons/fa'

import Link from 'next/link'

import './Navbar.css'

export default function Navbar() {

  const [menuOpen,setMenuOpen]
  = useState(false)

  // LOCK BODY SCROLL

  useEffect(()=>{

    if(menuOpen){

      document.body.style.overflow =
      'hidden'

    }else{

      document.body.style.overflow =
      'auto'

    }

  },[menuOpen])

  return (

    <>

    <nav className="navbar">

      <div className="navbar-container">

        <Link
          href="/"
          className="logo"
        >
          Travel<span>Go</span>
        </Link>

        {/* DESKTOP LINKS */}

        <ul className="nav-links">

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

        </ul>

        <button className="nav-btn">
          Login
        </button>

        {/* MOBILE ICON */}

        <div
          className="menu-icon"
          onClick={()=>
            setMenuOpen(!menuOpen)
          }
        >

          {
            menuOpen
            ? <FaTimes />
            : <FaBars />
          }

        </div>

      </div>

    </nav>

    {/* OVERLAY */}

    <div
      className={
        menuOpen
        ? 'mobile-overlay active'
        : 'mobile-overlay'
      }
      onClick={()=>
        setMenuOpen(false)
      }
    />

    {/* SIDEBAR */}

    <aside
      className={
        menuOpen
        ? 'mobile-sidebar active'
        : 'mobile-sidebar'
      }
    >

      <Link
        href="/"
        onClick={()=>
          setMenuOpen(false)
        }
      >
        Home
      </Link>

      <Link
        href="/tours"
        onClick={()=>
          setMenuOpen(false)
        }
      >
        Tours
      </Link>

      <Link
        href="/destinations"
        onClick={()=>
          setMenuOpen(false)
        }
      >
        Destinations
      </Link>

      <Link
        href="/about"
        onClick={()=>
          setMenuOpen(false)
        }
      >
        About
      </Link>

      <Link
        href="/contact"
        onClick={()=>
          setMenuOpen(false)
        }
      >
        Contact
      </Link>

      <button className="mobile-login-btn">
        Login
      </button>

    </aside>

    </>

  )
}