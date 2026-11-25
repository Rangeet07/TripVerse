
'use client'

import './Hero.css'
import Button from '../shared/Button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  FaMapMarkerAlt,
  FaSearch,
  FaHotel,
  FaSuitcaseRolling,
  FaPlane,
  FaCar,
  FaBus,
  FaArrowRight
} from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'

const services = [
  { label: 'Hotel Booking', icon: FaHotel },
  { label: 'Package Tours', icon: FaSuitcaseRolling },
  { label: 'Flight Tickets', icon: FaPlane },
  { label: 'Car Rental', icon: FaCar },
  { label: 'Bus Tickets', icon: FaBus }
]

export default function Hero() {
  const router = useRouter()

  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const searchRef = useRef(null)

  useEffect(() => {
    const handleOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setShowResults(false)
      }
    }

    document.addEventListener('mousedown', handleOutside)
    document.addEventListener('touchstart', handleOutside)

    return () => {
      document.removeEventListener('mousedown', handleOutside)
      document.removeEventListener('touchstart', handleOutside)
    }
  }, [])

  useEffect(() => {
    const fetchTours = async () => {
      if (!search.trim()) {
        setResults([])
        setLoading(false)
        return
      }

      setLoading(true)

      try {
        const response = await fetch(
          `/api/tours?search=${encodeURIComponent(search.trim())}`
        )

        if (!response.ok) {
          throw new Error('Unable to fetch tours')
        }

        const data = await response.json()
        setResults(data.tours || [])
      } catch (error) {
        console.error('Tour search failed:', error)
        setResults([])
      } finally {
        setLoading(false)
      }
    }

    const timer = setTimeout(fetchTours, 300)
    return () => clearTimeout(timer)
  }, [search])

  const handleSearch = (event) => {
    event.preventDefault()

    if (!search.trim()) {
      router.push('/tours')
      return
    }

    setShowResults(false)
    router.push(`/tours?search=${encodeURIComponent(search.trim())}`)
  }

  return (
    <>
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">

            <div className="hero-badge">
              <FaMapMarkerAlt />
              <span>Your Journey Starts Here</span>
            </div>

            <h1>
              Your Complete
              <br />
              <span>Travel Partner</span>
            </h1>

            <p className="hero-description">
              From unforgettable holidays to hotel stays, flights,
              car rentals and bus tickets — plan your next journey
              with Hill Tourism.
            </p>

            <div className="hero-services">
              {services.map(({ label, icon: Icon }) => (
                <div className="hero-service" key={label}>
                  <Icon aria-hidden="true" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <form className="hero-search-wrapper" ref={searchRef} onSubmit={handleSearch}>
              <div className="hero-search">
                <FaSearch className="hero-search-leading-icon" />

                <input
                  type="search"
                  aria-label="Search tours and destinations"
                  placeholder="Where would you like to go?"
                  value={search}
                  onFocus={() => setShowResults(true)}
                  onChange={(event) => {
                    setSearch(event.target.value)
                    setShowResults(true)
                  }}
                />

                <button className="search-btn" type="submit" aria-label="Search tours">
                  <FaSearch />
                  
                </button>
              </div>

              {showResults && search.trim() && (
                <div className="hero-search-results">
                  {loading && (
                    <div className="no-results">
                      <p>Finding your next adventure...</p>
                    </div>
                  )}

                  {!loading && results.length > 0 &&
                    results.map((tour) => (
                      <Link
                        key={tour._id}
                        href={`/tours/${tour._id}`}
                        className="hero-search-item"
                        onClick={() => {
                          setShowResults(false)
                          setSearch('')
                        }}
                      >
                        {tour.images?.[0] && (
                          <img src={tour.images[0]} alt={tour.title} />
                        )}

                        <div>
                          <h4>{tour.title}</h4>
                          <span>{tour.location}</span>
                        </div>

                        <FaArrowRight className="hero-result-arrow" />
                      </Link>
                    ))}

                  {!loading && results.length === 0 && (
                    <div className="no-results">
                      <p>No tours found. Try another destination.</p>
                    </div>
                  )}
                </div>
              )}
            </form>

            <div className="hero-buttons">
              <Link href="/tours" className="hero-primary-link">
                <Button text="Explore Packages" type='secondary'/>
              </Link>

              <Link href="/contact" className="hero-secondary-link">
                <span>Contact Us</span>
                <FaArrowRight />
              </Link>
            </div>

            <div className="hero-bus-route">
              <div className="hero-bus-icon">
                <FaBus />
              </div>

              <div className="hero-bus-copy">
                <strong>Daily Bus Tickets from Siliguri</strong>
                <span>
                  Kolkata · Guwahati · Tezpur · Shillong ·
                  Shilapathar · Patna · Ranchi · Durgapur · Asansol
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="hero-mini-stats" aria-label="Travel highlights">
        <span><strong>15K+</strong> Travelers</span>
        <span><strong>120+</strong> Tours</span>
        <span><strong>4.9</strong> Rating</span>
      </section>
    </>
  )
}
