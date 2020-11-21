import React from 'react'

/* Components */
import { Forecast, Locations, PlaceToVisit, RandomCities } from '../organisms'
import { Main } from '../template'

function App(): JSX.Element {
  return (
    <Main>
      <Forecast />
      <PlaceToVisit />
      <RandomCities />
      <Locations />
    </Main>
  )
}

export default App
