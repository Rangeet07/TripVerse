'use client'
export const dynamic = 'force-dynamic'
import { useEffect }
from 'react'

import { useState }
from 'react'

import Navbar
from '@/components/layout/Navbar'

import Footer
from '@/components/layout/Footer'

import PageBanner
from '@/components/shared/PageBanner'

import DestinationCard
from '@/components/destinations/DestinationCard'

import './destinations.css'

export default function DestinationsPage(){

  const [
    destinations,
    setDestinations
  ] = useState([])

  useEffect(()=>{

    fetchDestinations()

  },[])

  const fetchDestinations =
  async()=>{

    const res =
    await fetch(
      '/api/destinations'
    )

    const data =
    await res.json()

    setDestinations(
      data.destinations
    )

  }

  return (

    <main>

      <Navbar />

      <PageBanner
        title="Top Destinations"
        subtitle="Explore breathtaking travel destinations around the world."
      />

      <section
        className="destinations-section"
      >

        <div className="container">

          <div
            className="destinations-grid"
          >

            {

              destinations.map(
                (destination,index)=>(

                <DestinationCard
                  key={index}
                  destination={
                    destination
                  }
                />

              ))

            }

          </div>

        </div>

      </section>

      <Footer />

    </main>

  )

}