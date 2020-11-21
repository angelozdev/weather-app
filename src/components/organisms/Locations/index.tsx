import React from 'react'
import { LocationItem } from '../../molecules'

/* Styles */
import './locations.sass'

function Locations() {
  return (
    <div className="locations">
      {new Array(2).fill('').map((item, index) => {
        return <LocationItem key={index} />
      })}
    </div>
  )
}

export default Locations
