import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageBanner from '@/components/shared/PageBanner'

export default function DestinationsPage() {

  const destinations = [
    'Maldives',
    'Paris',
    'Bali',
    'Dubai',
    'Switzerland',
    'Tokyo'
  ]

  return (
    <main>

      <Navbar />

      <PageBanner
        title="Top Destinations"
        subtitle="Explore beautiful places around the world."
      />

      <section
        style={{
          padding:'80px 5%'
        }}
      >

        <div className="container">

          <div
            style={{
              display:'grid',
              gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',
              gap:'25px'
            }}
          >

            {
              destinations.map((place,index)=>(

                <div
                  key={index}
                  style={{
                    background:'white',
                    padding:'40px 20px',
                    borderRadius:'20px',
                    textAlign:'center',
                    boxShadow:'0 5px 20px rgba(0,0,0,0.06)'
                  }}
                >

                  <h3>{place}</h3>

                </div>

              ))
            }

          </div>

        </div>

      </section>

      <Footer />

    </main>
  )
}