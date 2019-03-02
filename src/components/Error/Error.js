import React from 'react'
import { compose } from 'redux'
import injectSheet from 'react-jss'
import theme from '../../style/theme'

const Error = ({ classes }) => (
  <div className={classes.container}>
    <div>
      <h3>Oh no, somethings gone wrong!!</h3>
      <p>Don't worry its not your fault, go back to <a href='http://localhost:3000' className={classes.link}>event listings</a> and try something new until we can fix it.</p>
    </div>
  </div>
)

export default compose(
  injectSheet({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'calc(100vh - 56px)'
    },
    link: {
      color: theme.colors.primary
    }
  })
)(Error)
