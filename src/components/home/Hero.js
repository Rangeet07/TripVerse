import './Hero.css'
import Button from '../shared/Button'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero">

      <div className="overlay">

        <div className="hero-content">

          <h1>
            Discover The Beauty Of The World
          </h1>

          <p>
            Find amazing destinations, exclusive tours,
            and unforgettable travel experiences.
          </p>

          <div className="hero-buttons">

            <Link href="/tours">
              <Button text="Explore Tours" />
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