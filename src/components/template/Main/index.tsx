import React from 'react'
import { Wrapper } from '../../atoms'

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
        <div className="grid">{children}</div>
      </Wrapper>
    </div>
  )
}

export default Main
