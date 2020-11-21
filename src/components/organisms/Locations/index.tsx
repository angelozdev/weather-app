import React from 'react'
import { LocationItem } from '../../molecules'

/* Styles */
import './locations.sass'

function Locations() {
  const coords = [
    {
      country: 'Paris',
      city: 'France',
      coords: {
        lat: 48.85341,
        lon: 2.3488
      }
    },
    {
      country: 'Lyon',
      city: 'France',
      coords: {
        lat: 45.74846,
        lon: 4.84671
      }
    }
  ]

  return (
    <div className="locations">
      {coords.map((items, index) => {
        return (
          <LocationItem
            coords={items.coords}
            country={items.country}
            city={items.city}
            key={index}
          />
        )
      })}

      <div className="locations__add-location">
        <button>Add locations</button>
      </div>
    </div>
  )
}

export default Locations
