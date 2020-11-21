import React from 'react'

/* Components */
import { Forecast, Locations, PlaceToVisit, RandomCities } from '../organisms'
import { HeroWithDetails } from '../molecules'
import { Main } from '../template'

function App(): JSX.Element {
  return (
    <Main>
      <HeroWithDetails />
      <Forecast />
      <PlaceToVisit />
      <RandomCities />
      <Locations />
    </Main>
  )
}

export default App
