import './styles.css'

export default function Loading(){

  return(

    <div>

      <div className="admin-page-header">

        <div
          className="tour-skeleton tour-skeleton-title"
          style={{
            width:'200px'
          }}
        />

      </div>

      <div className="admin-tour-grid">

        {[1,2,3,4,5,6].map(item => (

          <div
            key={item}
            className="tour-card-skeleton"
          >

            <div
              className="tour-image-skeleton"
            />

            <div
              className="tour-content-skeleton"
            >

              <div
                className="tour-skeleton tour-skeleton-title"
              />

              <div
                className="tour-skeleton tour-skeleton-location"
              />

              <div
                className="tour-skeleton tour-skeleton-price"
              />

            </div>

          </div>

        ))}

      </div>

    </div>

  )

}