import React from 'react'

/* Components */
import { Map } from '../../Icons'

/* Styles */
import './style.sass'

/* Types */
interface Props {
  children: React.ReactNode
  name: string
}

function Hero({ children, name }: Props): JSX.Element {
  return (
    <div className="hero">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
      </figure>
      <h4 className="city">
        <Map strokeWidth="2px" width="1.5rem" height="1.5rem" />
        <span>{name || 'Bogotá'}</span>
      </h4>
      {children}
    </div>
  )
}

export default Hero
