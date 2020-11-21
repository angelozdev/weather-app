import React from 'react'

/* Hooks */
import useGetCurrentWeather from '../../../hooks/useGetCurrentWeather'

/* Styles */
import './location-item.sass'

/* Types */
interface Props {
  coords: {
    lat: number
    lon: number
  }
  country: string
  city: string
}

function LocationItem({ coords, country, city }: Props) {
  const { data, loading } = useGetCurrentWeather(coords)

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div className="location-item">
      <div className="location-item__body">
        <figure className="location-item__image">
          <img
            src={`https://openweathermap.org/img/w/${data?.weather[0].icon}.png`}
            alt=""
          />
        </figure>
        <div className="location-item__degree">
          <p>{data?.main.temp}</p>
          <sub>°c</sub>
        </div>
        <div className="location-item__names">
          <p className="location-item__country">{country}</p>
          <p className="location-item__city">{city}</p>
        </div>
      </div>
      <div className="location-item__footer">
        <a className="location-item__humidity">
          Humidity <span>{data?.main.humidity}%</span>
        </a>
        <a className="location-item__main">{data?.weather[0].main}</a>
        <a className="location-item__velocity">{data?.wind.speed}m/h</a>
      </div>
    </div>
  )
}

export default LocationItem
