
'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  FaPlus,
  FaMinus,
  FaQuestionCircle,
  FaArrowRight
} from 'react-icons/fa'

import './FAQ.css'

const faqs = [
  {
    question: 'What travel services does Hill Tourism offer?',
    answer:
      'Hill Tourism offers tour packages, hotel bookings, flight tickets, car rentals and daily bus ticket booking services from Siliguri.'
  },
  {
    question: 'Which destinations can I book a tour to?',
    answer:
      'Browse our available tour packages to discover destinations. If you have a specific destination in mind, contact our team to enquire about suitable travel options.'
  },
  {
    question: 'Can I book bus tickets from Siliguri?',
    answer:
      'Yes. We offer daily bus ticket booking services for routes including Kolkata, Guwahati, Tezpur, Shillong, Shilapathar, Patna, Ranchi, Durgapur and Asansol. Contact us to confirm your route and travel date.'
  },
  {
    question: 'Can I book a hotel without purchasing a tour package?',
    answer:
      'Yes. You can contact us to enquire about hotel bookings separately from a tour package.'
  },
  {
    question: 'How do I book a tour package?',
    answer:
      'Visit our Tours page, choose your preferred package and click the Book button. Submit your details through the booking form to send your enquiry.'
  },
  {
    question: 'Can I book flight tickets and car rentals?',
    answer:
      'Yes. Contact our team with your travel dates, route or destination and requirements so we can help with your flight or car rental enquiry.'
  },
  {
    question: 'How can I confirm prices and availability?',
    answer:
      'Share your travel dates, destination and number of travellers with our team. We can help you confirm applicable prices and availability before you finalize your booking.'
  },
  {
    question: 'How can I contact Hill Tourism?',
    answer:
      'Call +91 99334 51775 or email hilltourismslg@gmail.com for assistance with travel enquiries and bookings.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="faq-section" id="faqs">
      <div className="faq-container">

        <div className="faq-heading">
          <span className="faq-eyebrow">
            <FaQuestionCircle />
            HELP &amp; SUPPORT
          </span>

          <h2>Frequently Asked Questions</h2>

          <p>
            Planning your next trip? Find answers to common
            questions about our travel services and bookings.
          </p>
        </div>

        <div className="faq-layout">

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index

              return (
                <div
                  className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="faq-question"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() =>
                      setOpenIndex(isOpen ? -1 : index)
                    }
                  >
                    <span>{faq.question}</span>

                    <span className="faq-toggle">
                      {isOpen ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      className="faq-answer"
                      id={`faq-answer-${index}`}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <aside className="faq-contact-card">
            <div className="faq-contact-icon">
              <FaQuestionCircle />
            </div>

            <h3>Need help planning your trip?</h3>

            <p>
              Tell us where you want to go, and our team can
              help you enquire about the available travel options.
            </p>

            <a
              href="tel:+919933451775"
              className="faq-contact-button"
            >
              Call Us
              <FaArrowRight />
            </a>

            <a
              href="mailto:hilltourismslg@gmail.com"
              className="faq-email-link"
            >
              Email Hill Tourism
            </a>

            <div className="faq-contact-divider" />

            <p className="faq-contact-small">
              Tours · Hotels · Flights · Cars · Bus Tickets
            </p>
          </aside>

        </div>

        <div className="faq-bottom-link">
          <span>Ready to explore?</span>
          <Link href="/tours">
            Browse Tour Packages
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </section>
  )
}
