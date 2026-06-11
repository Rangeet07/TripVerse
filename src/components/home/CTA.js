import './CTA.css'
import Button from '../shared/Button'
import Link from 'next/link'
export default function CTA() {

  return (
<section className="cta">

  <div className="cta-content">

    <span className="cta-badge">
      ✈️ Premium Travel Experiences
    </span>

    <h2>
      Ready For Your Next Adventure?
    </h2>

    <p>
      Discover handpicked destinations, exclusive
      travel experiences, and personalized journeys
      designed for modern explorers.
    </p>

    <div className="cta-actions">
      <Link href="/tours" >
      <Button text="Explore Tours" />
      </Link>
    </div>

    <div className="newsletter">

      <h3>
        Get Travel Inspiration & Deals
      </h3>

      <form className="newsletter-form">

        <input
          type="email"
          placeholder="Enter your email"
        />

        <button type="submit">
          Subscribe
        </button>

      </form>

    </div>

  </div>

</section>
  )
}