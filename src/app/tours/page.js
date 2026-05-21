export const dynamic = 'force-dynamic'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageBanner from '@/components/shared/PageBanner'
import FeaturedTours from '@/components/home/FeaturedTours'
import ToursList from '@/components/tours/ToursList'

export default function ToursPage() {

  return (
    <main>

      <Navbar />

      <PageBanner
        title="Explore Tours"
        subtitle="Discover unforgettable travel experiences across the globe."
      />

      <section className="tours-wrapper">

        <ToursList />

      </section>

      <Footer />

    </main>
  )
}