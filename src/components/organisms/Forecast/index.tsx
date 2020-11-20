import React from 'react'
import { ForecastItem } from '../../atoms'
import { Card } from '../../molecules'

function Forecast() {
  const items = {
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
  }
  return (
    <Card subtitle="Forecast" title="3 Days">
      {items.list.map((item, index) => {
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
