import DeleteTourButton from "../DeleteTourButton"


async function getTours(){

  const res = await fetch(
    'http://localhost:3000/api/tours',
    {
      cache:'no-store'
    }
  )

  return res.json()
}

export default async function AdminToursPage(){

  const data = await getTours()

  const tours = data.tours || []

  return (
    <div>

      <div className="admin-page-header">

        <h1>All Tours</h1>

      </div>

      <div className="admin-tour-grid">

        {
          tours.map((tour)=>(

            <div
              key={tour._id}
              className="admin-tour-card"
            >

              <img
                src={tour.image}
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
                id={tour._id}
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