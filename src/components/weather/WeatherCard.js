'use client'

import { useEffect }
from 'react'

import { useState }
from 'react'

import './WeatherCard.css'

export default function WeatherCard({
  city
}){

  const [
    weather,
    setWeather
  ] = useState(null)

  useEffect(()=>{

    fetchWeather()

  },[city])

  const fetchWeather =
  async()=>{

    try{

      const res =
      await fetch(
`/api/weather?city=${city}`
      )

      const data =
      await res.json()

      setWeather(
        data.weather
      )

    }catch(error){

      console.log(error)

    }

  }

  if(!weather){

    return (
      <div className="weather-card">
        Loading weather...
      </div>
    )
  }

  return (

    <div className="weather-card">

      <h3>
        Current Weather
      </h3>

      <h2>
        {weather.main.temp}°C
      </h2>

      <p>
        {
          weather.weather[0]
          .main
        }
      </p>

      <span>
        Feels like
        {' '}
        {weather.main.feels_like}°C
      </span>

    </div>

  )

}