'use client'

import './Hero.css'
import Button from '../shared/Button'
import Link from 'next/link'
import {
  FaMapMarkerAlt,
  FaSearch
} from 'react-icons/fa'

import {
  useEffect,
  useRef,
  useState
} from 'react'

export default function Hero(){
const [search,setSearch]
= useState('')

const [results,setResults]
= useState([])
const [loading,setLoading]
= useState(false)

const [showResults,setShowResults]
= useState(false)

const searchRef = useRef(null)
 
useEffect(()=>{

  const handleOutside = (e)=>{

    if(
      searchRef.current &&
      !searchRef.current.contains(e.target)
    ){
      setShowResults(false)
    }

  }

  document.addEventListener(
    'mousedown',
    handleOutside
  )

  return ()=>{

    document.removeEventListener(
      'mousedown',
      handleOutside
    )

  }

},[])

useEffect(()=>{

  const fetchTours =
  async ()=>{

    if(!search.trim()){

      setResults([])
      setLoading(false)
      return
    }

    setLoading(true)

    try{

      const res =
      await fetch(
        `/api/tours?search=${search}`
      )

      const data =
      await res.json()

      setResults(data.tours || [])
   

    }catch(error){
      console.log(error)

    }finally{

    setLoading(false)

    }

  }

  const timer =
  setTimeout(fetchTours,300)

  return ()=>clearTimeout(timer)

},[search])





  return (

    <section className="hero">

      <div className="hero-overlay">

        <div className="hero-content">
            <div className="hero-badge">

              <FaMapMarkerAlt />

              <span>
                Explore Dream Destinations
              </span>

            </div>

            <h1>

              Luxury Travel
              Experiences For
              Modern Explorers

            </h1>

            <p>

              Discover curated journeys,
              breathtaking destinations,
              and unforgettable adventures
              across the globe.

            </p>

            {/* SEARCH */}

            <div className="hero-search-wrapper" ref={searchRef}> 

              <div className="hero-search">

                <FaSearch className="hero-search-icon" />

                <input
                  type="text"
                  placeholder="Search tours or destinations..."
                  value={search}
                  onChange={(e)=>{

                    setSearch(e.target.value)
                    setShowResults(true)

                  }}
                />

              </div>

                  {
                    showResults && (

                      <div className="hero-search-results">

                        {
                          loading && (
                            <div className="no-results">
                              <p>Searching tours...</p>
                            </div>
                          )
                        }

                        {
                          !loading &&
                          results.length > 0 &&
                          results.map((tour)=>(

                            <Link
                              key={tour._id}
                              href={`/tours/${tour._id}`}
                              className="hero-search-item"
                              onClick={()=>{
                                setShowResults(false)
                                setSearch('')
                              }}
                            >

                              <img
                                src={tour.images?.[0]}
                                alt={tour.title}
                              />

                              <div>

                                <h4>
                                  {tour.title}
                                </h4>

                                <span>
                                  {tour.location}
                                </span>

                              </div>

                            </Link>

                          ))
                        }

                        {
                          !loading &&
                          search &&
                          results.length === 0 && (

                            <div className="no-results">

                              <p>
                                No tours found
                              </p>

                            </div>

                          )
                        }

                      </div>

                    )
                  }

            </div>

            <div className="hero-buttons">

              <Link href="/tours">

                <Button
                  text="Explore Tours"
                />

              </Link>

              <Link href="/about">

                <Button
                  text="Learn More"
                  type="secondary"
                />

              </Link>

            </div>

            {/* <div className="hero-stats">

              <div className="hero-stat-card">
                <h3>15K+</h3>
                <span>Happy Travelers</span>
              </div>

              <div className="hero-stat-card">
                <h3>120+</h3>
                <span>Destinations</span>
              </div>



            </div> */}

        </div>

      </div>

    </section>

  )

}