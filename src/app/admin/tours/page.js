export const dynamic = 'force-dynamic'

import connectDB from "@/lib/mongodb"
import DeleteTourButton from "../DeleteTourButton"
import Tour from "@/models/Tour"


// async function getTours(){

//   const res = await fetch(
//     'http://localhost:3000/api/tours',
//     {
//       cache:'no-store'
//     }
//   )

//   return res.json()
// }

export default async function AdminToursPage(){

  // const data = await getTours()

  // const tours = data.tours || []

  await connectDB()
 const toursRaw =
  await Tour.find()
  .select(
  'title location price images'
  )
  .lean()

  const tours =
  JSON.parse(
    JSON.stringify(toursRaw)
  )
  return (
    <div>

      <div className="admin-page-header">

        <h1>All Tours</h1>

      </div>

      <div className="admin-tour-grid">

        {
          tours.map((tour)=>(

            <div
              key={tour._id.toString()}
              className="admin-tour-card"
            >

              <img
                src={tour.images?.[0]}
                alt={tour.title}
              />

              <div className="admin-tour-content">

                <h3>
                  {tour.title}
                </h3>

                <p>
                  {tour.location}
                </p>

                <h4>
                  ${tour.price}
                </h4>

                <div className="tour-actions">
                <DeleteTourButton
                id={tour._id.toString()}
                />
                </div>

              </div>

            </div>

          ))
        }

      </div>

    </div>
  )
}