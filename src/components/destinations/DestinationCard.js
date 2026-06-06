import Image from 'next/image'

import './DestinationCard.css'

export default function DestinationCard({
  destination
}){

  return (

    <div className="destination-card">

      <div className="destination-image-wrapper">

                  <Image
                    src={destination.images?.[0]}
                    alt={destination.name}
                    fill
                    className="destination-image"
                  />


      </div>

      <div className="destination-content">

        <h3>
          {destination.name}
        </h3>

        <p>
          {destination.description}
        </p>

      </div>

    </div>

  )

}