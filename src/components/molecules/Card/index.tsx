import React from 'react'

/* Styles */
import './style.sass'

/* Types */
interface Props {
  title: string
  children: React.ReactNode
  subtitle: string
}

function Card({ title, children, subtitle }: Props): JSX.Element {
  return (
    <div className="card">
      <div className="card__header">
        <h3 className="card__header__title">
          <strong>{title} </strong>
          <span>{subtitle}</span>
        </h3>
      </div>
      <div className="card__body">{children}</div>
    </div>
  )
}

export default Card
