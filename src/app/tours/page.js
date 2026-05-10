import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageBanner from '@/components/shared/PageBanner'
import FeaturedTours from '@/components/home/FeaturedTours'

export default function ToursPage() {

  return (
    <main>

      <Navbar />

      <PageBanner
        title="Explore Tours"
        subtitle="Discover unforgettable travel experiences across the globe."
      />

      <FeaturedTours />

      <Footer />

    </main>
  )
}