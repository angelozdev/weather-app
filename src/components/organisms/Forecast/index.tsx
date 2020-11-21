import React from 'react'

/* Components */
import { ForecastItem } from '../../atoms'
import { Card } from '../../molecules'

/* Hooks */
import useLocation from '../../../hooks/useLocation'
import useGetDaysForecast from '../../../hooks/useGetDaysForecast'

function Forecast() {
  /* const items = {
    city: {
      name: 'Bogotá'
    },
    list: [
      {
        dt: 1485741600,
        temp: {
          day: 285,
          min: 31,
          max: 43
        },
        weather: [
          {
            main: 'Clear',
            description: 'sky is clear',
            icon: '01n'
          }
        ]
      },
      {
        dt: 1485741600,
        temp: {
          day: 285,
          min: 31,
          max: 43
        },
        weather: [
          {
            main: 'Clear',
            description: 'sky is clear',
            icon: '01n'
          }
        ]
      }
    ]
  } */

  const { lat, lon } = useLocation()
  const { data, loading } = useGetDaysForecast({ lat, lon })

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <Card subtitle="Forecast" title="3 Days">
      {data.daily.slice(1, 4).map((item: any, index: number) => {
        const { dt, temp, weather } = item
        return (
          <ForecastItem
            date={dt}
            main={weather[0].main}
            min={temp.min}
            max={temp.max}
            icon={weather[0].icon}
            description={weather[0].description}
            key={index}
          />
        )
      })}
    </Card>
  )
}

export default Forecast
