import './Hero.css'
import Button from '../shared/Button'

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

            <Button
              text="Explore Tours"
            />

            <Button
              text="Learn More"
              type="secondary"
            />

          </div>

        </div>

      </div>

    </section>
  )
}