export const dynamic = 'force-dynamic'

import TourCard from '../cards/TourCard'
import './FeaturedTours.css'
import FadeUp from '../shared/FadeUp'
import connectDB from '@/lib/mongodb'
import Tour from '@/models/Tour'



// async function getTours(){

//   const res = await fetch(
//     'http://localhost:3000/api/tours',
//     {
//       cache:'no-store'
//     }
//   )

//   return res.json()
// }



export default async function FeaturedTours() {

  //   const data = await getTours()

  // const tours = data.tours || []

  
    await connectDB()
  
    const tours = await Tour.find()

  return (
    <section className="featured">

      <div className="container">

        <h2 className="section-title">
          Featured Tours
        </h2>

        <p className="section-subtitle">
          Explore our handpicked travel experiences
          designed for unforgettable adventures.
        </p>
        <FadeUp>

        <div className="tour-grid">

          {
            tours.map((tour,index)=>(
              <TourCard
                key={index}
                title={tour.title}
                image={tour.image}
                price={tour.price}
                location={tour.location}
              />
            ))
          }

        </div>
        </FadeUp>

      </div>

    </section>
  )
}