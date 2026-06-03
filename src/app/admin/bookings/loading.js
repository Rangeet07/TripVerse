import './styles.css'

export default function Loading(){

  return(

    <div>

      <div className="admin-page-header">

        <div
          className="booking-skeleton booking-skeleton-title"
        />

      </div>

      <div className="bookings-grid">

        {[1,2,3,4,5,6].map(item=>(

          <div
            key={item}
            className="booking-card-skeleton"
          >

            <div
              className="booking-skeleton booking-skeleton-title"
            />

            <div className="booking-skeleton" />
            <div className="booking-skeleton" />
            <div className="booking-skeleton" />
            <div className="booking-skeleton" />

            <div
              className="booking-skeleton booking-skeleton-price"
            />

          </div>

        ))}

      </div>

    </div>

  )

}