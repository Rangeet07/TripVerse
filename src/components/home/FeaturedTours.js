import TourCard from '../cards/TourCard'
import './FeaturedTours.css'
import FadeUp from '../shared/FadeUp'
export default function FeaturedTours() {

  const tours = [
    {
      title:'Maldives Escape',
      image:'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200',
      price:1200,
      location:'Maldives'
    },

    {
      title:'Paris Adventure',
      image:'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200',
      price:1500,
      location:'France'
    },

    {
      title:'Bali Retreat',
      image:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200',
      price:900,
      location:'Indonesia'
    }
  ]

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