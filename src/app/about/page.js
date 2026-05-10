import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageBanner from '@/components/shared/PageBanner'

export default function AboutPage() {

  return (
    <main>

      <Navbar />

      <PageBanner
        title="About Us"
        subtitle="Learn more about our mission and passion for travel."
      />

      <section style={{padding:'80px 5%'}}>

        <div className="container">

          <p
            style={{
              lineHeight:'1.9',
              fontSize:'18px',
              color:'#555'
            }}
          >
            TravelGo is a modern travel platform dedicated
            to helping travelers discover amazing destinations
            and unforgettable experiences worldwide.
          </p>

        </div>

      </section>

      <Footer />

    </main>
  )
}