import React from 'react'

/* Components */
import { Map } from '../../Icons'

/* Styles */
import './style.sass'

/* Types */
interface Props {
  children: React.ReactNode
  name: string
  main: string
}

enum WeatherStatus {
  DRIZZLE = 'Drizzle',
  CLOUDS = 'Clouds',
  CLEAR = 'Clear',
  RAIN = 'Rain'
}

function Hero({ children, name, main }: Props): JSX.Element {
  const setImage = (main: string) => {
    switch (main) {
      case WeatherStatus.DRIZZLE:
        return 'https://images.unsplash.com/photo-1576234699886-7eb7f11aecb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
      case WeatherStatus.CLOUDS:
        return 'https://images.unsplash.com/photo-1484291704816-654a85f64ff3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1545&q=80'
      case WeatherStatus.CLEAR:
        return 'https://images.unsplash.com/photo-1506588345361-5e12b7840845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
      case WeatherStatus.RAIN:
        return 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
      default:
        return 'https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }
  }

  return (
    <div className="hero">
      <figure>
        <img src={setImage(main)} alt={`sky ${main} image`} />
      </figure>
      <h4 className="hero__city">
        <Map strokeWidth="2px" width="1.5rem" height="1.5rem" />
        <span>{name}</span>
      </h4>
      {children}
    </div>
  )
}

export default Hero
