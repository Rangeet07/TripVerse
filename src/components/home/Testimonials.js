import {
  FaStar,
  FaQuoteLeft
} from 'react-icons/fa'

import './Testimonials.css'

export default function Testimonials() {

  const reviews = [
    {
      name:'Rahul Sharma',
      text:'Amazing experience! The booking process was smooth and the trip was unforgettable.',
    },

    {
      name:'Emily Johnson',
      text:'Everything was perfectly organized. Highly recommended for travel lovers.',
    },

    {
      name:'Aarav Das',
      text:'Beautiful destinations and premium service. Definitely booking again.',
    }
  ]

  return (
    <section className="testimonials">

      <div className="container">

        <h2 className="section-title">
          What Travelers Say
        </h2>

        <p className="section-subtitle">
          Hear from our happy travelers who explored
          incredible destinations with us.
        </p>

        <div className="testimonial-grid">

          {
            reviews.map((review,index)=>(

              <div
                className="testimonial-card"
                key={index}
              >

                <FaQuoteLeft className="quote-icon" />

                <p>
                  {review.text}
                </p>

                <div className="stars">

                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                </div>

                <h4>{review.name}</h4>

              </div>

            ))
          }

        </div>

      </div>

    </section>
  )
}