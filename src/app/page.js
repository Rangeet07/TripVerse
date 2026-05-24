export const dynamic = 'force-dynamic'


import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/home/Hero'
import FeaturedTours from '@/components/home/FeaturedTours'
import Testimonials from '@/components/home/Testimonials'
import CTA from '@/components/home/CTA'
import Footer from '@/components/layout/Footer'
import FloatingContact from '@/components/shared/FloatingContact'

export default function Home() {

  return (
    <main>

      <Navbar />

      <Hero />

      <FeaturedTours />

      <Testimonials />

      <CTA />

      <Footer />

      <FloatingContact/>

    </main>
  )
}