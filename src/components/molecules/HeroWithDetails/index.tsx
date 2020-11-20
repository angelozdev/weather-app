import React from 'react'

/* Styles */
import './style.sass'

/* Components */
import { Hero, CurrentDetails } from '../../atoms'

function HeroWithDetails() {
  return (
    <Hero>
      <CurrentDetails />
    </Hero>
  )
}

export default HeroWithDetails
