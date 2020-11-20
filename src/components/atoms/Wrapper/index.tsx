import React from 'react'
import classnames from 'classnames'

/* Styles */
import './style.sass'

/* Types */
interface Props {
  children: React.ReactNode
  padding: boolean
}

function Wrapper({ children, padding = false }: Partial<Props>): JSX.Element {
  const wrapperStyles = classnames('wrapper', { py: padding })

  return <div className={wrapperStyles}>{children}</div>
}

export default Wrapper
