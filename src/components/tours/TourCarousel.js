'use client'
export const dynamic = 'force-dynamic'
import Image from 'next/image'

import {
  Swiper,
  SwiperSlide
}
from 'swiper/react'

import {
  Navigation,
  Pagination,
  Autoplay
}
from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { FaMapMarkerAlt } from 'react-icons/fa'
import './TourCarousel.css'

export default function TourCarousel({
  images,
  title,
  location
}){

  return (

    <div className="tour-carousel">

      {/* STATIC CONTENT */}

      <div className="carousel-static-overlay">

        <div className="carousel-content">

          <p>
            Explore Destination
          </p>

          <h1>
            {title}
          </h1>

            <div className="carousel-location">

            <FaMapMarkerAlt />

            <span>
                {location}
            </span>

            </div>

        </div>

      </div>

      {/* SWIPER */}

      <Swiper

        modules={[
          Navigation,
          Pagination,
          Autoplay
        ]}

        slidesPerView={1}

        navigation

        pagination={{
          clickable:true
        }}

        autoplay={{
          delay:4000
        }}

        loop

      >

        {
          images?.map(
            (image,index)=>(

            <SwiperSlide
              key={index}
            >

              <div
                className="
                carousel-image-wrapper
                "
              >

                <Image
                  src={image}
                  alt={title}
                  fill
                  priority
                  className="
                  carousel-image
                  "
                />

              </div>

            </SwiperSlide>

          ))
        }

      </Swiper>

    </div>

  )
}