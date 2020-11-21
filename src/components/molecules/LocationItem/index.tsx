import React from 'react'

/* Item */
import './location-item.sass'

function LocationItem() {
  return (
    <div className="location-item">
      <div className="location-item__body">
        <figure className="location-item__image">
          <img src="https://picsum.photos/200" alt="" />
        </figure>
        <div className="location-item__degree">
          <p>29</p>
          <sub>°c</sub>
        </div>
        <div className="location-item__names">
          <p className="location-item__country">Lyon</p>
          <p className="location-item__city">Francia</p>
        </div>
      </div>
      <div className="location-item__footer">
        <a className="location-item__humidity">
          Humidity <span>64%</span>
        </a>
        <a className="location-item__main">West</a>
        <a className="location-item__velocity">8.3m/h</a>
      </div>
    </div>
  )
}

export default LocationItem
