// async function getDashboardData(){

import connectDB from "@/lib/mongodb"
import Booking from "@/models/Booking"
import Tour from "@/models/Tour"

//   const toursRes = await fetch(
//     'http://localhost:3000/api/tours',
//     {
//       cache:'no-store'
//     }
//   )

//   const bookingsRes = await fetch(
//     'http://localhost:3000/api/bookings',
//     {
//       cache:'no-store'
//     }
//   )

//   const toursData = await toursRes.json()
//   const bookingsData = await bookingsRes.json()

//   return {
//     tours:toursData.tours || [],
//     bookings:bookingsData.bookings || []
//   }
// }



export default async function AdminDashboard(){

  // const data = await getDashboardData()

  const tours =
  await Tour.find()

  const bookings =
  await Booking.find()

  return (
    <div>

      <h1
        style={{
          marginBottom:'30px'
        }}
      >
        Admin Dashboard
      </h1>

      <div className="dashboard-grid">

        <div className="dashboard-card">

          <h3>Total Tours</h3>

          <p>
            {tours.length}
          </p>

        </div>

        <div className="dashboard-card">

          <h3>Total Bookings</h3>

          <p>
            {bookings.length}
          </p>

        </div>

      </div>

      <div className="recent-bookings">

        <h2>
          Recent Bookings
        </h2>

        <div className="booking-list">

          {
            bookings
            .slice(0,5)
            .map((booking)=>(

              <div
                key={booking._id}
                className="recent-booking-card"
              >

                <h4>
                  {booking.customerName}
                </h4>

                <p>
                  {booking.tourTitle}
                </p>

              </div>

            ))
          }

        </div>

      </div>

    </div>
  )
}