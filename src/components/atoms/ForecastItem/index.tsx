import React from 'react'

/* Styles */
import './style.sass'

/* Types */
interface Props {
  date: number
  min: number
  max: number
  icon: string
  description: string
  main: string
}

function ForecastItem({
  date,
  min,
  max,
  icon,
  description,
  main
}: Props): JSX.Element {
  return (
    <div className="forecast-item">
      <div className="forecast-item__icon">
        <img
          src={`https://openweathermap.org/img/w/${icon}.png`}
          alt={`icon ${description}`}
        />
      </div>
      <div className="forecast-item__details">
        <p className="forecast-item__details__title">
          {new Intl.DateTimeFormat('en-US', {
            weekday: 'long'
          }).format(date * 1000)}
        </p>
        <p className="forecast-item__details__description">{main}</p>
      </div>

      <div className="forecast-item__degrees">
        <p>
          {min}
          <sup>°</sup> / {max}
          <sup>°</sup>
        </p>
      </div>
    </div>
  )
}

export default ForecastItem
