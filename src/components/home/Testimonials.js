
import {
  FaGoogle,
  FaStar,
  FaMapMarkerAlt,
  FaExternalLinkAlt
} from 'react-icons/fa'

import './Testimonials.css'

export default function Testimonials() {

const mapsSearchUrl =
  'https://www.google.com/maps/place/Hill+Tourism/data=!4m2!3m1!1s0x0:0xd10630179847d8d6?hl=en-IN'

const mapEmbedUrl =
  'https://www.google.com/maps?cid=15061778881684429014&output=embed'


  return (
    <section className="testimonials google-reviews-section">
      <div className="container">

        <div className="google-reviews-heading">
          <span className="google-reviews-eyebrow">
            <FaGoogle />
            Find Us on Google
          </span>

          <h2 className="section-title">
            Travel with Confidence
          </h2>

          <p className="section-subtitle">
            Discover Hill Tourism on Google Maps, explore customer
            feedback and get directions to our business.
          </p>
        </div>

        <div className="google-reviews-layout">

          {/* Google reviews panel */}
          <div className="google-reviews-card">

            <div className="google-brand">
              <FaGoogle className="google-logo" />

              <div>
                <h3>Hill Tourism</h3>
                <span>Google Business Profile</span>
              </div>
            </div>

            <div className="google-review-divider" />

            <div className="google-review-message">
              <div className="google-review-icon">
                <FaStar />
              </div>

              <div>
                <h4>Real customer reviews</h4>
                <p>
                  Read feedback from travelers and learn about
                  their experiences with our travel services.
                </p>
              </div>
            </div>

            <div className="google-review-message">
              <div className="google-review-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h4>Find our location</h4>
                <p>
                  Open Google Maps to find our business,
                  check directions and plan your visit.
                </p>
              </div>
            </div>

            <a
              href={mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="google-review-button"
            >
              <FaGoogle />
              View on Google Maps
              <FaExternalLinkAlt />
            </a>

            <p className="google-review-note">
              Opens Google Maps in a new tab.
            </p>

          </div>

          {/* Google Maps embed */}
          <div className="google-map-card">

            <div className="google-map-header">
              <div>
                <h3>Visit Hill Tourism</h3>
                <p>
                  <FaMapMarkerAlt />
                  Siliguri, West Bengal
                </p>
              </div>

              <a
                href={mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Hill Tourism in Google Maps"
                className="google-map-external"
              >
                <FaExternalLinkAlt />
              </a>
            </div>

            <div className="google-map-frame">
              <iframe
                src={mapEmbedUrl}
                title="Find Hill Tourism on Google Maps"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <a
              href={mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="google-map-directions"
            >
              <FaMapMarkerAlt />
              Find us on Google Maps
              <FaExternalLinkAlt />
            </a>

          </div>

        </div>
      </div>
    </section>
  )
}
