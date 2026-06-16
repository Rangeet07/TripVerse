'use client'

import { useEffect, useState } from 'react'

import {
  FaBars,
  FaTimes
} from 'react-icons/fa'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './Navbar.css'

export default function Navbar() {

  const [menuOpen,setMenuOpen]
  = useState(false)
  const [scrolled,setScrolled]
  = useState(false)
  const pathname = usePathname()
  useEffect(()=>{

    const handleScroll = ()=>{

      setScrolled(
        window.scrollY > 30
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
          <div className="topbar">

        <span>
          📞 +91 9876543210
        </span>

        <span>
          ✉ info@travelgo.com
        </span>

      </div>
    <nav
        className={
          scrolled
          ? 'navbar navbar-scrolled'
          : 'navbar'
        }
      >

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
              <Link
                href="/"
                className={
                  pathname === '/'
                    ? 'nav-active'
                    : ''
                }
              >
                Home
              </Link>
          </li>

          <li>
            <Link
              href="/tours"
              className={
                pathname.startsWith('/tours')
                  ? 'nav-active'
                  : ''
              }
            >
              Tours
            </Link>
          </li>

          <li>
            <Link
              href="/destinations"
              className={
                pathname.startsWith('/destinations')
                  ? 'nav-active'
                  : ''
              }
            >
              Destinations
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className={
                pathname === '/about'
                  ? 'nav-active'
                  : ''
              }
            >
              About
            </Link>
          </li>

          <li>
          <Link
            href="/contact"
            className={
              pathname === '/contact'
                ? 'nav-active'
                : ''
            }
          >
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

      <div className="mobile-header">

        <h2>
          Travel<span>Go</span>
        </h2>

        <p>
          Explore the world
        </p>

      </div>

          <Link
          href="/"
          className={
            pathname === '/'
              ? 'mobile-active'
              : ''
          }
          onClick={()=>setMenuOpen(false)}
        >
          Home
        </Link>

        <Link
          href="/tours"
          className={
            pathname.startsWith('/tours')
              ? 'mobile-active'
              : ''
          }
          onClick={()=>setMenuOpen(false)}
        >
          Tours
        </Link>

        <Link
          href="/destinationss"
          className={
            pathname.startsWith('/destinations')
              ? 'mobile-active'
              : ''
          }
          onClick={()=>setMenuOpen(false)}
        >
          Destinations
        </Link>

          <Link
            href="/about"
            className={
              pathname === '/about'
                ? 'mobile-active'
                : ''
            }
            onClick={()=>setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={
              pathname === '/contact'
                ? 'mobile-active'
                : ''
            }
            onClick={()=>setMenuOpen(false)}
          >
            Tours
          </Link>

      <button className="mobile-login-btn">
        Login
      </button>

    </aside>

    </>

  )
}