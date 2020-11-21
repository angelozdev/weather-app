import React from 'react'

/* Components */
import { Map, Plus } from '../../Icons'

/* Styles */
import './style.sass'

function RandomCities() {
  /* States */
  const SIZE = '20px'

  return (
    <div className="random-cities">
      <div className="random-cities__header">
        <Plus height={SIZE} width={SIZE} />
        <span>Top Reviewers</span>
        <div className="random-cities__reviewers">
          <img src="https://picsum.photos/20?random=1" alt="reviewer 1" />
          <img src="https://picsum.photos/20?random=2" alt="reviewer 2" />
          <img src="https://picsum.photos/20?random=3" alt="reviewer 3" />
          <img src="https://picsum.photos/20?random=4" alt="reviewer 4" />
        </div>
      </div>

      <div className="random-cities__body">
        <figure>
          <img src="https://picsum.photos/300?random=1" alt="image city 1" />
          <figcaption>
            <Map width={SIZE} height={SIZE} />
            <span>Art Science</span>
          </figcaption>
        </figure>

        <figure>
          <img src="https://picsum.photos/300?random=2" alt="image city 2" />
          <figcaption>
            <Map width={SIZE} height={SIZE} />
            <span>Lorem ipsum</span>
          </figcaption>
        </figure>
      </div>
    </div>
  )
}

export default RandomCities
