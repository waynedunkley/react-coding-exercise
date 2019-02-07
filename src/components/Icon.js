import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'

function getSymbolSize (symbol) {
  const [,, width, height] = symbol.viewBox.split(/\s+/)
  return { width, height }
}

const Icon = ({ symbol, classes, className, style, children }) => {
  const { width, height } = getSymbolSize(symbol)
  return <svg viewBox={symbol.viewBox} className={classNames(classes.symbol, className)} width={width} height={height} style={style}>
    <use xlinkHref={`#${symbol.id}`} />
    {children}
  </svg>
}

export default injectSheet({
  symbol: {
    fill: 'currentColor',
    display: 'inline-block',
    verticalAlign: 'middle'
  }
})(Icon)
