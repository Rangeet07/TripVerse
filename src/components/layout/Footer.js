
import Link from 'next/link'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaPaperPlane
} from 'react-icons/fa'

import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section footer-brand">

          <Link href="/" className="footer-logo">
            Hill<span>Tourism</span>
          </Link>

          <p className="footer-brand-description">
            Your trusted travel partner for tour packages,
            hotel bookings, flights, car rentals and bus tickets.
            Let us help make your next journey memorable.
          </p>

          <div className="footer-socials">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>

        </div>

        {/* Quick Links */}
        <div className="footer-section">

          <h3 className="footer-heading">Quick Links</h3>

          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/tours">Tour Packages</Link></li>
            <li><Link href="/destinations">Destinations</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>

        </div>

        {/* Services */}
        <div className="footer-section">

          <h3 className="footer-heading">Our Services</h3>

          <ul className="footer-links">
            <li><Link href="/contact">Hotel Booking</Link></li>
            <li><Link href="/tours">Package Tours</Link></li>
            <li><Link href="/contact">Flight Tickets</Link></li>
            <li><Link href="/contact">Car Rental</Link></li>
            <li><Link href="/contact">Bus Tickets</Link></li>
          </ul>

        </div>

        {/* Contact */}
        <div className="footer-section footer-contact">

          <h3 className="footer-heading">Get in Touch</h3>

          <p className="footer-contact-intro">
            Need help planning your next trip? Get in touch
            with our team.
          </p>

          <a
            href="tel:+919933451775"
            className="footer-contact-item"
          >
            <span className="footer-contact-icon">
              <FaPhoneAlt />
            </span>
            <span>+91 99334 51775</span>
          </a>

          <a
            href="mailto:hilltourismslg@gmail.com"
            className="footer-contact-item"
          >
            <span className="footer-contact-icon">
              <FaEnvelope />
            </span>
            <span>hilltourismslg@gmail.com</span>
          </a>

          <div className="footer-contact-item">
            <span className="footer-contact-icon">
              <FaMapMarkerAlt />
            </span>
            <span>Siliguri, West Bengal, India</span>
          </div>

          <Link href="/contact" className="footer-contact-cta">
            Contact Our Team <FaArrowRight />
          </Link>

        </div>

      </div>

      {/* Newsletter strip */}
      <div className="footer-newsletter-strip">
        <div className="footer-newsletter-copy">
          <span className="footer-newsletter-icon">
            <FaPaperPlane />
          </span>

          <div>
            <h3>Travel inspiration, delivered.</h3>
            <p>
              Stay connected for travel ideas and destination updates.
            </p>
          </div>
        </div>

        <Link href="/contact" className="footer-newsletter-link">
          Plan Your Trip <FaArrowRight />
        </Link>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Hill Tourism.
          All rights reserved.
        </p>

        <Link href="/tours" className="footer-bottom-link">
          Explore Tours <FaArrowRight />
        </Link>
      </div>

    </footer>
  )
}
