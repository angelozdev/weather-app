import React from 'react'

/* Components */
import { Wrapper } from '../../atoms'
import { HeroWithDetails } from '../../molecules'

/* Styles */
import './style.sass'

/* Types */
interface Props {
  children: React.ReactNode
}

function Main({ children }: Partial<Props>) {
  return (
    <div className="container">
      <Wrapper>
        <HeroWithDetails />
        <div className="grid">{children}</div>
      </Wrapper>
    </div>
  )
}

export default Main
