'use client'

import { useState, useRef, useEffect } from 'react'
import { FaSearch, FaCalendarAlt, FaUsers } from 'react-icons/fa'
import Link from 'next/link'
import destinations from '@/data/destinations'
import './SearchBar.css'

export default function SearchBar() {
  const [destination, setDestination] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [travelers, setTravelers] = useState('1')
  const suggestionsRef = useRef(null)

  useEffect(() => {
    if (destination.trim()) {
      const filtered = destinations.filter(dest =>
        dest.name.toLowerCase().includes(destination.toLowerCase())
      )
      setSuggestions(filtered)
      setShowSuggestions(true)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [destination])

  useEffect(() => {
    function handleClickOutside(event) {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSuggestionClick = (destName) => {
    setDestination(destName)
    setShowSuggestions(false)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (!destination.trim()) return

    const queryParams = new URLSearchParams({
      destination: destination,
      ...(checkIn && { checkIn }),
      ...(checkOut && { checkOut }),
      ...(travelers && { travelers })
    })

    window.location.href = `/tours?${queryParams.toString()}`
  }

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <div className="search-container">
        {/* Destination Input */}
        <div className="search-input-group destination-group" ref={suggestionsRef}>
          <div className="search-input-wrapper">
            <FaSearch className="input-icon" />
            <input
              type="text"
              placeholder="Where do you want to go?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onFocus={() => destination && setShowSuggestions(true)}
              className="search-input"
            />
          </div>

          {/* Suggestions Dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="suggestions-dropdown">
              {suggestions.map((dest) => (
                <div
                  key={dest.id}
                  className="suggestion-item"
                  onClick={() => handleSuggestionClick(dest.name)}
                >
                  <FaSearch className="suggestion-icon" />
                  <div className="suggestion-content">
                    <p className="suggestion-name">{dest.name}</p>
                    <p className="suggestion-desc">{dest.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {showSuggestions && destination && suggestions.length === 0 && (
            <div className="suggestions-dropdown empty">
              <p>No destinations found</p>
            </div>
          )}
        </div>

        {/* Check-in Date */}
        <div className="search-input-group">
          <div className="search-input-wrapper">
            <FaCalendarAlt className="input-icon" />
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="search-input"
              placeholder="Check-in"
            />
          </div>
        </div>

        {/* Check-out Date */}
        <div className="search-input-group">
          <div className="search-input-wrapper">
            <FaCalendarAlt className="input-icon" />
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="search-input"
              placeholder="Check-out"
            />
          </div>
        </div>

        {/* Travelers */}
        <div className="search-input-group">
          <div className="search-input-wrapper">
            <FaUsers className="input-icon" />
            <select
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
              className="search-input"
            >
              <option value="1">1 Traveler</option>
              <option value="2">2 Travelers</option>
              <option value="3">3 Travelers</option>
              <option value="4">4 Travelers</option>
              <option value="5+">5+ Travelers</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <button type="submit" className="search-btn">
          <FaSearch />
          <span>Search</span>
        </button>
      </div>

      {/* Quick Suggestions */}
      <div className="quick-suggestions">
        <span className="quick-label">Popular:</span>
        {destinations.slice(0, 4).map((dest) => (
          <button
            key={dest.id}
            type="button"
            className="quick-tag"
            onClick={() => {
              setDestination(dest.name)
              setShowSuggestions(false)
            }}
          >
            {dest.name}
          </button>
        ))}
      </div>
    </form>
  )
}