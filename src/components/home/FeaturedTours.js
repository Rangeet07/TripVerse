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
  
   const toursRaw =
  await Tour.find().lean()

  const tours =
  JSON.parse(
    JSON.stringify(toursRaw)
  )

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
            tours.map((tour, _id)=> {
              console.log(tour._id);
              
              return (
            
              <TourCard
                key={tour._id}
                tour={tour}
                title={tour.title}
                image={tour.images?.[0]}
                price={tour.price}
                location={tour.location}
              />
            )
})
          }

        </div>
        </FadeUp>

      </div>

    </section>
  )
}