export const dynamic = 'force-dynamic'

import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/home/Hero'
import FeaturedTours from '@/components/home/FeaturedTours'
import Testimonials from '@/components/home/Testimonials'
import CTA from '@/components/home/CTA'
import Footer from '@/components/layout/Footer'
import FloatingContact from '@/components/shared/FloatingContact'
import HomeDestinations from '@/components/home/HomeDestinations'

import connectDB from '@/lib/mongodb'
import Destination from '@/models/Destination'

async function getDestinations(){

  await connectDB()

  const destinationsRaw =
  await Destination.find({ featured:true})
  .limit(6)
  .sort({
    createdAt:-1
  })
  .lean()

  return JSON.parse(
    JSON.stringify(
      destinationsRaw
    )
  )

}

export default async function Home(){

  const destinations =
  await getDestinations()

  return (

    <main className="site-content">

      <Navbar />

      <Hero />

      <HomeDestinations
        destinations={destinations}
      />

      <FeaturedTours />

      <CTA />
      
      <Testimonials />

      <Footer />

      <FloatingContact />

    </main>

  )

}