import './Hero.css'

import Button
from '../shared/Button'

import Link
from 'next/link'

import {
  FaMapMarkerAlt
}
from 'react-icons/fa'

export default function Hero(){

  return (

    <section className="hero">

      <div className="hero-overlay">

        <div className="hero-content">

          <div className="hero-badge">

            <FaMapMarkerAlt />

            <span>
              Explore Dream Destinations
            </span>

          </div>

          <h1>

            Discover The World's
            Most Beautiful
            Places

          </h1>

          <p>

            Experience unforgettable journeys,
            curated tours, and luxury travel
            adventures crafted for modern explorers.

          </p>

          <div className="hero-buttons">

            <Link href="/tours">

              <Button
                text="Explore Tours"
              />

            </Link>

            <Link href="/about">

              <Button
                text="Learn More"
                type="secondary"
              />

            </Link>

          </div>

        </div>

      </div>

    </section>

  )

}