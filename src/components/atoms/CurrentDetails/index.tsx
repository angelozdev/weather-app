import React from 'react'

/* Styles */
import './style.sass'

function CurrentDetails(): JSX.Element {
  return (
    <div className="details">
      <div className="details__card details__card--primary">
        <img
          width="40"
          height="40"
          src="http://png-4.vector.me/files/images/3/8/384388/tango_weather_overcast_thumb"
          alt="icon weather"
        />
        <small>Cloudy</small>
      </div>
      <div className="details__card details__card--secondary">
        <span>31</span>
        <sup>°c</sup>
      </div>
    </div>
  )
}

export default CurrentDetails
