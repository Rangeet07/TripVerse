'use client'
export const dynamic = 'force-dynamic'
import { useEffect }
from 'react'

import { useState }
from 'react'

import TourCard
from '../cards/TourCard'

import './ToursList.css'

export default function ToursList(){

  const [tours,setTours]
  = useState([])

  const [loading,setLoading]
  = useState(true)

  const [search,setSearch]
  = useState('')

  const [page,setPage]
  = useState(1)

  const limit = 6

  useEffect(()=>{

    fetchTours()

  },[page,search])

  const fetchTours =
  async ()=>{

    try{

      setLoading(true)

      const res =
      await fetch(

        `/api/tours?page=${page}&search=${search}`

      )

      const data =
      await res.json()

      setTours(data.tours)

      setLoading(false)

    }catch(error){

      console.log(error)

      setLoading(false)

    }

  }

  return (

    <section className="tours-page-section">

      <div className="container">

        {/* SEARCH */}

        <div className="search-box">

          <input
            type="text"
            placeholder="Search tours..."

            value={search}

            onChange={(e)=>{

              setSearch(
                e.target.value
              )

              setPage(1)

            }}
          />

        </div>

        {/* TOURS */}

        {
          loading ?

          <h2>
            Loading...
          </h2>

          :

          <div className="tour-grid">

            {
              tours.map((tour)=>(

                <TourCard
                  key={tour._id}
                  tour={tour}
                  title={tour.title}
                  image={
                    tour.images?.[0]
                  }
                  price={tour.price}
                  location={tour.location}
                />

              ))
            }

          </div>

        }

        {/* PAGINATION */}

        <div className="pagination">

          <button

            disabled={page===1}

            onClick={()=>
              setPage(page-1)
            }

          >
            Prev
          </button>

          <span>
            Page {page}
          </span>

          <button

            onClick={()=>
              setPage(page+1)
            }

          >
            Next
          </button>

        </div>

      </div>

    </section>

  )
}