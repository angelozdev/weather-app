import React from 'react'

/* Styles */
import './style.sass'

/* Components */
import { Hero, CurrentDetails } from '../../atoms'

/* Hooks */
import useGetCurrentWeather from '../../../hooks/useGetCurrentWeather'
import useLocation from '../../../hooks/useLocation'

function HeroWithDetails() {
  const { lat, lon } = useLocation()
  const { data, loading } = useGetCurrentWeather({ lat, lon })

  if (loading) {
    return <p>loading...</p>
  }

  return (
    <Hero main={data?.weather[0].main} name={data?.name}>
      <CurrentDetails
        main={data?.weather[0].main}
        icon={data?.weather[0].icon}
        temp={data.main.temp}
      />
    </Hero>
  )
}

export default HeroWithDetails
