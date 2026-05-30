import Link from 'next/link'
import Image from 'next/image'

import './HomeDestinations.css'

export default function HomeDestinations({
  destinations
}){

  return(

    <section className="home-destinations">

      <div className="container">

        <div className="home-destinations-header">

          <span className="destination-tag">
            Popular Destinations
          </span>

          <h2>
            Explore The World's
            Most Beautiful Places
          </h2>

          <p>
            Discover breathtaking destinations
            handpicked for unforgettable journeys.
          </p>

        </div>

        <div className="destination-showcase">

          {
            destinations
            .slice(0,4)
            .map(destination =>(

              <Link
                href="/destinations"
                key={destination._id}
                className="showcase-card"
              >

                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="showcase-image"
                />

                <div className="showcase-overlay">

                  <h3>
                    {destination.name}
                  </h3>

                </div>

              </Link>

            ))
          }

        </div>

        <div className="destination-btn-wrapper">

          <Link
            href="/destinations"
            className="view-destinations-btn"
          >
            View All Destinations
          </Link>

        </div>

      </div>

    </section>

  )

}