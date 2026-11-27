
import Link from 'next/link';
import './BusTicketsSec.css';

const routes = [
  { city: 'Kolkata', detail: 'Travel to West Bengal’s capital', tag: 'Popular' },
  { city: 'Guwahati', detail: 'Connect to Assam’s largest city' },
  { city: 'Tezpur', detail: 'Journey to the city of eternal romance' },
  { city: 'Shillong', detail: 'Travel to the beautiful hill city' },
  { city: 'Shilapathar', detail: 'Bus connections to Upper Assam' },
  { city: 'Patna', detail: 'Travel to Bihar’s capital' },
  { city: 'Ranchi', detail: 'Connect to Jharkhand’s capital' },
  { city: 'Durgapur', detail: 'Travel to the industrial city' },
  { city: 'Asansol', detail: 'Bus connections to western Bengal' },
];

export default function BusTicketsSection() {
  return (
    <section className="bus-home-section">
      <div className="bus-home-container">
        <div className="bus-home-heading">
          <span className="bus-eyebrow">YOUR JOURNEY STARTS HERE</span>

          <h2>
            Daily Bus Tickets from <span>Siliguri</span>
          </h2>

          <p>
            Planning your next journey? Explore bus travel options from
            Siliguri to major cities across West Bengal, Assam, Meghalaya,
            Bihar, and Jharkhand.
          </p>
        </div>

        <div className="bus-route-grid">
          {routes.slice(0, 6).map((route) => (
            <article className="bus-route-card" key={route.city}>
              <div className="bus-route-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  width="25"
                  height="25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="3" width="16" height="15" rx="3" />
                  <path d="M4 11h16M8 7h.01M16 7h.01M8 14h.01M16 14h.01M7 21l2-3m8 3-2-3" />
                </svg>
              </div>

              <div className="bus-route-info">
                <span className="bus-route-origin">SILIGURI TO</span>
                <h3>{route.city}</h3>
                <p>{route.detail}</p>
              </div>

              {route.tag && (
                <span className="bus-route-tag">{route.tag}</span>
              )}
            </article>
          ))}
        </div>

        <div className="bus-home-bottom">
          <div>
            <h3>Travelling somewhere else?</h3>
            <p>
              Ask us about bus tickets to other destinations and available
              travel options.
            </p>
          </div>

          <Link href="/bus-tickets" className="bus-primary-btn">
            Explore Bus Routes <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
