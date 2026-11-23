
'use client'

import { useEffect, useState } from 'react'
import { FaTimes, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa'
import './FreeQuotePopup.css'

export default function FreeQuotePopup({ destinations = [] }) {
  const [isOpen, setIsOpen] = useState(false)
  const [destination, setDestination] = useState('')
  const [customDestination, setCustomDestination] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    travelers: '2',
    travelDate: '',
    message: ''
  })

  useEffect(() => {
    const key = 'travelgo-free-quote-seen'

    try {
      if (sessionStorage.getItem(key)) return
    } catch {
      return
    }

    const timer = setTimeout(() => {
      try {
        sessionStorage.setItem(key, '1')
        setIsOpen(true)
      } catch {
        // If session storage is unavailable, don't block browsing.
      }
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && status !== 'submitting') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, status])

  const closePopup = () => {
    if (status !== 'submitting') setIsOpen(false)
  }

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((previous) => ({ ...previous, [name]: value }))
  }

  const selectedDestination =
    destination === '__custom__'
      ? customDestination.trim()
      : destination

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    if (!selectedDestination.trim()) {
      setError('Please select or enter your destination.')
      return
    }

    setStatus('submitting')

    try {
      const response = await fetch('/api/free-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          destination: selectedDestination
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Unable to submit your request.')
      }

      setStatus('success')
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
      setStatus('idle')
    }
  }

  if (!isOpen) return null

  const destinationNames = [
    ...new Set(
      destinations
        .map((item) =>
          typeof item === 'string' ? item : item?.name
        )
        .filter(Boolean)
    )
  ]

  return (
    <div
      className="quote-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closePopup()
      }}
    >
      <section
        className="quote-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-title"
      >
        <button
          type="button"
          className="quote-close"
          onClick={closePopup}
          aria-label="Close free quote form"
          disabled={status === 'submitting'}
        >
          <FaTimes />
        </button>

        <div className="quote-visual">
          <span className="quote-eyebrow">YOUR NEXT ADVENTURE</span>
          <h2>Let's plan a journey worth remembering.</h2>
          <p>Tell us a little about your trip. We'll help you plan it.</p>
          <span className="quote-free-label">100% FREE QUOTE</span>
        </div>

        <div className="quote-form-panel">
          {status === 'success' ? (
            <div className="quote-success" role="status">
              <FaCheckCircle />
              <h3>Request received!</h3>
              <p>
                Thank you for choosing TravelGo. Our team will review
                your travel enquiry and contact you.
              </p>
              <button
                type="button"
                className="quote-submit"
                onClick={() => setIsOpen(false)}
              >
                Continue exploring
              </button>
            </div>
          ) : (
            <>
              <span className="quote-kicker">
                <FaMapMarkerAlt /> PERSONALIZED TRAVEL
              </span>
              <h3 id="quote-title">Get your free quote</h3>
              <p className="quote-intro">
                Share your preferences and we'll help with the details.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="quote-field">
                  <label htmlFor="quote-name">Full name *</label>
                  <input
                    id="quote-name"
                    name="name"
                    value={form.name}
                    onChange={updateField}
                    placeholder="Your name"
                    autoComplete="name"
                    maxLength={100}
                    required
                  />
                </div>

                <div className="quote-grid">
                  <div className="quote-field">
                    <label htmlFor="quote-phone">Phone *</label>
                    <input
                      id="quote-phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={updateField}
                      placeholder="+91..."
                      autoComplete="tel"
                      maxLength={20}
                      required
                    />
                  </div>

                  <div className="quote-field">
                    <label htmlFor="quote-email">Email</label>
                    <input
                      id="quote-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={updateField}
                      placeholder="you@example.com"
                      autoComplete="email"
                      maxLength={254}
                    />
                  </div>
                </div>

                <div className="quote-field">
                  <label htmlFor="quote-destination">Destination *</label>
                  <select
                    id="quote-destination"
                    value={destination}
                    onChange={(event) => {
                      setDestination(event.target.value)
                      setCustomDestination('')
                    }}
                    required
                  >
                    <option value="">Choose a destination</option>
                    {destinationNames.map((name) => (
                      <option key={name} value={name}>{name}</option>
                    ))}
                    <option value="__custom__">Other / not listed</option>
                  </select>
                </div>

                {destination === '__custom__' && (
                  <div className="quote-field">
                    <label htmlFor="quote-custom-destination">
                      Your destination *
                    </label>
                    <input
                      id="quote-custom-destination"
                      value={customDestination}
                      onChange={(event) =>
                        setCustomDestination(event.target.value)
                      }
                      placeholder="Where would you like to go?"
                      maxLength={150}
                      required
                    />
                  </div>
                )}

                <div className="quote-grid">
                  <div className="quote-field">
                    <label htmlFor="quote-travelers">Travelers</label>
                    <select
                      id="quote-travelers"
                      name="travelers"
                      value={form.travelers}
                      onChange={updateField}
                    >
                      {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={String(n)}>
                          {n} {n === 1 ? 'traveler' : 'travelers'}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="quote-field">
                    <label htmlFor="quote-date">Travel date</label>
                    <input
                      id="quote-date"
                      name="travelDate"
                      type="date"
                      min={new Date().toLocaleDateString('en-CA')}
                      value={form.travelDate}
                      onChange={updateField}
                    />
                  </div>
                </div>

                <div className="quote-field">
                  <label htmlFor="quote-message">Trip preferences</label>
                  <textarea
                    id="quote-message"
                    name="message"
                    value={form.message}
                    onChange={updateField}
                    placeholder="Budget, duration, activities or anything else..."
                    maxLength={1500}
                    rows={2}
                  />
                </div>

                {error && <p className="quote-error" role="alert">{error}</p>}

                <button
                  type="submit"
                  className="quote-submit"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting'
                    ? 'Sending request...'
                    : 'Get My Free Quote →'}
                </button>

                <p className="quote-privacy">
                  By submitting, you agree that TravelGo may contact you
                  about this enquiry.
                </p>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
