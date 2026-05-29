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
  await Tour.find()
  .sort({ createdAt:-1 })
  .limit(6)
  .lean()
  const tours =
  JSON.parse(
    JSON.stringify(toursRaw)
  )

  return (
    <section className="featured">

      <div className="container">

          <div className="featured-header">

            <span className="featured-subtag">
              Premium Experiences
            </span>

            <h2>
              Discover Our Most
              Popular Adventures
            </h2>

            <p className="section-subtitle">
              Carefully curated journeys designed for
              travelers seeking unforgettable moments,
              breathtaking landscapes, and premium comfort.
            </p>

          </div>
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