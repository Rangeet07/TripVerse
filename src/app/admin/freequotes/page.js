
export const dynamic = 'force-dynamic'

import connectDB from '@/lib/mongodb'
import FreeQuote from '@/models/FreeQuote'
import './FreeQuotes.css'

export default async function AdminFreeQuotesPage() {
  await connectDB()

  const quotes = await FreeQuote.find()
    .sort({ createdAt: -1 })
    .lean()

  const serializedQuotes = JSON.parse(
    JSON.stringify(quotes)
  )

  const formatDate = (date) => {
    if (!date) return 'Not specified'

    return new Date(date).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      timeZone: 'Asia/Kolkata'
    })
  }

  return (
    <div className="freequotes-page">

      <div className="admin-page-header">
        <div>
          <h1>Free Quote Management</h1>
          <p className="freequotes-subtitle">
            Manage customer enquiries and travel leads.
          </p>
        </div>

        <div className="freequotes-count">
          <span>{serializedQuotes.length}</span>
          <small>Total Enquiries</small>
        </div>
      </div>

      {serializedQuotes.length === 0 ? (
        <div className="freequotes-empty">
          <div className="freequotes-empty-icon">✈</div>

          <h2>No enquiries yet</h2>

          <p>
            Free quote requests will appear here when
            customers submit the enquiry form.
          </p>
        </div>
      ) : (
        <div className="freequotes-grid">
          {serializedQuotes.map((quote) => (
            <article
              key={quote._id}
              className="freequote-card"
            >
              <div className="freequote-top">
                <div className="freequote-customer">
                  <div className="freequote-avatar">
                    {quote.name?.charAt(0)?.toUpperCase() || '?'}
                  </div>

                  <div>
                    <h3>{quote.name}</h3>

                    <span className="freequote-date">
                      Received {formatDate(quote.createdAt)}
                    </span>
                  </div>
                </div>

                <span
                  className={`freequote-status status-${quote.status || 'new'}`}
                >
                  {(quote.status || 'new').replace(
                    /^./,
                    (letter) => letter.toUpperCase()
                  )}
                </span>
              </div>

              <div className="freequote-destination">
                <span className="freequote-label">
                  Requested Destination
                </span>

                <h4>
                  <span aria-hidden="true">📍</span>{' '}
                  {quote.destination}
                </h4>
              </div>

              <div className="freequote-details">
                <p>
                  <strong>Phone</strong>
                  <a href={`tel:${quote.phone}`}>
                    {quote.phone}
                  </a>
                </p>

                <p>
                  <strong>Email</strong>

                  {quote.email ? (
                    <a href={`mailto:${quote.email}`}>
                      {quote.email}
                    </a>
                  ) : (
                    <span>Not provided</span>
                  )}
                </p>

                <p>
                  <strong>Travellers</strong>
                  <span>
                    {quote.travelers || 2}
                    {' '}
                    {(quote.travelers || 2) === 1
                      ? 'person'
                      : 'people'}
                  </span>
                </p>

                <p>
                  <strong>Travel Date</strong>
                  <span>{formatDate(quote.travelDate)}</span>
                </p>
              </div>

              {quote.message && (
                <div className="freequote-message">
                  <strong>Customer Message</strong>
                  <p>{quote.message}</p>
                </div>
              )}

              <div className="freequote-footer">
                <span>
                  Enquiry ID: {quote._id.slice(-8)}
                </span>

                <a
                  className="freequote-contact"
                  href={`https://wa.me/${quote.phone.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Customer ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
