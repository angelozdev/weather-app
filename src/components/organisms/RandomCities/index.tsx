import React from 'react'
import { Plus } from '../../Icons'

/* Styles */
import './style.sass'

function RandomCities() {
  /* States */
  const SIZE = '25px'

  return (
    <div className="random-cities">
      <div className="random-cities__header">
        <Plus height={SIZE} width={SIZE} />
        <span>Top Reviewers</span>
        <div className="random-cities__reviewers">
          <img src="https://picsum.photos/50" alt="reviewer 1" />
          <img src="https://picsum.photos/50" alt="reviewer 2" />
          <img src="https://picsum.photos/50" alt="reviewer 3" />
          <img src="https://picsum.photos/50" alt="reviewer 4" />
        </div>
      </div>
    </div>
  )
}

export default RandomCities
