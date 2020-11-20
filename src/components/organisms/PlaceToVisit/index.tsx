import React from 'react'

/* Components */
import { Map } from '../../Icons'
import { Card } from '../../molecules'

/* Styles */
import './style.sass'

function PlaceToVisit() {
  return (
    <Card title="Place to" subtitle="Visit">
      <div className="place-to-visit">
        <figure className="place-to-visit__image">
          <img
            src="https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="recommended city image"
          />
        </figure>
        <div className="place-to-visit__location">
          <div className="place-to-visit__icon">
            <Map width="20" height="20" />
          </div>
          <div className="place-to-visit__place">
            <p>Arab Street</p>
            <p>Singapore</p>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default PlaceToVisit
