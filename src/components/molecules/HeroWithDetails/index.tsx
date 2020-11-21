import React from 'react'

/* Styles */
import './style.sass'

/* Components */
import { Hero, CurrentDetails } from '../../atoms'

/* Hooks */
import useGetCurrentWeather from '../../../hooks/useGetCurrentWeather'

function HeroWithDetails() {
  const { data, error, loading } = useGetCurrentWeather()
  console.log(data)

  if (loading) {
    return <p>loading...</p>
  }

  return (
    <Hero name={data?.name}>
      <CurrentDetails
        main={data?.weather[0].main}
        icon={data?.weather[0].icon}
        temp={data.main.temp}
      />
    </Hero>
  )
}

export default HeroWithDetails
