import React from 'react'

/* Styles */
import './style.sass'

/* Types */
interface Props {
  icon: string
  main: string
  temp: number
}

function CurrentDetails({ icon, main, temp }: Props): JSX.Element {
  return (
    <div className="details">
      <div className="details__card details__card--primary">
        <img
          width="40"
          height="40"
          src={`https://openweathermap.org/img/w/${icon}.png`}
          alt="icon weather"
        />
        <small>{main}</small>
      </div>
      <div className="details__card details__card--secondary">
        <span>{temp}</span>
        <sup>°c</sup>
      </div>
    </div>
  )
}

export default CurrentDetails
