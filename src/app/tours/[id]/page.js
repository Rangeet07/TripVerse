export const dynamic = 'force-dynamic'

import Image from 'next/image'

import connectDB from '@/lib/mongodb'

import Tour from '@/models/Tour'

import './tour-details.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import TourDetailsClient from '@/components/tours/TourDetailsClient'
import TourCarousel from '@/components/tours/TourCarousel'



async function getTour(id){

  await connectDB()

  const tour =
  await Tour.findById(id).lean()

  return JSON.parse(
    JSON.stringify(tour)
  )
}

export default async function TourDetailsPage({
  params
}){

  const resolvedParams =
  await params

  const tour =
  await getTour(
    resolvedParams.id
  )

  if(!tour){

    return (
      <h1>
        Tour Not Found
      </h1>
    )
  }

  return (
    <main>
      <Navbar />
    <div className="tour-details-page">



      <TourCarousel
        images={tour.images}
        title={tour.title}
        location={tour.location}
      />

      <section className="tour-details-content">

        <div className="container">

          <div className="tour-info-grid">

            <div className="tour-main-content">

              <div className="tour-meta">

                <span>
                  Duration:
                  {' '}
                  {tour.duration}
                </span>

                <span>
                  Price:
                  {' '}
                  ${tour.price}
                </span>

              </div>

              <div className="tour-description">

                <h2>
                  About This Tour
                </h2>

                <p>
                  {tour.description}
                </p>

              </div>

              <div className="tour-itinerary">

                <h2>
                  Tour Highlights
                </h2>

                <ul>

                  <li>
                    Luxury accommodations
                  </li>

                  <li>
                    Guided sightseeing
                  </li>

                  <li>
                    Adventure activities
                  </li>

                  <li>
                    Local cultural experience
                  </li>

                </ul>

              </div>

            </div>

<TourDetailsClient
  tour={tour}
/>

          </div>

        </div>

      </section>

    </div>
    <Footer />
    </main>
  )
}