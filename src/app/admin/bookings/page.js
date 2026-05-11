import DeleteBookingButton from "../DeleteBookingButton"
async function getBookings(){

  const res = await fetch(
    'http://localhost:3000/api/bookings',
    {
      cache:'no-store'
    }
  )

  return res.json()
}

export default async function AdminBookingsPage(){

  const data = await getBookings()

  const bookings = data.bookings || []

  return (
    <div>

      <div className="admin-page-header">

        <h1>
          Booking Management
        </h1>

      </div>

      <div className="bookings-grid">

        {
          bookings.map((booking)=>(

            <div
              key={booking._id}
              className="booking-card"
            >

              <div className="booking-top">

                <h3>
                  {booking.customerName}
                </h3>

                <span className="booking-status">
                  Confirmed
                </span>

              </div>

              <p>
                <strong>Tour:</strong>
                {' '}
                {booking.tourTitle}
              </p>

              <p>
                <strong>Location:</strong>
                {' '}
                {booking.location}
              </p>

              <p>
                <strong>Email:</strong>
                {' '}
                {booking.email}
              </p>

              <p>
                <strong>Phone:</strong>
                {' '}
                {booking.phone}
              </p>

              <p>
                <strong>Travelers:</strong>
                {' '}
                {booking.travelers}
              </p>

              <p>
                <strong>Dates:</strong>
                {' '}
                {booking.startDate}
                {' - '}
                {booking.endDate}
              </p>

              <h4>
                ${booking.price}
              </h4>

              <div
                style={{
                    marginTop:'20px'
                }}
                >

                <DeleteBookingButton
                    id={booking._id}
                />

                </div>

            </div>

          ))
        }

      </div>

    </div>
  )
}