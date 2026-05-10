import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa'

import './Footer.css'

export default function Footer() {

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">

          <h2>
            Travel<span>Go</span>
          </h2>

          <p>
            Explore the world's best destinations
            with premium travel experiences.
          </p>

          <div className="social-icons">

            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />

          </div>

        </div>

        <div className="footer-section">

          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Tours</li>
            <li>Destinations</li>
            <li>About</li>
          </ul>

        </div>

        <div className="footer-section">

          <h3>Contact</h3>

          <p>Email: info@travelgo.com</p>
          <p>Phone: +91 9876543210</p>
          <p>India</p>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 TravelGo. All rights reserved.
      </div>

    </footer>
  )
}