'use client'

import Link from 'next/link'
import Image from 'next/image'

import {
  Swiper,
  SwiperSlide
} from 'swiper/react'

import {
  Navigation,
  Autoplay
} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

import './HomeDestinations.css'

export default function HomeDestinations({
  destinations
}){

const featured =
destinations?.[0] || null

const others =
destinations?.slice(1) || []

  return(

    <section className="home-destinations">

      <div className="container">

        <div className="destinations-header">

          <span>
            Popular Destinations
          </span>

          <h2>
            Where Will Your Next
            Adventure Take You?
          </h2>

        </div>

        {featured && (

          <Link
            href="/destinations"
            className="featured-destination"
          >

            <Image
              src={featured.images?.[0]}
              alt={featured.name}
              fill
              priority
              className="featured-image"
            />

            <div className="featured-overlay">

              <div>

                <span>
                  Featured Destination
                </span>

                <h3>
                  {featured.name}
                </h3>

                <p>
                  {featured.description}
                </p>

              </div>

              <div className="featured-tags">

                {featured.tags?.slice(0,3).map(tag=>(

                  <span key={tag}>
                    {tag}
                  </span>

                ))}

              </div>

            </div>

          </Link>

        )}

        <div className="more-destinations">

          <h3>
            Discover More Places
          </h3>
      {others.length > 0 && (
          <Swiper
            modules={[
              Navigation,
              Autoplay
            ]}
            navigation
            autoplay={{
              delay:3500
            }}
            loop
            spaceBetween={24}
            breakpoints={{
              0:{
                slidesPerView:1.2
              },
              768:{
                slidesPerView:2
              },
              1200:{
                slidesPerView:3
              }
            }}
          >

            {others.map(destination=>(

              <SwiperSlide
                key={destination._id}
              >

                <Link
                  href="/destinations"
                  className="destination-slide"
                >

                  <Image
                    src={destination.images?.[0]}
                    alt={destination.name}
                    fill
                    className="slide-image"
                  />

                  <div className="slide-overlay">

                    <h4>
                      {destination.name}
                    </h4>

                  </div>

                </Link>

              </SwiperSlide>

            ))}

          </Swiper>
      )}
        </div>

      </div>

    </section>

  )

}